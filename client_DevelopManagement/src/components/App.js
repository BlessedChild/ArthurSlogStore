import React, { Component } from "react";
import path from "path";
import Button from "./Button";
import '../styles/App.less';

class App extends Component {
    render() {
        return (
            <div>
                <h1>ArthurSlog Develop Managerment</h1>
                <Button />
            </div>
        );
    }
}

// 这里config作为一个object 所以使用{}
export const Config = {
    serverAddress: "http://localhost:3000/"
}

// 一个js文件里 export default 只能有一个
// 例如：index.js 和 App.js
// App.js里面使用export default xxx 
// 那么 对应的是在index.js里面使用 import xxx from “./App.js”
// --
// 一个js文件里 export 可以有多个
// 例如：index.js 和 App.js
// App.js里面使用export const xxx 
// 那么 对应的是在index.js里面使用 import {xxx} from “./App.js”
// 区别在于 使用export 需要在引入的时候 给引入的对象加大括号 {}
export default App;