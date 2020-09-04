const getRandomNumber = require('./getRandomNumber')

const generateArray = (countElements) => {
    let arr = []
    for (let i = 0; i < countElements; i++){
        arr.push(getRandomNumber(1, 30))
    }
    return arr
}

module.exports = generateArray
