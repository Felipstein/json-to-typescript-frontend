import axios, { AxiosError, AxiosInstance } from 'axios';
import { APIError } from '../errors/APIError';

export class APIService {

  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333/v1',
    });
  }

  async transpileCode(code: string): Promise<string> {
    try {
      const response = await this.api.post('/transpile', { json: code });

      console.log(response);

      return `${code}\ntest`;
    } catch (err: AxiosError | Error | unknown) {
      console.log(err);

      throw new APIError(err as string, 500);
    }
  }

}

export const api = new APIService();
