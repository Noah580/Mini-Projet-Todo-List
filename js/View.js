const View = (function(){
    const todoList = document.querySelector('#todo-list');

    const DisplayTodo = (todos) =>{
        todoList.innerHTML = '';
        todos.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.text;
            todoList.appendChild(li);
        });
    }

    const GetInput = () => document.querySelector('#Todo-input').value;

    const clearInput = () => document.querySelector('#Todo-input').value = '';

    return {DisplayTodo, GetInput, clearInput}
})();