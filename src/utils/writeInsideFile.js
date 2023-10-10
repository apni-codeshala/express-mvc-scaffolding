const fs = require('fs');

module.exports = writeContent = (filePath, content) => {
    fs.writeFile(filePath, content, 'utf-8', error => {
        if(error) {
            console.log(error);
        } else {
            console.log(`Content in ${filePath} written succesffully`);
        }
    });
}