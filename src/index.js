#!/usr/bin/env node

const folderStructure = require('./utils/makeFullFolderStructure');
const putContent = require('./utils/putContentInsideFiles');

function makeMvcTemplate() {
    const rootDirectory = process.cwd();
    folderStructure(rootDirectory);
    putContent(rootDirectory);
}

makeMvcTemplate();