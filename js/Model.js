// Le model sert a gérer l'état des tâches de notre projet

const Models = (function(){
    let todos = [];

    const addTodo = (text) =>{
        const todo = {id : Date.now(), text, completed : false};
        todos.push(todo);
        return todo;
    }

    const GetTodos = () => todos;


    return {addTodo, GetTodos};
})();