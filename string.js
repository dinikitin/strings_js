//    -------Задача 1------

const string = 'Я изучаю JavaScript'

const first_char_1 = string[0]
const first_char_2 = string.slice(0, 1)

const third_char_1 = string.slice(2, 3)
const hird_char_2 = string[2]

const last_char_1 = string[string.length - 1]
const last_char_2 = string.slice(-1)

console.log(`Первый символ строки - ${first_char_1}`)
console.log('Третий символ строки - ', third_char_1)
console.log('Последний символ строки - ', last_char_1)

//    -------Задача 2------


let sentence = 'Я изучаю JavaScript'

const i = 7
sentence = sentence.substring(0, 7) + 'л' + sentence.substring(i + 1)
console.log(sentence)
sentence = sentence.replace('л', 'ю')
console.log(sentence)

sentence = sentence.replace('JavaScript', 'Frontend')
console.log(sentence)



