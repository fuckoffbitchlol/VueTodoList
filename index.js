var app = new Vue({
  el: '#app',
  data: {
    message: "",
    todos: [
      { text: "学习 JavaScript" },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  },

  methods:{
      addTask: function(){
          this.todos.push({text: this.message});
      },
      delTask: function(){
          this.todos.pop();
      }
  }
})