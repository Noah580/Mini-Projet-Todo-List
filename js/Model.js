// Le model sert a gérer l'état des tâches de notre projet

const Models = (function(){
    let todos = [];

    // Permet d'ajouter des tâche dans le tableau todos
    const addTodo = (text) =>{
        const todo = {id : Date.now(), text, completed : false};
        todos.push(todo);
        return todo;
    }


    // Récupère les tâche du tableau
    const GetTodos = () => todos;


    return {addTodo, GetTodos};
})();