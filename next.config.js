const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
    
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "./src/styles/variables.scss";`
    },
    assetPrefix: isProd ? '/Projeto-Movies/' : '',
    basePath: isProd ? '/Projeto-Movies' : '',
}
