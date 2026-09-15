import { test, expect } from '@playwright/test';


test('Obtain All Products', async ({ request }) => {
 const response = await request.get('products')
    
    console.log(response.url());

  await expect(response.status()).toBe(200);
  await expect(response.statusText()).toBe('OK');
 // await expect(response.json()).toEqual(data);
  //console.log(response.json());


});
