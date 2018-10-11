import React, { Component } from 'react'

import IdInputTable from './idInputTable/idInputTable'

// BodyContainer区域渲染的内容
class BodyContainer extends Component {
    render() {
        return <div className='storeActivity_bodyContainer'>
            <IdInputTable />
        </div>
    }
}

export default BodyContainer