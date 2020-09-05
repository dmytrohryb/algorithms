const selectionSort = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        let k = i
        let swap = arr[i]
        for (let j = i + 1; j < arr.length; j++){
            if(arr[k] > arr[j]){
                k = j
            }
            count++
        }
        arr[i] = arr[k]
        arr[k] = swap
    }
    console.log(count)
    return arr
}

module.exports = selectionSort
