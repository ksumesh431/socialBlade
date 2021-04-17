const{fs,json2xls}=require("../includes/includes")

function processData(resultArr){
    let resultJson = JSON.stringify(resultArr);
    let xls = json2xls(JSON.parse(resultJson));
    fs.writeFileSync('data.xlsx', xls, 'binary');
}
module.exports={
    processData
}


