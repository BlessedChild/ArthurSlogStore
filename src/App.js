///
/// 构造 虚拟dom对象（数据结构）
///
import React, { Component } from 'react'

// 引入mobile的四个主界面
import StoreIndex from './pages/pages_mobile/storeIndex/index'
import ShoppingCart from './pages/pages_mobile/shoppingCart/index'
import StoreActivity from './pages/pages_mobile/storeActivity/index'
import PersonalCenter from './pages/pages_mobile/personalCenter/index'

// 引入pc的主界面
import StoreIndex_Pc from './pages/pages_pc/storeIndex/index'

// 引入配置文件
import Config from './config.json'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      padeId: []
    }
  }

  render() {
    let index

    function browserRedirect() {
      let sUserAgent = navigator.userAgent.toLowerCase()
      let bIsIpad = sUserAgent.match(/ipad/i) == "ipad"
      let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"
      let bIsMidp = sUserAgent.match(/midp/i) == "midp"
      let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"
      let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"
      let bIsAndroid = sUserAgent.match(/android/i) == "android"
      let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"
      let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"
      if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        index = 'mobile'
      }
      else {
        index = 'pc'
      }
    }

    browserRedirect()
    
    // 把四个主界面放在 mobile端 对象里，根据 pageId 的值，选择渲染的界面
    // 例如：
    // padeId = 0，意思就是渲染 StoreIndex 界面
    // padeId = 1，意思就是渲染 ShoppingCart 界面
    // padeId = 2，意思就是渲染 PromotionCenter 界面
    // padeId = 3，意思就是渲染 PersonalCenter 界面

    // mobile端
    let mobile = [<StoreIndex changePage={pageId => this.changePage(pageId)} />, <ShoppingCart changePage={pageId => this.changePage(pageId)} />, <StoreActivity changePage={pageId => this.changePage(pageId)} />, <PersonalCenter changePage={pageId => this.changePage(pageId)} />]
    // pc端 
    let pc = [<StoreIndex_Pc />]

    // 判断客户端是mobile还是pc
    // 根据结果 对页面采用合适的布局
    if (1) {
      index = mobile
      //alert('当前客户端是PC')
    }
    else if (0) {
      index = pc
      //alert('当前客户端是Mobile')
    }
    else {
      alert('请使用Pc浏览器或手机浏览器打开')
    }

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

  changePage(pageIds) {
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
