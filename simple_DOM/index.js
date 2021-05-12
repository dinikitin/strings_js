const select = document.getElementById('select')
const input = document.getElementById('input')
const button = document.getElementById('btn')

select.addEventListener('change', ()=>{
    input.value = select.value
})

button.addEventListener('click', () =>{
    Array.from(select.options).forEach((item) => {
        if (item.value === select.value)
            if (input.value === '') {
                item.innerText = select.value
            }
            else 
                item.innerText = input.value
        })
})