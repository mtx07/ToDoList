const list = document.getElementById('list')

const trash = document.querySelector('.bi-trash')
let LIST = []






function addToDo(toDo) {


    const ul = document.querySelector('.list-group')
    
    
    const li = document.createElement('li')
    li.classList.add('todo','list-group-item', 'd-flex' ,'align-items-center')
    
    
    
    const newInput = document.createElement('input')
    newInput.classList.add  = 'form-check-input'
    newInput.type = 'checkbox'
    
    const label = document.createElement('label')
    label.classList.add('ms-2', 'form-check-label')
    label.textContent = toDo
    
    
    const label2 = document.createElement('label')
    label2.classList.add('ms-auto', 'btn', 'btn-danger', 'btn-sm')
    label2.appendChild(label)

    const deleteButton = document.createElement('button');
    deleteButton.className = 'ms-auto btn btn-danger btn-sm';
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';

    deleteButton.addEventListener('click', function (){
        removeTask(li)
    })
   
    li.appendChild(newInput);
    li.appendChild(label);
    li.appendChild(deleteButton);
    ul.appendChild(li);
}



    

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function(event) {
    event.preventDefault()
    const input = document.querySelector('input')
    const todo = input.value; 
    if (todo !== '') { 
        addToDo(todo);
        LIST++
        input.value = ""
        
       
    }
});

function removeTask(todo) {
    todo.remove();
    LIST--
    
}

