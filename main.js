const { data } = require("./modules/processPage");
const { processData } = require("./modules/processData")
const { puppeteer } = require("./includes/includes")


let $;
let input = process.argv[2];
(async () => {
    try {
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--incognito", "--start-maximized"]
        })
        let tabsArray = await browser.pages();
        $ = tabsArray[0];
        await $.setDefaultNavigationTimeout(0);
        await $.goto("https://socialblade.com/");
        await $.waitForSelector('#SearchInput')
        await $.type("#SearchInput", input, { delay: 50 });
        await $.keyboard.press('Enter');
        await $.keyboard.press('Enter');
        await $.waitForSelector('div[id="YouTubeUserTopHeader"]')
        const url = await $.url();
        let resultArr = await data($);
        console.table(resultArr);
        processData(resultArr);



    } catch (err) {
        console.log(err);
    }
})()



