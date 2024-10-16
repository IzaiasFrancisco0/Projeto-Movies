const path = require('path');
    
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "./src/styles/variables.scss";`
    }
}
