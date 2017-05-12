new Vue({
    el: '#app',
    data: {
        todo: '',
        todos: ['wash clothes', 'buy milk', 'sweep floor']
    },
    methods: {
        addTodo: function() {
            if(this.todo === '') return;
            this.todos.push(this.todo);
            this.todo = '';
        },
        deleteTodo: function(index){
            this.todos.splice(index, 1);
        }
    }
})