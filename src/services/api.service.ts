import axios, { AxiosInstance } from 'axios';

export class APIService {

  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333/v1',
    });
  }

  async transpileCode(code: string): Promise<string> {
    const response = await this.api.post('/transpile', { json: code });

    console.log(response);

    return `${code}\ntest`;
  }

}

export const api = new APIService();
