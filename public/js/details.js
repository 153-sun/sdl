
// 商品筛选
bacon1.onmouseover=function(){
  fg(-9)
} 
bacon1.onmouseout=function(){  
  fg(0) 
}
 function fg(n){
   var bacon1=document.getElementById("bacon1");
   span=bacon1.children[0];
  span.style.backgroundPosition="1px"+" "+n+"px"
 }
bacon2.onmouseover=function(){
  fg1(-29)
} 
bacon2.onmouseout=function(){  
  fg1(-20) 
}
 function fg1(n){
   var bacon2=document.getElementById("bacon2");
   span=bacon2.children[0];
  span.style.backgroundPosition="1px"+" "+n+"px"
 }
var tab1=document.getElementById("tab1");
tab1.onclick=function(){
  tab1=this;
  var span=tab1.children[0];
  var spans=tab1.children[1];
  var span2=spans.style.display;
  var span1=span.style.display;
  if(span1=="block"){
    span1=span.style.display="none";
    span2=spans.style.display="block";
    document.getElementById("bacon").classList.add("show-conx");
 
  }else{
    span1=span.style.display="block";
    span2=spans.style.display="none";
    document.getElementById("bacon").classList.remove("show-conx");
     
  }
} 




