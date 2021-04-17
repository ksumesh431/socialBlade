async function data($) {
    try {
        function consoleFunction() {
            let arr = [];
            for (let i = 7; i < 20; i++) {
                let Date = document.querySelector(`#socialblade-user-content > div:nth-child(${i}) > div:nth-child(1)`).innerText.trim();
                let views = document.querySelector(`#socialblade-user-content > div:nth-child(${i}) > div:nth-child(4)`).innerText.trim();
                let earn = document.querySelector(`#socialblade-user-content > div:nth-child(${i}) > div:nth-child(5)`).innerText.trim();
                let nView = views.split("\n")[0];
                let usrObj = {
                    Date,
                    "Video views": nView,
                    'Estimated Earning': earn
                }
                arr.push(usrObj);
            }
            return arr;
        }
        return $.evaluate(consoleFunction);
    } catch (err) {
        console.log(err);
    }
}

module.exports={
    data
}

