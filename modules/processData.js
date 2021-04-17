const { fs, json2xls, path } = require("../includes/includes")

function processData(resultArr, userName, folderPath) {
    let resultJson = JSON.stringify(resultArr);
    let xls = json2xls(JSON.parse(resultJson));
    dirCreator(folderPath);
    let filePath = path.join(folderPath, userName + ".xlsx");
    fs.writeFileSync(filePath, xls, 'binary');
}
function dirCreator(dirpath) {      //function for new folder creation at path
    if (!fs.existsSync(dirpath)) {  //chks if folder name already exists or not
        fs.mkdirSync(dirpath);
    }
}

module.exports = {
    processData
}


