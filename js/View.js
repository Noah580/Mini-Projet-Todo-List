const View = (function(){
    const todoList = document.querySelector('#todo-list');

    // Cette fonction permet de faire apparaitre les tâches
    const DisplayTodo = (todos) =>{
        todoList.innerHTML = '';
        todos.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.text;
            todoList.appendChild(li);
        });
    }

    // Cette fonction permet de récupurer la valeur de l'input saisis par l'utilisateur
    const GetInput = () => document.querySelector('#Todo-input').value;

    // Cette fonction permet de clear l'input une fois que l'utilisateur a ajouter sa tâche
    const clearInput = () => document.querySelector('#Todo-input').value = '';

    return {DisplayTodo, GetInput, clearInput}
})();