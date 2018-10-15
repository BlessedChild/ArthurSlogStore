import React, { Component } from 'react'

import IdInputTable from './idInputTable/idInputTable'

// BodyContainer区域渲染的内容
class BodyContainer extends Component {
    render() {
        return <div className='storeActivity_bodyContainer'>
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <IdInputTable />
            <div style={{ marginBottom: '256px' }}></div>
        </div>
    }
}

export default BodyContainer