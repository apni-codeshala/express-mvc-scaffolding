const fs = require('fs');
const path = require('path');

module.exports =  createFolder = (folderLocation, foldername) => {
    const folderPath = path.join(folderLocation, '//', foldername);
    fs.mkdir(
        folderPath,
        {recursive: true},
        (error) => {
            if(error) {
                console.log(error);
            } else {
                console.log(`${folderPath} folder created successfully`);
            }
        } 
    );
}