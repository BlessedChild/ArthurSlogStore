import React, { Component } from 'react'

import './productTable.less'
class ProductTable extends Component {

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
        return <div className='mobile_shoppingCart_productUnit'>
            <div className='mobile_shoppingCart_productTable'>
                <div className='mobile_shoppingCart_productTable_left'>
                    <div className='mobile_shoppingCart_productTable_left_img'>
                        <label className='container'>
                            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}></input>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className='mobile_shoppingCart_productTable_middle'>
                    <div className='mobile_shoppingCart_productTable_middle_img'>
                        <img src='' alt='图片'></img>
                    </div>
                </div>
                <div className='mobile_shoppingCart_productTable_right'>
                    <div className='mobile_shoppingCart_productTable_productInto'>介绍</div>
                </div>
            </div>
            <div className='mobile_shoppingCart_productTable_productEditor'>
                <div className='mobile_shoppingCart_productTable_productEditor_left'></div>
                <div className='mobile_shoppingCart_productTable_productEditor_right'>
                    <div className='mobile_shoppingCart_productTable_productPrice'>¥ 888</div>
                    <div className='mobile_shoppingCart_productTable_productQuantityTable'>
                        <div className='mobile_shoppingCart_productTable_productSubtract'> - </div>
                        <div className='mobile_shoppingCart_productTable_productQuantityValue'> 1 </div>
                        <div className='mobile_shoppingCart_productTable_productSubjoin'> + </div>
                    </div>
                </div>
            </div>
        </div>
    }

    /*
    toucha() {
        alert("Im an a")
    }
    */
}

export default ProductTable