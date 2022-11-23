let arr = [1, 4, 2, 6, 9]
function getNumber(array, target){
    let result = []; 
    for(i = 0; i < array.length; i++){
        item = array[i]
        if(item < target){
            result.push(item)
        }
        
    }
    let final = result.sort((a,b) => a-b)
    return final
}
console.log(getNumber(arr, 4))