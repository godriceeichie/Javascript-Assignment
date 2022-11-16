let button = document.querySelector('#submit');
button.addEventListener('click', function(){
    let number = parseInt(document.querySelector('#input-text').value);
    let result = document.getElementById('text');
    if(number === 1){
        result.textContent = `Okay ${number} egg is being being processed`
    }
    else if(number === 0){
        result.textContent = 'No egg is being processed';
    }
    else if(number < 0){
        result.textContent = 'Invalid input';
    }
    else{
        result.textContent = `Okay ${number} eggs are being processed`;
    }
})