import React, { Component } from 'react'

// 引入轮播组件
import Carouselarea from './carouselarea/carouselarea'
// 引入配置文件
import Config from '../../../../config.json'
// 引入样式文件
import './BodyContainer.less'

class BodyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { bulletinBoard_Text: '' }

        this.recbulletinBoard_Text = this.recbulletinBoard_Text.bind(this)
    }

    render() {
        return <div className='mobile_StoreIndex_BodyContainer'>
            <Carouselarea />
            <div className='bulletinBoard'>
                <div className='bulletinBoardImg'>图片</div>
                <div className='bulletinBoardBar'>{this.state.bulletinBoard_Text}</div>
            </div>
            <div className='navigationBar'>
                <div className='navigationBarItem'>
                    <div className='navigationBarIconItem'>图片</div>
                    <div>所有商品</div>
                </div>
                <div className='navigationBarItem'>
                    <div className='navigationBarIconItem'>图片</div>
                    <div>拼团</div>
                </div>
                <div className='navigationBarItem'>
                    <div className='navigationBarIconItem'>图片</div>
                    <div>限时促销</div>
                </div>
                <div className='navigationBarItem'>
                    <div className='navigationBarIconItem'>图片</div>
                    <div>秒杀</div>
                </div>
            </div>
            <div className='recommendBar'>
                <div className='recommendBarImg'>图片</div>
                <div>热销推荐</div>
            </div>
            <div className='theBestProduct'>
                <div className='theBestProduct_topBar'>
                    <div className='theBestProduct_topBar_title'>镇店之宝</div>
                    <div className='theBestProduct_topBar_more'>更多</div>
                </div>
                <div className='theBestProductList'>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目1</div>
                    </div>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目2</div>
                    </div>
                </div>
            </div>
            <div className='theBestProduct'>
                <div className='theBestProduct_topBar'>
                    <div className='theBestProduct_topBar_title'>专业工具</div>
                    <div className='theBestProduct_topBar_more'>更多</div>
                </div>
                <div className='theBestProductList'>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目1</div>
                    </div>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目2</div>
                    </div>
                </div>
            </div>
            <div className='theBestProduct'>
                <div className='theBestProduct_topBar'>
                    <div className='theBestProduct_topBar_title'>新品上市</div>
                    <div className='theBestProduct_topBar_more'>更多</div>
                </div>
                <div className='theBestProductList'>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目1</div>
                    </div>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目2</div>
                    </div>
                </div>
            </div>
            <div className='theBestProduct'>
                <div className='theBestProduct_topBar'>
                    <div className='theBestProduct_topBar_title'>力荐专区</div>
                    <div className='theBestProduct_topBar_more'>更多</div>
                </div>
                <div className='theBestProductList'>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目1</div>
                    </div>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目2</div>
                    </div>
                </div>
            </div>
            <div className='theBestProduct'>
                <div className='theBestProduct_topBar'>
                    <div className='theBestProduct_topBar_title'>特惠专区</div>
                    <div className='theBestProduct_topBar_more'>更多</div>
                </div>
                <div className='theBestProductList'>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目1</div>
                    </div>
                    <div className='theBestProductListItem'>
                        <div className='theBestProductListItemImg'>图片</div>
                        <div className='theBestProductListItemText'>类目2</div>
                    </div>
                </div>
            </div>
            <div className='aboutWe'>
                <div className='aboutWeImg'>图片（关于我们）</div>
                <div className='shoppingProcess'>图片（购物流程）</div>
                <div className='customerService'>
                    <div className='customerServiceTitle'>客服在线</div>
                    <div className='customerServiceText'>售前售后的任何问题，请及时联系客户，我们一定妥善为您解决。如果没有得到及时的回复，也不要慌张，我们上线后会第一时间回复。</div>
                </div>
                <div className='OrderInfo'>
                    <div className='OrderInfoTitle'>订单信息</div>
                    <div className='OrderInfoText'>我们会按世纪付款顺序完成商品发货、尽快将宝贝呈进您的生活。如遇节假日或特殊天气，可能会延迟，请您耐心等待。关注公众号，进入店铺即可查询所有订单及订单状态</div>
                </div>
                <div className='tips'>
                    <div className='tipsTitle'>温馨提示</div>
                    <div className='tipsText'>每款商品的信息、活动、发货等会有所不用，下单前请务必查看清楚哟～</div>
                </div>
                <div className='others'>
                    <div className='othersList'>
                        <div className='othersListItem'>实物拍摄</div>
                        <div className='othersListItem'>品质保障</div>
                        <div className='othersListItem'>闪电发货</div>
                    </div>
                    <div className='purchaseNotes'>
                        <div>购买须知</div>
                        <div className='purchaseNotesArrow'>></div>
                    </div>
                </div>
            </div>
            <div className='mobile_personalCenter_bodyContainer_footer'>
                <div className='mobile_personalCenter_bodyContainer_footer_nagivation'>
                    <div>店铺主页</div>
                    <div className='mobile_personalCenter_bodyContainer_footer_nagivation_line'></div>
                    <div>推广中心</div>
                    <div className='mobile_personalCenter_bodyContainer_footer_nagivation_line'></div>
                    <div>关注我们</div>
                    <div className='mobile_personalCenter_bodyContainer_footer_nagivation_line'></div>
                    <div>店铺信息</div>
                </div>
                <div className='mobile_personalCenter_bodyContainer_footer_companyLogo'>
                    <img src='' alt='公司Logo'></img>
                </div>
            </div>
            <div style={{ marginBottom: '128px' }}></div>
        </div>
    }

    componentDidMount() {
        this.recbulletinBoard_Text()
    }

    recbulletinBoard_Text() {
        const myObj = { func: 1, object: "test" }
        fetch(Config.baseUrl + 'api/client', {
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
                    bulletinBoard_Text: resmsg
                })
            })
            .catch(err => {
                alert("Error in sending data to server: " + err.message)
            })
    }
}

export default BodyContainer