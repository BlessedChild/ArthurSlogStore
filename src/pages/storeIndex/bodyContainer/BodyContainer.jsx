import React, { Component } from 'react'

const storeIndexStyle = { position: "relative", marginTop: 0, height: '100%', width: '100%', fontSize: 40, textAlign: 'center' }
const carouselAreaStyle = { width: '100%', height: '455px', fontSize: 40, textAlign: 'center', lineHeight: '455px' }
const bulletinBoardStyle = { alignItems: 'center', display: 'flex', flexDirection: 'raw', width: '100%', height: 64, fontSize: 40, textAlign: 'center', borderStyle: 'none' }
const productListStyle = { width: '100%', fontSize: 40, textAlign: 'center' }
const dividingLineStyle = { backgroundColor: '#000000', height: 1, width: '100%' }
const recommendStyle = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', width: '100%' }
const navigationBarStyle = { display: 'flex', alignItems: 'stretch', backgroundColor: '#FFFFFF' }
const navigationBarItemStyle = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '25%', marginLeft: '10px', marginRight: '10px', textAlign: 'center', fontSize: '30' }
const navigationBarItemStyleLeft = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '25%', marginLeft: '20px', marginRight: '10px', textAlign: 'center', fontSize: '30' }
const navigationBarItemStyleLRight = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '25%', marginLeft: '10px', marginRight: '20px', textAlign: 'center', fontSize: '30' }
const categoryStyle = { display: 'flex', alignItems: 'stretch', backgroundColor: '#FFFFFF' }
const categoryItemStyle = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '10px', marginRight: '10px', textAlign: 'center', fontSize: '30' }
const categoryItemStyleLeft = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '20px', marginRight: '10px', textAlign: 'center', fontSize: '30' }
const categoryItemStyleLRight = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '10px', marginRight: '20px', textAlign: 'center', fontSize: '30' }
const categoryImgItemStyleLeft = { width: '220px', height: '220px', textAlign: 'center', lineHeight: '220px', backgroundColor: '#FFFFFF' }
const productStyle = { display: 'flex', alignItems: 'stretch', backgroundColor: '#FFFFFF' }
// const productItemStyle = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '10px', marginRight: '10px', textAlign: 'center', fontSize: '30' }
const productItemStyleLeft = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '50%', marginLeft: '20px', marginRight: '10px', textAlign: 'center', fontSize: '30' }
const productItemStyleRight = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '50%', marginLeft: '10px', marginRight: '20px', textAlign: 'center', fontSize: '30' }
const productImgItemStyle = { width: '400px', height: '400px', textAlign: 'center', lineHeight: '400px', backgroundColor: '#FFFFFF' }

const productItemInfoTextStyle = { width: '400px', marginLeft: '0px', textAlign: 'left' }
const productItemInfoPriceStyle = { width: '400px', marginLeft: '0px', textAlign: 'left' }
const productItemInfoStyle = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', width: '400px' }
const productItemInfoTextareaStyle = { width: '400px', textAlign: 'left', margin: '0px' }

const bulletinBoardIconStyle = { width: '56px', height: '56px', fontSize: '12px', textAlign: 'center', lineHeight: '56px', marginLeft: '20px' }
const recommendIconStyle = { width: '256px', height: '256px', textAlign: 'center', lineHeight: '256px', borderStyle: 'solid' }


const navigationBarIconItemStyle = { width: '200px', height: '200px', textAlign: 'center', lineHeight: '200px', backgroundColor: '#FFFFFF', borderStyle: 'solid' }

// BodyContainet区域的样式
// const bodyContainerBarStyle = { position: "relative", marginTop: 0, marginBottom: 128, height: '100%', width: '100%' }

// BodyContainer区域渲染的内容
class BodyContainer extends Component {
    /*
    render() {
        return <div>
                <div>2. navigationBar（导航栏）</div>
                <div>2.1 所有商品|2.2 拼团|2.3 促销</div>
                <div>商品1|商品2|商品3</div>
                <div>商品4|商品5|商品6</div>
                <div>商品7|商品8|商品9</div>
                <IssueList />
            </div>
    }
    */
   
    render() {
        return <div className='storeIndex' style={storeIndexStyle}>
        <div>
            <div className='carouselArea' style={carouselAreaStyle} onClick={this.toucha}>carouselArea（轮播区域）</div>
            <div style={dividingLineStyle}></div>
            <div style={bulletinBoardStyle} onClick={this.toucha}>
                <div style={bulletinBoardIconStyle} >图片</div>
                <div className='bulletinBoard'>bulletinBoard（公告栏）</div>
            </div>
            <div style={dividingLineStyle}></div>
        </div>
        <div className='navigationBar' style={navigationBarStyle}>
            <div style={navigationBarItemStyleLeft}>
                <div style={navigationBarIconItemStyle}>图片</div>
                <div>所有商品</div>
            </div>
            <div style={navigationBarItemStyle}>
                <div style={navigationBarIconItemStyle}>图片</div>
                <div>拼团</div>
            </div>
            <div style={navigationBarItemStyle}>
                <div style={navigationBarIconItemStyle}>图片</div>
                <div>限时促销</div>
            </div>
            <div style={navigationBarItemStyleLRight}>
                <div style={navigationBarIconItemStyle}>图片</div>
                <div>秒杀</div>
            </div>
        </div>
        <div style={dividingLineStyle}></div>
        <div className='recommend' style={recommendStyle}>
            <div style={recommendIconStyle}>图片</div>
            <div>热销推荐</div>
        </div>
        <div style={dividingLineStyle}></div>
        <div className='category'>
            <div style={categoryStyle}>
                <div style={categoryItemStyleLeft}>
                    <div style={categoryImgItemStyleLeft}>图片</div>
                    <div>类目1</div>
                </div>
                <div style={categoryItemStyle}>
                    <div style={categoryImgItemStyleLeft}>图片</div>
                    <div>类目2</div>
                </div>
                <div style={categoryItemStyleLRight}>
                    <div style={categoryImgItemStyleLeft}>图片</div>
                    <div>类目3</div>
                </div>
            </div>
            <div style={categoryStyle}>
                <div style={categoryItemStyleLeft}>
                    <div style={categoryImgItemStyleLeft}>图片</div>
                    <div>类目4</div>
                </div>
                <div style={categoryItemStyle}>
                    <div style={categoryImgItemStyleLeft}>图片</div>
                    <div>类目5</div>
                </div>
                <div style={categoryItemStyleLRight}>
                    <div style={categoryImgItemStyleLeft}>图片</div>
                    <div>类目6</div>
                </div>
            </div>
        </div>
        <div style={dividingLineStyle}></div>
        <div className='productList' style={productListStyle}>
            <div style={productStyle}>
                <div style={productItemStyleLeft}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
                </div>
                <div style={productItemStyleRight}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={productStyle}>
                <div style={productItemStyleLeft}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
                </div>
                <div style={productItemStyleRight}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={productStyle}>
                <div style={productItemStyleLeft}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
                </div>
                <div style={productItemStyleRight}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={productStyle}>
                <div style={productItemStyleLeft}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
                </div>
                <div style={productItemStyleRight}>
                    <div style={productImgItemStyle}>图片</div>
                    <div style={productItemInfoStyle}>
                        <div style={productItemInfoTextStyle}>
                            商品介绍
                        </div>
                        <div style={productItemInfoPriceStyle}>
                            <span style={productItemInfoTextareaStyle}>¥</span>
                            <span style={productItemInfoTextareaStyle}>8888</span>
                        </div>
                    </div>
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

export default BodyContainer