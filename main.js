const puppeteer=require("puppeteer");
let $;
let input=process.argv[2];
(async ()=>{
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--incognito", "--start-maximized"]
        })
        let tabsArray=await browser.pages();
        $=tabsArray[0];
        await $.goto("https://socialblade.com/");
        await $.type("#SearchInput",input,{delay:50});
        await $.keyboard.press('Enter');
        await $.keyboard.press('Enter');
        await $.waitForSelector('div[id="YouTubeUserTopHeader"]')
        const url=await $.url();
        console.log(url);
        





    }catch(err){
        console.log(err);
    }
})()


/*


#socialblade-user-content > div:nth-child(7)


*/

