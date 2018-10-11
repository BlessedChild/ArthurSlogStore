import React, { Component } from 'react'

// BodyContainer区域渲染的内容
class IdInputTable extends Component {
    render() {
        return <div className='idInputTable'>
            <div className='idInputTable_login'>
                <input placeholder={'请输入推广ID'} className='idInputTable_Input'></input>
                <div className='idInputTable_Submit'>确定</div>
            </div>
        </div>
    }
}

export default IdInputTable