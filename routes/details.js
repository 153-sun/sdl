const express=require("express")
const router=express.Router();
const pool=require("../pool.js");
router.get("/blen",(req,res)=>{
  var d_type=req.query.d_type;
  var sql1="SELECT * FROM sd_details WHERE d_type=?"
  pool.query(sql1,[d_type],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})









module.exports=router;