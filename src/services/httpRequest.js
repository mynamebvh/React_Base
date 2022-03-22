import { axiosInstance } from "./initRequest";

class HttpRequest {
  api;

  constructor() {
    this.api = axiosInstance;
  }

  async get(url, config) {
    return this.api.get(url, config);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
