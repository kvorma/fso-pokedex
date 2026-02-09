const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  })
  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test.only('Kakuna character page can be opened', async ({ page }) => {
    await page.getByText('kakuna').click()
    await page.waitForURL('**/kakuna');
    await expect(page.getByText('Shed Skin')).toBeVisible()
  })
})
