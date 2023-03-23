import axios, { Axios, AxiosError, AxiosInstance, CancelTokenSource } from 'axios';
import { APIError } from '../errors/APIError';

export class APIService {

  private readonly api: AxiosInstance;
  private cancelToken: CancelTokenSource;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333/v1',
    });

    this.cancelToken = axios.CancelToken.source();
  }

  private generateNewCancelToken() {
    this.cancelToken = axios.CancelToken.source();
  }

  async transpileCode(code: string): Promise<string> {

    try {
      if(this.cancelToken.token.reason) {
        this.cancelToken.cancel();

        this.generateNewCancelToken();
      }

      const response = await this.api.post(
        '/transpile',
        { json: code },
        { cancelToken: this.cancelToken.token },
      );

      const codeTranspiled = response.data?.result;

      if(!codeTranspiled) {
        throw new Error();
      }

      return codeTranspiled;
    } catch (err: AxiosError | Error | unknown) {

      if(err instanceof AxiosError) {

        if(err.code === 'ERR_NETWORK') {
          throw new APIError('Nossos servidores estão fora no momento, por favor, tente novamente mais tarde.', 503);
        }

        if(err.response) {
          throw new APIError(err.response.data.errorFeedback, err.response.status);
        }

        if(axios.isCancel(err)) {
          throw new APIError('Transpilação cancelada.', -1);
        }

        throw new APIError('Houve um problema interno no servidor, por favor, tente novamente mais tarde.', 500);
      }

      throw new APIError('Houve um problema interno no cliente, por favor, tente novamente.', -1);
    }
  }

  async cancelTranspilation() {
    this.cancelToken.cancel('Transpilação cancelada.');
  }

}

export const api = new APIService();
