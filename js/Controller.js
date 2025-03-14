const Controller = (function(){
    const init = () => {
        const form = document.querySelector('#Todo-List');
        form.addEventListener('submit', HandleTodo);
    }

    // Cette fonction permet de récuprérer l'entrée utilisateur, de l'ajouter a la liste des tâche dans le tableau, et de l'afficher dans la vue
    const HandleTodo = (e) =>{
        e.preventDefault();
        const text = View.GetInput()
        if(text.trim !== ''){
            Models.addTodo(text); // Ajouter au tableau les tâche
            View.DisplayTodo(Models.GetTodos()); // Permet d'afficher une tâche saisi et récupère cette tâche depuis le tableau
            console.log(Models.GetTodos()) // Permet d'afficher le tableau des tâches dans la console
            View.clearInput(); // Permet de clear input utilisateur après avoir soumis le formulaire
        }
    }

    return {init}
})(Models, View);

document.addEventListener('DOMContentLoaded', Controller.init);