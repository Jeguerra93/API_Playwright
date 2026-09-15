import { APIRequestContext } from '@playwright/test';

export class ProductAPI {
    readonly request: APIRequestContext;
    readonly basePath: string = 'products';

    constructor(request: APIRequestContext) {
        this.request = request;
        this.basePath = 'products';
    }

    async getAllProducts() {
        const response = await this.request.get(this.basePath);
        return response;
    }

     async createProduct(datosProducto: object) {

    return await this.request.post(this.basePath, {

      data: datosProducto,

    });
}}