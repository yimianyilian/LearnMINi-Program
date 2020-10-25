// component/my-slot/my-slot.js
Component({
  /**
   * 组件的属性列表
   */
  //让使用者可以给组件传入数据
  properties: {
    title:{
      type:String,
      value : ''
    }

  },
  //定义组件的配置选项
  //multipleslots在使用多插槽的时候需要设置为true
  //styleTsolation 设置样式的隔离方式

 options:{
 multipleSlots:true 
 },
  /**
   * 组件的初始数据
   */
  //定义组件内部初始化数据
  data: {
   counter: 0 
  },

  /**
   * 组件的方法列表
   */
  //用于定义组件内部的函数

  methods: {
     foo() {

     }
  }

})
