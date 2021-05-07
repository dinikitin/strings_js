const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea'
}

// //----Task_1-----

for (let i of Object.entries(person)) {
    console.log(`${i[0]}: ${i[1]}`)
}


console.log('--------')

// //----Task_2-----


for (let item of Object.entries(person)) {
    const key = item[0];
    const value = item[1];
    

    if (key.includes('Name')) {
        const twoStr = key.indexOf('Name')
        console.log(`${key[0].toUpperCase()}${key.substr(1, twoStr - 1)} ${key.substr(twoStr).toLowerCase()}: ${value}`)
    }

    else if (key.includes('location')) {
        console.log(`Where to find: ${value}`)
    }

    else if (typeof value === 'number') {
        console.log(`${key[0].toUpperCase()}${key.substr(1)}: ${value} age`)
    }
}