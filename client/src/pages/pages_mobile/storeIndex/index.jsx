// 这个组件是商城主页
// 用来承载商城主页页面上的所有组件
import React, { Component } from 'react'

// 引入完整页面的所有组件
import Header from './header/Header'
import BodyContainer from './bodyContainer/BodyContainer'
import Bottom from './bottom/Bottom'

// 引入当前页面的样式
import './index.less'

class storeIndex extends Component {
    render() {
        return <div className='mobile_StoreIndex'>
            <Header />
            <BodyContainer />
            <Bottom changePage = {this.props.changePage}/>
        </div>
    }

    getStoreIndexDate(){
        fetch(Config.baseUrl + 'api/issues/GET')
      .then(response => {
        if (response.ok) {
          console.log('Connect Server')
          response.json()
            .then(data => {
              console.log('Total count of records:', data._metadata.total_count)
              data.records.forEach(issue => {
                issue.created = new Date(issue.created)
                if (issue.completionDate)
                  issue.completionDate = new Date(issue.completionDate)
              })
              // 把服务端传过来的所有数据 存储在 本组件的全局对象 state里面的 data对象里
              this.setState({ data: data })
              // 把服务端传过来的records数据 存储在 本组件的全局对象 state里面的 issues对象里
              this.setState({ issues: data.records })
            })
        } else {
          console.log('Disconnect Server')
          response.json()
            .then(err => {
              alert("Failed to fetch issues: " + err.message)
            })
            .catch(err => {
              alert("Error in sending data to server: " + err.message)
            })
        }
      })

    }
}

export default storeIndex