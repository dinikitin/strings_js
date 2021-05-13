// const addMessage = document.getElementById('input')
// const addBtn = document.getElementById('button')
// const ul = document.getElementById('ul')
// let arrayToDo = []

// if(localStorage.getItem('todo')) {
//     todoList = JSON.parse(localStorage.getItem('ul'))
//     displayMsg()
// }

// addBtn.addEventListener('click', function () {
//     let ToDo = {
//         input: addMessage.value,
//         checked: true
//     }
//     arrayToDo.push(ToDo)
//     displayMsg()
//     console.log(arrayToDo)
// })



// function displayMsg() {
//     let display = ''
//     arrayToDo.forEach(function(item, index) {
//         display += `
//         <li>
//         <input type='checkbox' id='${index}' ${item.checked? 'checked': ''}>
//         <label for='${index}'>${item.input}</label>
//         </li>`
//         ul.innerHTML = display
//     });

// }

const input = document.getElementById('input')
const addBtn = document.getElementById('button')
const ul = document.getElementById('ul')
const total = document.getElementById('total')
const btnClear = document.getElementById('buttonClear')
const btnProgress = document.getElementById('buttonProgress')


addBtn.addEventListener('click', (e) => {
    
    if (input.value === '') {
        return
    }
    
    main(input.value)
    input.value = ''
})




function main(value) {
    const li = document.createElement('li')
    const btnDel = document.createElement('button')
    let allElements = []

    li.classList = 'li'
    li.textContent = value
    ul.appendChild(li)
    allElements.push(li)
  

    btnDel.classList = 'btn'
    btnDel.textContent = 'delete'
    li.appendChild(btnDel)

    btnDel.addEventListener('click', () => {
        li.remove()
    })

    li.addEventListener('click', () => {
        li.classList.toggle('liActive')
    })


    btnClear.addEventListener('click', () => {
        console.log(allElements)
        allElements.forEach(el => el.remove())

    
    btnProgress.addEventListener('click', () => {
        allElements.forEach((item) => {
            if (item.className === 'liActive') {
                item.remove()
            }
        })
    })


    })
    
}











// function createElement(value) {
//     const btnDel = document.createElement('button')
//     const li = document.createElement('li')

//     li.innerHTML = value                     // innerHtml vs textContest  
//     li.classList = 'li'
//     ul.appendChild(li)                      // append vs appendChild

   
//     btnDel.textContent = 'del'
//     btnDel.classList = 'btn'
//     li.appendChild(btnDel)

//     li.addEventListener('click', () => {
//         li.classList.toggle('liActive')
//     })

//     btnDel.addEventListener('click', () => {
//         li.remove()
//     })

//     console.log(value)
// }