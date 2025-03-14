const Controller = (function(){
    const init = () => {
        const form = document.querySelector('#Todo-List');
        form.addEventListener('submit', HandleTodo);
    }

    const HandleTodo = (e) =>{
        e.preventDefault();
        const text = View.GetInput()
        if(text.trim !== ''){
            Models.addTodo(text); // Ajouter au tableau les tâche
            View.DisplayTodo(Models.GetTodos());
            console.log(Models.GetTodos())
            View.clearInput();
        }
    }

    return {init}
})(Models, View);

document.addEventListener('DOMContentLoaded', Controller.init);