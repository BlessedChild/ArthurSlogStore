import React, { Component } from "react";
import { Config } from "./App";
import '../styles/Button.less';

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Datas: '',
            ResponseDatas: '',
            value: '1'
        }

        this.sendDatas = this.sendDatas.bind(this);
        this.handleChange_select = this.handleChange_select.bind(this);
        this.handleChange_input = this.handleChange_input.bind(this);
    }

    // 官方对<select>的使用手册： https://reactjs.org/docs/forms.html#the-select-tag
    /*
    <select>
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option selected value="coconut">Coconut</option>
    <option value="mango">Mango</option>
    </select>

    class FlavorForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: 'coconut'};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            alert('Your favorite flavor is: ' + this.state.value);
            event.preventDefault();
        }

        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
        }
    }
    */
    render() {
        return (
            <div className="container">
                <div className="operateBar">
                    <div className="selectBar">
                        <div>
                            选择接口：
                    </div>
                        <div>
                            <select value={this.state.value} onChange={this.handleChange_select}>
                                <option value="0">func0</option>
                                <option value="1">func1</option>
                                <option value="2">func2</option>
                                <option value="3">func3</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputBar">
                        <input className="ClientDatas" type="text" value={this.state.Datas} onChange={this.handleChange_input} placeholder="输入测试数据" />
                        <button onClick={this.sendDatas}>测试</button>
                    </div>
                </div>
                <div className="ShowBar">
                    <div className="ShowResponseDatas">
                        {this.state.ResponseDatas}
                    </div>
                </div>
            </div>
        );
    }

    handleChange_select(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleChange_input(event) {
        this.setState({
            Datas: event.target.value
        });
    }

    sendDatas() {
        // let Datas = document.getElementsByClassName("ClientDatas").value

        /*
        转换函数：parseInt()和parseFloat()分别将值转换成整数和浮点数
        强制类型转换：Boolean(value)、Number(value)、String(value)将给定的值分别转换成逻辑值、数字（整数或浮点数）及字符串
        弱类型自动转换：字符串与数字进行数学操作符运算时，字符串会自动转为数字
        */
        const myObj = { func: parseInt(this.state.value), object: this.state.Datas }
        fetch(Config.serverAddress + 'api/client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myObj),
        })
            .then(response => {
                console.log('Add data to message successfuly')
                // 这里获取到了服务端返回的‘公告栏’的数据 resmsg
                const resmsg = response.json()
                console.log('Response1: ', resmsg)
                console.log('Response2: ', response)
                return resmsg
            })
            .then(resmsg => {
                // 然后 传值给‘公告栏’
                // 接着 重新渲染（局部渲染）页面
                // 语法 查一下setState里怎么使用对象
                this.setState({
                    ResponseDatas: resmsg
                })
            })
            .catch(err => {
                alert("Error in sending data to server: " + err.message)
            })
    }
}

export default Button;