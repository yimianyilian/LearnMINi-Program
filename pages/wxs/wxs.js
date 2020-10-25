// pages/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     price :"25.66666" ,
     titles:["衣服","裤子","鞋子"],
     counter: 0 
  },

  handleTouchStart() {
    console.log("handleTouchStart")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleTap() {
    console.log("handleTap")
  },
handleInner(event){
  console.log(event)
},
handleOutter(event){
  console.log(event)
},
handleIncrement(event){
   console.log('myevent')
   this.setData({
     counter: this.data.counter +1 
   })
},
handItem(event){
  console.log(event)
  const dataset =event.currentTarget.dataset;
  const title = dataset.item;
  const index = dataset.index;
  console.log(title,index);
},


  handleLongpress(){
    console.log("handleLongpress")
  },

  handleTabClick(event){
    console.log(event);
  },

   handleIncrementCpn(){
     //1.获取组件对象
     const  my_sel = this.selectComponent('.sel-class');
     console.log(my_sel);

     //2.通过setdata修改组件中的数据  （不合理）
    // my_sel.setData({
    //   counter: my_sel.data.counter +20 
    //   })

     //3.通过方法对数据 进行修改 
   my_sel.incrementCounter(10)





   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          //发送网络请求
          wx.request({
            url: 'http://123.207.32.32:8000/recommend ',
            success: function(res) {
              console.log(res)
            }
          })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }



})
