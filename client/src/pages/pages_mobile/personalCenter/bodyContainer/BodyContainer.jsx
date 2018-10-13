import React, { Component } from 'react'

import './index.less'
// BodyContainer区域渲染的内容
class BodyContainer extends Component {

    render() {
        return <div className='personalCenter_bodyContainer'>
            <div className='mobile_personalCenter_bodyContainer_background'>
                <img src='' alt='个人主页顶部背景'></img>
            </div>
            <div className='mobile_personalCenter_bodyContainer_accountInformation'>
                <div>
                    <div className='mobile_personalCenter_bodyContainer_accountInformation_balance'>0.00</div>
                    <div>余额</div>
                </div>
                <div>
                    <div className='mobile_personalCenter_bodyContainer_accountInformation_integral'>0</div>
                    <div>积分</div>
                </div>
                <div>
                    <div className='mobile_personalCenter_bodyContainer_accountInformation_card'>0</div>
                    <div>卡</div>
                </div>
                <div>
                    <div className='mobile_personalCenter_bodyContainer_accountInformation_coupon'>0</div>
                    <div>券</div>
                </div>
            </div>
            <div className='mobile_personalCenter_bodyContainer_orderState'>
                <div className='mobile_personalCenter_bodyContainer_orderState_myOrder'>
                    <div className='mobile_personalCenter_bodyContainer_orderState_myorderText'>我的订单</div>
                    <div className='mobile_personalCenter_bodyContainer_orderState_checkMyOrder'>查看全部订单 ></div>
                </div>
                <div className='mobile_personalCenter_bodyContainer_orderState_line'></div>
                <div className='mobile_personalCenter_bodyContainer_orderState_orderNavigation'>
                    <div>
                        <div>icon</div>
                        <div>待付款</div>
                    </div>
                    <div>
                        <div>icon</div>
                        <div>待接单</div>
                    </div>
                    <div>
                        <div>icon</div>
                        <div>待发货</div>
                    </div>
                    <div>
                        <div>icon</div>
                        <div>已发货</div>
                    </div>
                    <div>
                        <div>icon</div>
                        <div>已完成</div>
                    </div>
                </div>
            </div>
            <div className='mobile_personalCenter_bodyContainer_baseInfomations'>
                <div className='mobile_personalCenter_bodyContainer_baseInfomations_title'>基本信息</div>
                <div className='mobile_personalCenter_bodyContainer_baseInfomations_table'>
                    <div style={{ backgroundColor: 'rgb(211, 211, 211)', height: '1px', width: '100%' }}></div>
                    <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_sex'>
                        <div>性别</div>
                        <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_sex_table'>
                            <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_sex_value'>男</div>
                            <div>></div>
                        </div>
                    </div>
                    <div className='mobile_personalCenter_bodyContainer_line'></div>
                    <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_birthday'>
                        <div>生日</div>
                        <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_birthday_table'>
                            <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_birthday_value'>空</div>
                            <div>></div>
                        </div>
                    </div>
                    <div className='mobile_personalCenter_bodyContainer_line'></div>
                    <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_Address'>
                        <div>收获地址</div>
                        <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_address_table'>
                            <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_address_value'>0个</div>
                            <div>></div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'rgb(211, 211, 211)', height: '1px', width: '100%' }}></div>
                </div>
            </div>
            <div className='mobile_personalCenter_bodyContainer_baseInfomations'>
                <div className='mobile_personalCenter_bodyContainer_baseInfomations_title'>账号绑定</div>
                <div className='mobile_personalCenter_bodyContainer_baseInfomations_table'>
                    <div style={{ backgroundColor: 'rgb(211, 211, 211)', height: '1px', width: '100%' }}></div>
                    <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_phoneNumber'>
                        <div>手机号</div>
                        <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_phoneNumber_table'>
                            <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_phoneNumber_value'>136****1475</div>
                            <div>></div>
                        </div>
                    </div>
                    <div className='mobile_personalCenter_bodyContainer_line'></div>
                    <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_wechat'>
                        <div>微信</div>
                        <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_wechat_table'>
                            <div className='mobile_personalCenter_bodyContainer_baseInfomations_table_wechat_value'>已绑定</div>
                            <div>></div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'rgb(211, 211, 211)', height: '1px', width: '100%' }}></div>
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
            <div style={{ marginBottom: '256px' }}></div>
        </div>
    }
}

export default BodyContainer