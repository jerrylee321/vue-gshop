错误记录:
1,请求失败报的错,错误信息如下:
api/position/31.38098,121.50146:1 Failed to load resource: the server responded with a status of 404 (Not Found)
意思是:“无法加载资源:服务器响应状态为404(找不到)” 
解决:
封装axios,给ajax(url,data,method='GET')定义参数的时候,method没有设置默认值,导致请求方式也接口不一致,数据没有请求过来.


2,Uncaught (in promise) ReferenceError: state is not defined
解决: state 没传, 数据拿不到


3,请求异常: Request failed with status code 504
问题在于服务器没启动,启动就可以了.


4,请求异常: Request failed with status code 404
解决: 路径错了, 修改匹配就可以了

5,vue.esm.js?efeb:578 [Vue warn]: Error in render: "TypeError: Cannot read property '0' of undefined"
问题在于3 层表达式(a.b.c)
因为初始值为空的时候,就会报错
解决: v-if 
<!--
     初始显示问题: 对初始值为{}/[], 进行3层表达式读取时报错   can not read property xxx of undefined
     解决:　v-if
    -->
