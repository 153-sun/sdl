const express=require("express")
const router=express.Router();
const pool=require("../pool.js");
router.get("/pic",(req,res)=>{
  var sql="SELECT * FROM sd_index_pic";
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})
router.get("/product2",(req,res)=>{
  var sql="SELECT * FROM sd_index_product2";
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})
router.get("/product",(req,res)=>{
  var sql="SELECT * FROM sd_index_product";
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})
router.get("/product1",(req,res)=>{
  var sql="SELECT * FROM sd_index_product1";
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})

module.exports=router;
