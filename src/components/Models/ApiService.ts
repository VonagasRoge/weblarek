import {
  IApi,
  IOrder,
  IOrderResult,
  IProductsResponse,
} from "../../types";
export class ApiService {
  private api: IApi;
  constructor(api: IApi) {
    this.api = api;
  }

  async getProducts(): Promise<IProductsResponse> {
    const response = await this.api.get<IProductsResponse>("/product");
    return response;
  }

  sendOrder(order: IOrder): Promise<IOrderResult> {
    return this.api.post<IOrderResult>("/order", order);
  }
}
