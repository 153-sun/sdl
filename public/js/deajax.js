
new Vue({
  el:"#flens",
  data:{
    tasks:["综合","销量","好评率","赠乐豆"],
    clab:0,
    ht:[]
  },
  created(){
    var url="http://127.0.0.1:3000/details/blen?d_type="+0;
    axios.get(url).then(result=>{
      this.ht=result.data;
      console.log(this.ht) 
    }) 
  },
  methods:{
    chang:function(i){
      this.clab=i; 
    var url="http://127.0.0.1:3000/details/blen?d_type="+i;
    axios.get(url).then(result=>{
      this.ht=result.data;
    })     
    }
  }
})