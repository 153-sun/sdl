
/*右侧小轮播图 */
	var v=0;
  var lt=290;
  var due=300;
  var co=3; 
  var ulLun=document.getElementById("ul-lun"); 
  var ulLux=document.getElementById("ul-lux"); 
  var lisg=ulLux.children;
  function moveto(to){
    if(to==undefined){
      to=v+1;
    }      
   ulLun.className="transitions";
    v=to;
    ulLun.style.marginLeft=-v*lt+"px";     
    for(var li of lisg){
      li.className=""
    }
    if(v==co){
      v=0; 
      setTimeout(function(){
        ulLun.className="";
        ulLun.style.marginLeft=0;
      },due)
    }
    lisg[v].className="activeg";
  }
  var timer=setInterval(function(){
    moveto()
  },3000);
  var ulLux=document.getElementById("ul-lux");
  var canClick=true;
  ulLux.onclick=function(e){
    if(canClick){
      var li=e.target;
      if(li.nodeName=="LI"){
        if(li.className!=="activeg"){
          for(var v=0;v<lisg.length;v++){
            if(lisg[v]==li){
              break;
            }
          }
          moveto(v);
          setTimeout(function(){
            canClick=true;
          },due);
        }
      }
    }
  }
  /*焦点轮播图*/
    var j=0;//现在正在显示第几张图片，从0开始
    var LIWIDTH=1920;//每个li的固定宽度
    var DURATION=400;//每次轮播动画持续的时间
    var LICOUNT=7;//li的总个数
    //要移动的ul
    var ulImgs=document.getElementById("ul-imgs");
    //包含小圆点列表的ul
    var ulIdxs=document.getElementById("ul-idxs");
    //小圆点的元素列表
    var lis=ulIdxs.children;
    //从当前位置移动到任意一个范围内的位置
    function moveTo(to){
      //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
      if(to==undefined){
        to=j+1;
      }		
          ulImgs.className="transition";
      j=to;//先将表示第几张图片的变量i变为目标位置
      //再用i计算ulimgs的marginLeft距离
      ulImgs.style.marginLeft=-j*LIWIDTH+"px";
      //先删除所有小圆点的class
      for(var li of lis){
        li.className=""
      }
      if(j==LICOUNT){
        j=0;
        //当transition动画播放完之后，才
        setTimeout(function(){
          ulImgs.className="";//清掉transition属性
          ulImgs.style.marginLeft=0;//将ulImgs拉回0位置
        },DURATION)
      }
      //再给当前位置的小圆点添加class active
      lis[j].className="active";
    }

    var interval=4000;//每次轮播之间间隔3秒
    var timer=setInterval(function(){
      moveTo()
    },4000);
    
    
    var ulIdxs=document.getElementById("ul-idxs");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var j=0;j<lis.length;j++){
              if(lis[j]==li){
                break;
              }
            }
            moveTo(j);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
  
/*防晒秘籍 爱你一生 小吃来袭*/
var Tags = document.getElementById('arr').getElementsByTagName('a');
var TagsCnt = document.getElementById('all').getElementsByTagName('ul');
var len = Tags.length;
var flag = 0;
for(i = 0; i < len; i++) {
  Tags[i].value = i;
  Tags[i].onmousemove = function() {
    changeNav(this.value)
  };
  TagsCnt[i].className = 'undis';
}
Tags[flag].className = 'topC1';
TagsCnt[flag].className = 'dis fang-shai-1';

function changeNav(v) {
  Tags[flag].className = '';
  TagsCnt[flag].className = 'undis';
  flag = v;
  Tags[v].className = 'topC1';
  TagsCnt[v].className = 'dis fang-shai-1';
}
/*家用电器 手机 数码 母婴用品 玩具乐器*/
var tags = document.getElementById('str').getElementsByTagName('a');
var tagscnt = document.getElementById('stre').getElementsByTagName('div');
var lgn = tags.length;
var flage = 0;
for(i = 0; i < lgn; i++) {
  tags[i].value = i;
  tags[i].onmousemove = function() {
    chang(this.value)
  };
  tagscnt[i].className = 'undis';
}
tags[flage].className = 'topC1';
tagscnt[flage].className = 'dis jiadian-2';

function chang(v) {
  tags[flage].className = '';
  tagscnt[flage].className = 'undis';
  flage = v;
  tags[v].className = 'topC1';
  tagscnt[v].className = 'dis jiadian-2';
}
/* 每日上新 */
var btn=document.querySelector("div.mei-right div:nth-child(2)");
var btns=document.querySelector("div.mei-right div:nth-child(3)");
btns.onclick=function(){
  var btns=this;
  var span=btns.parentNode.children[0].children[0];
  var n=parseInt(span.innerHTML);
  if(n<10){
    n++;
  }
  span.innerHTML=n; 
  flrg(n)         
}
btn.onclick=function(){
  var btn=this;
  var span=btn.parentNode.children[0].children[0];
  var n=parseInt(span.innerHTML);
  if(n>1){
    n--;    
  }
  span.innerHTML=n;
  flrg(n)
}
function flrg(n){
  var div=document.getElementById("nav-lg");
  div.style.marginLeft=-(n-1)*1200+"px";
}
/* 闪电配送 */
var btn1=document.querySelector("div.mei-right2 div:nth-child(2)");
var btns1=document.querySelector("div.mei-right2 div:nth-child(3)"); 
btns1.onclick=function(){
  var btns1=this;
  var span=btns1.parentNode.children[0].children[0];
  var n=parseInt(span.innerHTML);
  if(n<2){
    n++;
  }
  span.innerHTML=n; 
  flrg1(n)         
}
btn1.onclick=function(){
  var btn1=this;
  var span=btn1.parentNode.children[0].children[0];
  var n=parseInt(span.innerHTML);
  if(n>1){
    n--;    
  }
  span.innerHTML=n;
  flrg1(n)
}
function flrg1(n){
  var div=document.getElementById("nav-md");
  div.style.marginLeft=-(n-1)*1200+"px";
}
/* 猜你喜欢 */
var btn2=document.querySelector("div.mei-right3 div:nth-child(2)");
var btns2=document.querySelector("div.mei-right3 div:nth-child(3)"); 
btns2.onclick=function(){
  var btns2=this;
  var span=btns2.parentNode.children[0].children[0];
  var n=parseInt(span.innerHTML);
  if(n<4){
    n++;
  }
  span.innerHTML=n; 
  flrg2(n)         
}
btn2.onclick=function(){
  var btn2=this;
  var span=btn2.parentNode.children[0].children[0];
  var n=parseInt(span.innerHTML);
  if(n>1){
    n--;    
  }
  span.innerHTML=n;
  flrg2(n)
}
function flrg2(n){
  var div=document.getElementById("nav-lt");
  div.style.marginLeft=-(n-1)*1200+"px";
}





