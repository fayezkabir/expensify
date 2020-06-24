// entry point -> output
const path = require('path');

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.join( __dirname, 'public'),
        filename : 'bundle.js'
    },
    module: {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/
        }, //this rules is for js file to run babel when it sees any .js file extention
        {
            test : /\.s?css$/,
            use: [
                "style-loader" , "css-loader","sass-loader"
            ]
        }
    ]
    },
    devtool : 'cheap-module-eval-source-map',  //it will help to debug like the console.log thing , roght side it provide a link which 
                                                //will redirect to console.log decleartion statement
    devServer : {
        contentBase : path.join( __dirname, 'public'),
        historyApiFallback : true
    }
};






