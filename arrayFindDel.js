// -----Task_1-----

const animal = ['cat', 'dog', 'parrot', 'horse']

animal.forEach((item, index) => {
    return item === 'parrot' ? console.log(`This is parrot! - ${index}`) : console.log(`This is not parrot ${index}`)
})
console.log('-------')
const parrot = animal.indexOf('parrot')
console.log(parrot)


// -----Task_2-----
animal.push('fish', 'chiken', 'lion')

const pos = animal.length - 2, k = 2
animal.splice(pos, k)              // removing the last element

animal.shift()                     // removing the first element
//animal.splice(0, 1)

let indexFish = animal.indexOf('fish')
animal.splice(indexFish, 1)

animal.forEach((item, index) => {
    console.log(`${item} - ${index}`)
})

