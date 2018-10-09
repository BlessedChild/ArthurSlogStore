///
/// 构造虚拟dom对象
///
import React, { Component } from 'react'

// 引入四个主界面
import StoreIndex from './pages/storeIndex/index'
import ShoppingCart from './pages/shoppingCart/index'
import PromotionCenter from './pages/promotionCenter/index'
import PersonalCenter from './pages/personalCenter/index'

// 引入配置文件
import Config from './config.json'

class App extends Component {

  constructor() {
    super()
    this.state = { padeId: [] }
  }
  render() {
    // 把四个主界面放在 index 对象里，根据 pageId 的值，选择渲染的界面
    // 例如：
    // padeId = 0，意思就是渲染 StoreIndex 界面
    // padeId = 1，意思就是渲染 ShoppingCart 界面
    // padeId = 2，意思就是渲染 PromotionCenter 界面
    // padeId = 3，意思就是渲染 PersonalCenter 界面
    const index = [<StoreIndex changePage = {pageId => this.changePage(pageId)} />, <ShoppingCart changePage = {pageId => this.changePage(pageId)}/>, <PromotionCenter changePage = {pageId => this.changePage(pageId)}/>, <PersonalCenter changePage = {pageId => this.changePage(pageId)}/>]

    return <div className='page-container'>
      {index[this.state.pageId]}
    </div>
  }

  // componentDidMount
  // 参考链接： https://reactjs.org/docs/react-component.html#componentdidmount
  //
  // componentDidMount()在页面加载之前执行
  componentDidMount() {
    this.loadData()
    console.log('componentDidMount OK')
    // 载入StoreIndex页面
    this.setState({
      pageId: 0
    })
  }

  changePage(pageIds){
    this.setState({
      pageId: pageIds
    })
  }

  // 向服务器请求数据
  loadData() {
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

  

  /*
  // 向服务器添加数据
  createIssue(newIssue) {
    //console.log(JSON.stringify(newIssue))
    console.log('Add data to message')
    if (newIssue.owner) {
      console.log('NewIssue.owner is true')
      console.log('NewIssue.owner: ', newIssue.owner)

      fetch('http://localhost:3000/api/issues/POST', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newIssue),
      })
        .then(response => {
          console.log('Add data to message successfuly')
          const resmsg = response.json()
          console.log('Response1: ', resmsg)
          console.log('Response2: ', response)
          return resmsg
        })
        .then(updateIssue => {
          console.log('UpdateIssue1: ', updateIssue)
          updateIssue.created = new Date(updateIssue.created)
          if (updateIssue.completionDate)
            updateIssue.completionDate = new Date(updateIssue.completionDate)

          const newIssue = this.state.issues.concat(updateIssue)
          this.setState({ issues: newIssue })
          console.log('UpdateIssue2: ', updateIssue)
        })
        .catch(err => {
          alert("Error in sending data to server: " + err.message)
        })
    } else {
      console.log('NewIssue.owner is false')
    }
  }
  */
}

// 导出虚拟dom对象，供主函数进行数据插入和最终webapp渲染
export default App;
