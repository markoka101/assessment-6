
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with id="choices"', async () => {
    await driver.findElement(By.id('draw')).click();
    const choices = await driver.findElement(By.xpath('//body/section[1]/div'))
    const displayed = await choices.isDisplayed();
    expect(displayed).toBe(true);
})

test('moves selected bot into div with id="players-duo"', async () =>  {
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.xpath('//body/section[1]/div/div[1]/button')).click();
    const bot = await driver.findElement(By.xpath('//body/section[2]/section[1]/div'));
    const displayed = await bot.isDisplayed();
    expect(displayed).toBe(true);
})