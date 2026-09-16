import { test, expect } from '@playwright/test';
import { ProductAPI } from '../Services/productAPI';

const data = {
//"id": 22,
"title": "New Product",
"price": 1.1,
//"description": "string",
//"category": "string",
//"image": "http://example.com"
} 

test.describe('Product API Tests', () => {
test('Create Product', async ({ request }) => {
    const productAPI = new ProductAPI(request);
const response = await productAPI.createProduct(data);

  await expect(response.status()).toBe(201);
  await expect(response.statusText()).toBe('Created');
 // await expect(response.json()).toEqual(data);
  console.log(await response.json());


});
});
