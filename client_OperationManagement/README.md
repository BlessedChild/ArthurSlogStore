
> sudo npm init -y

* add webpack and webpack-cli as a dev dependency to our project

* We installed webpack-cli so that we can use webpack in the command line

> sudo npm install webpack webpack-cli --save-dev

> sudo npm install react react-dom --save

* In order for React to work, we need to install Babel alongside with it

* We need Babel to transpile ES6 and JSX to ES5

* So:

> sudo npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

* babel-core: Transforms ES6 code to ES5

* babel-loader: Webpack helper to transpile code, given the the preset

* babel-preset-env: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5

* babel-preset-react: Preset which Transforms JSX to JavaScript


* The less-loader requires less as peerDependency

* Thus you are able to control the versions accurately.

* Use the css-loader or the raw-loader to turn it into a JS module and 

* the ExtractTextPlugin to extract it into a separate file

> npm install less-loader less css-loader style-loader --save-dev

* Chain the less-loader with the css-loader and the style-loader to immediately apply all styles to the DOM

webpack.config.js
``` js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    }
};
```

* Create an index.js file inside root of the /src folder

* for now add the following line code inside it

* This file will be the entry point to our app

./src/index.js
``` js
console.log("Hello Arthur")
```

* Create an index.html file inside root of the /src folder and add following code inside it

./src/index.html
``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Boilerplate</title>
</head>

<body>
    <div id="root">

    </div>
</body>

</html>
```

* Create a webpack.config.js in the root directory of the project

* so that we can define rules for our loaders

* Define the entry point and output directory of our app inside the webpack.config.js

./webpack.config.js
``` js
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  }
};

module.exports = config;
```

* In the above code

* Webpack will bundle all of our JavaScript files into bundle.js file inside the /dist directory

* Add some loaders inside this file, which will be responsible for loading and bundling the source files

./webpcak.config.js
``` js
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
};

module.exports = config;
```

* Here babel-loader is used to load our JSX/JavaScript files and

* less-loader is used to load all of the Less files to CSS files

* css-loader is used to load and bundle all of the CSS files into one file and 

* style-loader will add all of the styles inside the style tag of the document







* Create a .babelrc file inside root of the project directory with the following contents inside of it

./.babelrc
``` js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

* This file will tell babel which presets to use for transpiling the code

* Here we are using two presets:

* env: This preset is used to transpile the ES6/ES7/ES8 code to ES5

* react: This preset is used to transpile JSX code to ES5

* Add the following lines of code inside the script object of the package.json file as below:


``` txt
"start": "webpack --mode development --watch",
"build": "webpack --mode production"
```

* Here i have used watch flag

* So whenever there is a change in source files

* Webpack will automatically compile all the source files