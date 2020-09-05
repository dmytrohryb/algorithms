//const cocktailSort = require('./cocktailSort')
const generateArray = require('./misc/generateArray')
//const insertionSort = require('./insertionSort')
const selectionSort = require('./selectionSort')
let arr = generateArray(20, 1, 99)
console.log(arr)
console.log(selectionSort(arr))

