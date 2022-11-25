let array = ['Godrice', 'Samuel', 'Gaadi', 'Munachi']
let filtered;
for(element of array){
    filtered = array.filter(element => {
    return Math.max(element.length)
  })
}

console.log(filtered);