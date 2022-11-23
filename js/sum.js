function getSum(array, target){
    let item1, item2, sum, index
    let result = []
    for(i = 0; i < array.length; i++){
        item1 = array[i]
        for(j = i + 1; j <= array.length; j++){
            item2 = array[j]
            sum = item1 + item2;
            if(sum === target){
                // result.push(item1, item2)
                console.log(i, j)
            }
        }
    }
}
getSum([2, 4, 5, 7], 11)