// Generated by Selenium IDE
const { Builder, By, Key, until} = require('selenium-webdriver')
const assert = require('assert')

var chrome = require("selenium-webdriver/chrome");
var options = new chrome.Options();
// CHROME PROFILE: needs to be set up in order to use logins
options.addArguments("user-data-dir=/Users/ebas/Library/Application Support/Google/Chrome")
options.addArguments("profile-directory=Profile 1")

// configurations
//options.addArguments("--headless")
//options.addArguments("--no-sandbox");
options.addArguments("--disable-dev-shm-usage");

describe('test1', function() {
  this.timeout(30000)
  let driver 
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test1', async function() {
     await driver.get("https://drift--full.sandbox.lightning.force.com/lightning/page/home")
     await driver.manage().window().setRect({ width: 1280, height: 776 })
     await bro
     await driver.wait(until.elementLocated(By.css(".navItem:nth-child(3) .slds-truncate")), 30000)
     //await driver.findElement(By.css(".navItem:nth-child(3) .slds-truncate")).click()
  })
})
