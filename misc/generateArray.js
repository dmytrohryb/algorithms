const getRandomNumber = require('./getRandomNumber')

const generateArray = (countElements, min, max) => {
    let arr = []
    for (let i = 0; i < countElements; i++){
        arr.push(getRandomNumber(min, max))
    }
    return arr
}

module.exports = generateArray
