const {By, Builder, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");

suite(function (env) {
    describe('First script', function () {
        let driver;

        before(async function () {
            driver = await new Builder().forBrowser('chrome').build();
        });

        // after(async () => await driver.quit());

        it('First Selenium script', async function () {
            await driver.get('https://otv.verwalt-berlin.de/ams/TerminBuchen/wizardng?sprachauswahl=en');
            await driver.manage().setTimeouts({implicit: 5000});

            let privacyChbx = await driver.findElement(By.id('xi-cb-1'));
            assert.equals(privacyChbx.isSelected(), false);

            
            // privacyChbx.click();
            //
            // let nextBtn = await driver.findElement(By.id('applicationForm:managedForm:proceed'));
            // nextBtn.click();

            //
            // let textBox = await driver.findElement(By.name('my-text'));
            // let submitButton = await driver.findElement(By.css('button'));
            //
            // await textBox.sendKeys('Selenium');
            // await submitButton.click();
            //
            // let message = await driver.findElement(By.id('message'));
            // let value = await message.getText();
            // assert.equal("Received!", value);
        });
    });
}, { browsers: [Browser.CHROME]});