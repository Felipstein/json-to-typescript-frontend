import axios, { AxiosError, AxiosInstance, CancelTokenSource } from 'axios';
import { APIError } from '../errors/APIError';
import { TranspilationType } from '../types/Transpilations';

export class APIService {

  private readonly api: AxiosInstance;
  private cancelToken: CancelTokenSource;
  private timeoutTimer: number;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333/v1',
    });

    this.cancelToken = axios.CancelToken.source();

    this.timeoutTimer = 0;
  }

  private generateNewCancelToken() {
    this.cancelToken = axios.CancelToken.source();
  }

  async transpileCode(code: string, transpilationType: TranspilationType): Promise<string> {

    try {
      if(this.cancelToken.token.reason) {
        this.generateNewCancelToken();
      }

      this.timeoutTimer = setTimeout(() => {
        this.cancelTranspilation('TIME_OUT');
      }, 20000);

      const response = await this.api.post(
        '/transpile',
        { json: code, transpilation_type: transpilationType },
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
          throw new APIError(this.cancelToken.token.reason?.message || 'Transpilação cancelada.', -1);
        }

        throw new APIError('Houve um problema interno no servidor, por favor, tente novamente mais tarde.', 500);
      }

      throw new APIError('Houve um problema interno no cliente, por favor, tente novamente.', -1);
    } finally {
      clearTimeout(this.timeoutTimer);
    }
  }

  async cancelTranspilation(reason?: 'BY_USER' | 'TIME_OUT') {
    this.cancelToken.cancel(reason === 'TIME_OUT' ? 'Tempo excedido, execute novamente.' : 'Transpilação cancelada.');
  }

}

export const api = new APIService();
