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
