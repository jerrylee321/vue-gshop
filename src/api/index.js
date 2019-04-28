/*
定义n个接口请求函数模块
调用ajax 函数发请求
*/

import ajax from './ajax'
// 区分开发环境和生产环境
const prefix = '/api';

//[1、根据经纬度获取位置详情]
export const reqAddress =(longitude,latitude)=>ajax(prefix + `/position/${latitude},${longitude}`)

//2、获取食品分类列表
export const reqCategories = ()=>ajax(prefix + '/index_category')

//3、根据经纬度获取商铺列表
export const reqShops = ({longitude,latitude})=>ajax(prefix + '/shops',{longitude,latitude})

//4,用户名密码登录
export const reqUser = ({name,pwd,captcha})=>ajax(prefix + '/login_pwd',{name,pwd,captcha},'POST')

//5,发送短信验证码登录
export const reqSendcode = (phone)=>ajax(prefix + '/sendcode',{phone})

//6, 手机号验证码登录

export const reqLoginsms = ({phone,code})=>ajax(prefix + '/login_sms',{phone,code},'POST')


//7、根据会话获取用户信息
export const reqgetUser = ()=>ajax(prefix + '/userinfo')

//8退出登录
export const reqlogout = ()=>ajax(prefix + '/logout')

//9, 获取商品,goods
export const reqGoods = ()=>ajax('/goods')
//10,获取评价, ratings
export const reqRatings = ()=>ajax('/ratings')
//11,获取商家 info
export const reqInfo = ()=>ajax('/info')
