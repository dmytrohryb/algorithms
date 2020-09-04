const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSorted = false
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let swap = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swap
                isSorted = true
            }
        }
        if(!isSorted) break
    }
    return arr
}
module.exports = bubbleSort
