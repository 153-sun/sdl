//引入express模块
const express=require('express');
const cors=require("cors");
//引入路由(目录router中的index.js)
const user=require('./routes/user.js');
const index=require('./routes/index.js');
const details=require('./routes/details.js');
//引入body-parser
const bodyParser = require('body-parser');
//跨域
//创建web服务器
var server=express(); 
server.use(cors({
  origin:"http://127.0.0.1:5500"
          
}))
server.listen(3000);
//托管静态资源到public下
server.use(express.static('public'));
//使用body-parser中间件，将post请求的数据格式化为对象
server.use(bodyParser.urlencoded({extended:false}));
//使用路由器
//使用(挂载)的url: /user
server.use('/user',user);
server.use('/index',index);
server.use('/details',details);










