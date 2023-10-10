const path = require('path');
const writeContent = require('./writeInsideFile');
const {
    indexContent,
    routeIndexContent,
    v1IndexContent,
    serverConfigContent,
    readmeContent,
    gitignoreContent,
    serviceIndex,
    respositoryIndex,
    controllersIndex,
    middlewaresIndex,
    modelsIndex,
    envContent,
    utilsIndex
} = require('./fileContents');

module.exports = putContent = (rootFolder) => {

    // Put content inside index.js
    writeContent(path.join(rootFolder, '\\src\\index.js'), indexContent);

    // Put content inside routes\index.js
    writeContent(path.join(rootFolder, '\\src\\routes\\index.js'), routeIndexContent);

    // Put content inside routes\v1\index.js
    writeContent(path.join(rootFolder, '\\src\\routes\\v1\\index.js'), v1IndexContent);

    // Put content inside config\serverConfig.js
    writeContent(path.join(rootFolder, '\\src\\config\\serverConfig.js'), serverConfigContent);

    // Put heading inside readme
    writeContent(path.join(rootFolder, '\\README.md'), readmeContent);

    // Put files to ignore in git
    writeContent(path.join(rootFolder, '\\.gitignore'), gitignoreContent);

    // Put content insdie services\index.js
    writeContent(path.join(rootFolder, '\\src\\services\\index.js'), serviceIndex);

    // Put content inside repository\index.js
    writeContent(path.join(rootFolder, '\\src\\respository\\index.js'), respositoryIndex);

    // Put content inside controllers/index.js
    writeContent(path.join(rootFolder, '\\src\\controllers\\index.js'), controllersIndex);

    // Put content inside middlewares\index.js
    writeContent(path.join(rootFolder, '\\src\\middlewares\\index.js'), middlewaresIndex);

    // Put content inside models\index.js
    writeContent(path.join(rootFolder, '\\src\\models\\index.js'), modelsIndex);

    // Put content inside env
    writeContent(path.join(rootFolder, '\\.env'), envContent);

    // Put content inside utils\index.js
    writeContent(path.join(rootFolder, '\\src\\utils\\index.js'), utilsIndex);

}