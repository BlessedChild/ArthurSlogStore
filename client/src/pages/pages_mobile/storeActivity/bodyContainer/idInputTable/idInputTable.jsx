import React, { Component } from 'react'

import './idInputTable.less'

// BodyContainer区域渲染的内容
class IdInputTable extends Component {
    render() {
        return <div className='mobile_shoppingCart_productUnit'>
        <div className='mobile_shoppingCart_productTable'>
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
                <div className='mobile_shoppingCart_productTable_productPrice'>¥ 888.00</div>
                <div className='mobile_shoppingCart_productTable_productQuantityTable'>
                    <div className='mobile_shoppingCart_productTable_addInShoppingCart'>加入购物车</div>
                </div>
            </div>
        </div>
    </div>
    }
}

export default IdInputTable