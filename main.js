Vue.component('blog-data',{
  props:['title'],
  template:'<h3>{{title}}</h3>'
})

new Vue({
  el:'#com'
})
// Vue.component('button-counter',{
//   data:function(){
//     return{
//       count:0
//     }
  // data: {
  //   count: 0
//   },
//   template:'<button v-on:click="count++">Счетчик кликов - {{count}}</button>'
// })
// new Vue({el:'#comp'})

// // Vue.component('button-counter', {
// //     data: function () {
// //       return {
// //         count: 0
// //       }
// //     },
//     template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
//   })
//   new Vue({ el: '#components-demo' })