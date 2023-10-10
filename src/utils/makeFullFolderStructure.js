const createFolder = require('./createFolder')
const createFile = require('./createFile');
const path = require('path');

module.exports = folderStructure = (rootFolder) => {

    // First root directory files
    createFile(rootFolder, '.env');
    createFile(rootFolder, '.gitignore');
    createFile(rootFolder, 'README.md');
    
    // Root directory src folder 
    createFolder(rootFolder, 'src');
    
    // Folders indise src directory
    createFolder(path.join(rootFolder, '\\src'), 'config');
    createFolder(path.join(rootFolder, '\\src'), 'controllers');
    createFolder(path.join(rootFolder, '\\src'), 'middlewares');
    createFolder(path.join(rootFolder, '\\src'), 'models');
    createFolder(path.join(rootFolder, '\\src'), 'respository');
    createFolder(path.join(rootFolder, '\\src'), 'routes');
    createFolder(path.join(rootFolder, '\\src'), 'services');
    createFolder(path.join(rootFolder, '\\src'), 'utils');
    
    // Files inside config folder
    createFile(path.join(rootFolder, '\\src\\config' ), 'config.json');
    createFile(path.join(rootFolder, '\\src\\config' ), 'serverConfig.js');
    
    // File inside controllers
    createFile(path.join(rootFolder, '\\src\\controllers' ), 'index.js');
    
    // File inside middlewares
    createFile(path.join(rootFolder, '\\src\\middlewares' ), 'index.js');
    
    // File inside modles
    createFile(path.join(rootFolder, '\\src\\models' ), 'index.js');
    
    // File inside repository
    createFile(path.join(rootFolder, '\\src\\respository' ), 'index.js');
    
    // File inside routes
    createFile(path.join(rootFolder, '\\src\\routes' ), 'index.js');
    // Folder inside routes
    createFolder(path.join(rootFolder, '\\src\\routes'), 'v1');
    // File inside v1 inside folder routes
    createFile(path.join(rootFolder, '\\src\\routes\\v1' ), 'index.js');
    
    // File inside services
    createFile(path.join(rootFolder, '\\src\\services' ), 'index.js');
    
    // File inside utils
    createFile(path.join(rootFolder, '\\src\\utils' ), 'index.js');
    
    // Main file inside src folder
    createFile(path.join(rootFolder, '\\src' ), 'index.js');

}

