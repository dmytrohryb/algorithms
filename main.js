const cocktailSort = require('./cocktailSort')
const generateArray = require('./misc/generateArray')
const insertionSort = require('./insertionSort')

console.log(insertionSort(generateArray(20, 1, 99), 'max'))

