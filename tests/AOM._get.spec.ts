import { test, expect } from '@playwright/test';
import { ProductAPI } from '../Services/productAPI';


test.describe('Product API Tests', () => {
  test('Get All Products', async ({ request }) => {

    const productAPI = new ProductAPI(request);
    const response = await productAPI.getAllProducts();

    await expect(response.status()).toBe(200);
    await expect(response.statusText()).toBe('OK');
    // await expect(response.json()).toEqual(data);
    console.log(await response.json());


  });
});
