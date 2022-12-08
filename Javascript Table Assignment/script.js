let filterInput = document.getElementById("filter");
filterInput.addEventListener('keyup', filterName);
function filterName(){
    let filterValue = filterInput.value.toUpperCase();
    let productContainer = document.querySelector(".product-container");
    let products = productContainer.querySelectorAll(".products");
    for(i = 0; i < products.length; i++){
        let productNames = products[i].getElementsByTagName("h2")[0];
        if(productNames.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            products[i].style.display = "";
        }
        else{
            products[i].style.display = "none";
        }
    }
}
