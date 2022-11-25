function getLongestWord(array){
    let length = [];
    let result = []
    for(i = 0; i < array.length; i++){
        let item1 = array[i];
        length.push(item1.length)
    }
    for(item of array){
        if(Math.max(...length) === item.length){
            result.push(item)
        }
    }
    console.log(result.join(" "));
}
getLongestWord(['Gaadi', 'Blessing', 'Oseremen'])