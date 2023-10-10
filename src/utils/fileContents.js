const indexContent = `const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', ApiRoutes);

app.get('/', (req, res) => {
    return res.status(200).send('Getting from home page')
});

app.listen(PORT, async () => {
    console.log('Server started at ', PORT);
});
`

const routeIndexContent = `const express = require('express');
const router = express.Router();

const v1ApRoutes = require('./v1/index');

router.use('/v1', v1ApRoutes);

module.exports = router;
`

const v1IndexContent = `const express = require('express');

const router = express.Router();

// Add all your routes here importing from controllers and you will get that route at /api/v1/yourRoutes

module.exports = router;
`

const serviceIndex = `module.exports = {
    // import all your services object and export all of them from here
}
`

const controllersIndex = `module.exports = {
    // import all your controllers object and export all of them from here
}
`
const middlewaresIndex = `module.exports = {
    // import all your middlewares object and export all of them from here
}
`
const modelsIndex = `module.exports = {
    // import all your models/schema object and export all of them from here
}
`
const respositoryIndex = `module.exports = {
    // import all your respository object and export all of them from here
}
`

const utilsIndex = `module.exports = {
    // import all your utils object and export all of them from here
}
`

const envContent = `PORT = 3000`

const gitignoreContent = `node_modules\\
.env
src\\serverConfig.js
`

const readmeContent = `## Basic Express Setup`

const serverConfigContent = `const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT
}
`

module.exports = {
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
}