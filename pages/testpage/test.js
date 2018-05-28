Page({
  data:{
    mytext:'my first text',
    mytext2:{
      num:90
    }
  },
  onLoad:function(opt){
    console.log('执行onLoad');
    //this.anyfunction();
  },
  onShow: function (opt){
    console.log("执行onShow");
  },
  anyfunction:function(){
    console.log('执行anyfunction方法');
    this.setData({
      // mytext:"改变数据"
     'mytext2.num':100
    })
  }
})