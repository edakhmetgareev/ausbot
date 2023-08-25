const {By, Builder, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");


(async function example() {
    // Создание экземпляра WebDriver
    let driver;
    driver = await new Builder().forBrowser('chrome').build();

    try {
        // Перейти на нужную страницу
        await driver.get('https://otv.verwalt-berlin.de/ams/TerminBuchen/wizardng?sprachauswahl=en');
        await driver.manage().setTimeouts({implicit: 5000});

        // Найти чекбокс по id и кликнуть на него
        const checkbox = await driver.findElement(By.id('xi-cb-1'));

        if (checkbox) {
            await checkbox.click();

            // Проверить, что чекбокс кликнут
            const isChecked = await checkbox.isSelected();
            if (isChecked) {
                console.log('Чекбокс успешно кликнут.');
            } else {
                console.log('Чекбокс не кликнут.');
            }
        } else {
            console.log("Чекбокс не найден.")
        }


    } finally {
        // Закрыть браузер после завершения
        await driver.quit();
    }
})();