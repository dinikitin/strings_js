const input = document.getElementById('input')
const addBtn = document.getElementById('button')
const ul = document.getElementById('ul')
const btnClear = document.getElementById('buttonClear')
const btnProgress = document.getElementById('buttonProgress')
const btnCompleted = document.getElementById('buttonCompleted')
const btnAll = document.getElementById('buttonAll')


addBtn.addEventListener('click', (e) => {
    if (input.value === '') {
        input.className = 'inputError'
        return
    }

    main(input.value)
    input.value = ''
})

input.oninput = () => {
    input.classList.remove('inputError')
    input.className = 'input'
}

function main(value) {
    const li = document.createElement('li')
    const btnDel = document.createElement('button')

    li.classList = 'li'
    li.textContent = value
    ul.appendChild(li)

    btnDel.classList = 'btnDel'
    btnDel.textContent = 'delete'
    li.appendChild(btnDel)

    btnDel.addEventListener('click', () => {
        li.remove()
    })

    li.addEventListener('click', () => {
        li.classList.toggle('liActive')
    })
}

btnCompleted.addEventListener('click', () => {
    document.querySelectorAll('.li').forEach((item) => {
        
        btnCompleted.className = 'btnActive'
        btnProgress.className = 'btn'
        item.classList.remove('liNotActive')

        if (!item.classList.contains('liActive')) {
            item.classList.add('liNotActive')    
        }
    })
})

btnProgress.addEventListener(('click'), () => {
    document.querySelectorAll('li').forEach(item => {
        btnCompleted.className = 'btn'
        btnProgress.className = 'btnActive'
        item.classList.remove('liNotActive')

        if (item.classList.contains('liActive')) {
            item.classList.add('liNotActive')
        }
    })
})

btnAll.addEventListener('click', () => {
    document.querySelectorAll('.li').forEach((item) => {
        btnProgress.classList = 'btn'
        btnCompleted.classList = 'btn'
        btnAll.classList = 'btn'
        item.classList.remove('liNotActive')
    })
})

btnClear.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(el => el.remove())
})
