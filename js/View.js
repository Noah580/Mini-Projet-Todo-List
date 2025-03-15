const View = (function(){
    const todoList = document.querySelector('#todo-list');

    // Cette fonction permet de faire apparaitre les tâches
    const DisplayTodo = (todos) =>{
        todoList.innerHTML = '';
        todos.forEach((element, index) => {
            const li = document.createElement('li');
            const check = document.createElement('input')
            check.setAttribute('type', 'checkbox');
            check.checked = element.completed;
            check.onclick = () => Controller.HandleCheck(index);

            li.style.textDecoration = element.completed ? 'line-through' : 'none';

            li.textContent = element.text;
            li.appendChild(check);
            todoList.appendChild(li);
        });
    }

    // Cette fonction permet de récupurer la valeur de l'input saisis par l'utilisateur
    const GetInput = () => document.querySelector('#Todo-input').value;

    // Cette fonction permet de clear l'input une fois que l'utilisateur a ajouter sa tâche
    const clearInput = () => document.querySelector('#Todo-input').value = '';

    return {DisplayTodo, GetInput, clearInput}
})();