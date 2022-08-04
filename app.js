const addtodo = document.querySelector('.form-add-todo')

const ul = document.querySelector('.todos-container')

const buscarTodo = document.querySelector('.form-search input')




const addLi =(inputValue)=>{
    if(inputValue.length){
        ul.innerHTML+=`
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete " data-delete="${inputValue}"></i>
        </li>   `
    }
}
const removeTodo = (inputValue)=>{
    
    if(inputValue.dataset.delete){
    document.querySelector(`[data-todo = "${inputValue.dataset.delete}"]`).remove()}}


const hiddeLI =(inputValue)=>{
    Array.from(ul.children).filter(item => !item.textContent.toLowerCase().includes(inputValue)).forEach(item=>{
        item.classList.remove('hidden')
        item.classList.add('d-none')
    })
}

const showLI = (inputValue)=>{
    Array.from(ul.children).filter(item=> item.textContent.toLowerCase().includes(inputValue)).forEach(item=>{
        item.classList.remove('d-none')
        item.classList.add('hidden')
    })
}



addtodo.addEventListener('submit',event=>{
    
    event.preventDefault()
    const inputValue = event.target.add.value.trim()
    addLi(inputValue)
    event.target.reset()

})



ul.addEventListener('click',event=>{
    
    const inputValue = event.target
    removeTodo(inputValue)
    
})


buscarTodo.addEventListener('input',event=>{
    const inputValue = event.target.value.trim().toLowerCase()

    hiddeLI(inputValue)
    showLI(inputValue)
    
})