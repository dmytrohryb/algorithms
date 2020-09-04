const cocktailSort = (arr, str) => {

    let right = arr.length - 1
    let left = 0

    while(left < right){
        for(let i = 0; i < right; i++){
            if((str === 'max') ? arr[i] > arr[i+1] : arr[i] < arr[i+1]){
                let swap = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = swap
            }
        }
        right--

        for (let j = right - 1; j > left; j--){
            if((str === 'max') ? arr[j] < arr[j-1] : arr[j] > arr[j+1]){
                let swap = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = swap
            }
        }
        left++
    }
    return arr
}
module.exports = cocktailSort


/*
   for(let i = 0; i < arr.length - 1 - i + 1; i++){

        for(let j = arr.length - 1; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let swap = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swap
            }
        }

        for(let k = arr.length - 1 + i; k === 1 + i; k++){
            if(arr[k] )
        }
    }
*/
