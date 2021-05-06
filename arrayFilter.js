let list = [31, 10, 'chiken', 9, 'fish', 10]



let listString = list.filter((str)=>{
    return isNaN(str)
})

let listNumber = list.filter((num)=>{
    return num === 10
})

listString.forEach((item, array)=>{
    console.log(item)
})

console.log('----------')

listNumber.forEach((item, index, array)=>{
    console.log(item, '-', index)
})