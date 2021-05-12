const select = document.getElementById('select')
const input = document.getElementById('input')
const button = document.getElementById('btn')
const standartColor = document.getElementsByClassName('bar')

input.value = select.value

input.oninput = function() {
    input.classList.remove('inputError')
}

select.addEventListener('change', () => {
    input.value = select.value
})

button.addEventListener('click', () => {
    Array.from(select.options).forEach((item) => {
        if (item.value === select.value)
            if (input.value === '') {
                const errorClass = document.getElementById('input')
                errorClass.classList.add('inputError')
            } else {
                item.innerText = input.value
            }
    })
})