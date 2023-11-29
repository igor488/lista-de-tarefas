// Função para adicionar uma nova tarefa à lista
function addTask() {

    // Obtém a referência do elemento de entrada de texto com o id "taskInput"
    var taskInput = document.getElementById("taskInput");

    // Verifica se o valor do campo de entrada não está vazio (ignorando espaços em branco)
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {

        // Cria um novo elemento de lista (li)
        var li = document.createElement("li");

        li.appendChild(document.createTextNode(taskInput.value));

        // Adiciona a classe 'completed' se a tarefa for marcada como concluída

        li.onclick = function () {

            li.classList.toggle("completed");

        };

        // Adiciona o elemento li à lista de tarefas
        taskList.appendChild(li);

        // Limpa o valor do campo de entrada
        taskInput.value = "";
    }
}