// Product Filter

function filterProducts(category){

let products = document.querySelectorAll(".product");

products.forEach(product => {

if(category === "all"){
product.style.display = "block";
}
else if(product.classList.contains(category)){
product.style.display = "block";
}
else{
product.style.display = "none";
}

});

}

// Image Gallery

function changeImage(src){
document.getElementById("mainImage").src = src;
}

// Cart Total

function updateTotal(){

let price =
parseInt(document.getElementById("price").innerText);

let qty =
parseInt(document.getElementById("qty").value);

let total = price * qty;

document.getElementById("total").innerText = total;

document.getElementById("grandTotal").innerText = total;

}