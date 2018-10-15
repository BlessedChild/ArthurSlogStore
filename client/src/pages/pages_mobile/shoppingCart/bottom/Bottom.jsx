import React, { Component } from 'react'

import './Bottom.less'

class Bottom extends Component {

    // 对应‘购物车’按钮
    // 这里创建一个函数，用于向服务器请求shoppingCart相关的数据，点击购物车按钮时执行（然后渲染购物车页面，隐藏Header组件，替换BodyContainer组件的页面）？所以想到这里，BodyContainer组件是不是需要做成由动态组件组成的？根据数据进行渲染？还是直接路由道购物车页面？
    // 然后，把获得的数据传给shoppingCart页面
    // 怎么传递，通过props
    // 在这个组件里，导入shoppingCart import from ‘pages/shoppingCart/index’
    // 然后，在这个组件里的render（）方法里，使用<shoppingCart shoppingCartData=上述函数先服务器请求获得的数据>，把数据传给 ‘pages/shoppingCart/index’
    // 接下来，在 ‘pages/shoppingCart/index.js’ 里，使用 this.props.shoppingCartData 接收这个数据

    //其他按钮同理

    constructor(props) {
        super(props)
        this.state = {
            checked: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(() => {
            return { checked: (this.state.checked == true ? false : true) }
        })
    }


    componentDidMount() {
        this.setState(() => {
            // Important: read `state` instead of `this.state` when updating.
            return { checked: true }
        })
    }

    render() {
        return <div className='bottom_count'>
            <div className='bottom_left'>
                <div className='bottom_left_selectAll'>
                    <div className='bottom_left_selectAll_checkbox'>
                        <label className='container'>
                            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}></input>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='bottom_left_selectAll_checkbox_text'>全选</div>
                </div>
                <div className='bottom_left_priceTable'>
                    <div className='bottom_left_priceTable_count'>总计：</div>
                    <div className='bottom_left_priceTable_priceUnit'>¥</div>
                    <div className='bottom_left_priceTable_priceValue'>888.00</div>
                </div>
            </div>
            <div className='bottom_right'>
                <div className='bottom_right_table'>
                    <div className='bottom_right_text'>去结算</div>
                    <div className='bottom_right_valueText'>(0件)</div>
                </div>
            </div>
        </div>
    }
}

export default Bottom