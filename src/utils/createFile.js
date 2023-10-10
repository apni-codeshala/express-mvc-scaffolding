const fs = require('fs');
const path = require('path');

module.exports = createFile = (folderLocation, fileName) => {
    const fileLocation = path.join(folderLocation, '//', fileName);
    const makeFile = fs.createWriteStream(fileLocation);
    makeFile.end();
}