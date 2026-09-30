let cartCount = 0;
function addToCart() {
    cartCount++;

document.getElementById("catt-count").textContent = cartCount;
alert ("Products added to cart!");
}

function shopNow() {
    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });
}
