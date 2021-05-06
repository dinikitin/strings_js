const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea'
}

//----Task_1-----


console.log(person)

//----Task_2-----
for (let i of Object.entries(person)) {
    console.log(`${i[0]}: ${i[1]}`)
}                                            // проще метода я не нашел, сначала сделал через двойной цикл получая отдельно ключ и значение
                                             // затем нашел этот метод, ознакомился с ним