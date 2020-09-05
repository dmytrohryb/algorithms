const insertionSort = (arr, str) => {
    let countIteration = 0
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        let j = i - 1
        while((str === 'max') ? current < arr[j] && j >= 0 : current > arr[j] && j >= 0){
            arr[j+1] = arr[j]
            j--
            countIteration++
        }
        arr[j+1] = current
    }
    console.log(countIteration)
    return arr
}

module.exports = insertionSort

