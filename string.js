//    -------Задача 1------

const string = 'Я изучаю JavaScript'

const firstChar1 = string[0]
const firstChar2 = string.slice(0, 1)

const thirdChar1 = string.slice(2, 3)
const hirdChar2 = string[2]

const lastChar1 = string[string.length - 1]
const lastChar2 = string.slice(-1)

console.log(`Первый символ строки - ${firstChar1}`)
console.log('Третий символ строки - ', thirdChar1)
console.log('Последний символ строки - ', lastChar1)

//    -------Задача 2------


let sentence = 'Я изучаю JavaScript'

const i = 7
sentence = sentence.substring(0, 7) + 'л' + sentence.substring(i + 1)
console.log(sentence)
sentence = sentence.replace('л', 'ю')
console.log(sentence)

sentence = sentence.replace('JavaScript', 'Frontend')
console.log(sentence)



