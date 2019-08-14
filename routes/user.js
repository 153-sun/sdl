const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//用户登录
//登录模块
 router.post("/login",function(req,res){
    var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	
     if(!$uname){res.send("没有获取用户名");
	return;}
	if(!$upwd){res.send("没有获取用户密码");
	return;}
 //使用连接池访问数据库
 var sql="select * from sd_user where uname=? and upwd=?";
 pool.query(sql,[$uname,$upwd],(err,result)=>{
	 if(err) throw err;
	
	 if(result.length>0){res.send("登陆成功");
	 }else{res.send("用户名或密码错误");}
    });
});
//注册模块
router.get("/reg",function(req,res){
  var obj=req.query;   
  if(!obj.uname){res.send("用户名未接收到");
	return;}
	if(!obj.upwd){res.send("密码未接收到");
	return;}
	if(!obj.phone){res.send("手机号未接收到");
  return;}
  var sql="insert into su_user set uname=?,upwd=?,phone=?";
  pool.query(sql,[obj.uname,obj.upwd,obj.phone],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
      res.send("注册成功");
    }
  });
});
//导出路由器
module.exports=router;













