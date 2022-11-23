function getLongestWord(sentence){
    let word = sentence.split(" ");
    let result;
    let final = [];
    for(i = 0; i < word.length; i++){
        let item = word[i].length;
        final.push(item)
        result = Math.max(final)
    }
    console.log(result);
}

getLongestWord("Felix is his name");