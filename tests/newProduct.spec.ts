import { test, expect } from '@playwright/test';

const data = {
//"id": 22,
"title": "New Product",
"price": 1.1,
//"description": "string",
//"category": "string",
//"image": "http://example.com"
} 

test('Create Product', async ({ request }) => {
 const response = await request.post('products', {
    data: data
  });

  //console.log('Encabezados enviados:', response.request().headers());

  await expect(response.status()).toBe(403);
  //await expect(response.statusText()).toBe('Created');
 // await expect(response.json()).toEqual(data);
  console.log(await response.json());
      console.log(await response.status());



});
