const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}
// function addToCart(element) {
//     // Get the product details from the product tile where the clicked “Add to cart” is placed.
//     var productParent = $(element).closest('.product');
//     var productName = productParent.find('.product-name').text();
//     var productPrice = productParent.find('.product-price').text();
//     var productQuantity = productParent.find('.product-quantity').val();
  
//     // Prepare the JSON instance of the cart item row.
//     var cartItem = {
//       name: productName,
//       price: productPrice,
//       quantity: productQuantity
//     };
  
//     // Append the newly added items to the existing cart sessionStorage object.
//     var cart = JSON.parse(sessionStorage.getItem('cart'));
//     cart.push(cartItem);
//     sessionStorage.setItem('cart', JSON.stringify(cart));
  
//     // Update the cart total.
//     updateCartTotal();
//   }
  
//   // Update the cart total.
//   function updateCartTotal() {
//     var cart = JSON.parse(sessionStorage.getItem('cart'));
//     var total = 0;
//     for (var i = 0; i < cart.length; i++) {
//       total += cart[i].price * cart[i].quantity;
//     }
  
//     // Update the cart total element.
//     $('.cart-total').text(total);
//   }


    window.onload = function() {
        // Get all elements with the class name 'price'
        var prices = document.querySelectorAll('.price');
        
        // Get all input elements with type 'number'
        var quantityInputs = document.querySelectorAll('input[type="number"]');
        
        // Get the label where you want to display the total price
        var totalPriceLabel = document.getElementById('total-price-label');
        
        // Function to update total price
        function updateTotalPrice() {
            var totalPrice = 0;
            
            // Loop through each item
            prices.forEach(function(price, index) {
                // Calculate subtotal for each item (price * quantity)
                var subtotal = parseInt(price.textContent) * parseInt(quantityInputs[index].value);
                
                // Add subtotal to total price
                totalPrice += subtotal;
            });
            
            // Display total price in the label
            totalPriceLabel.textContent = 'Total Price: ₹' + totalPrice;
        }
        
        // Call updateTotalPrice function initially to set the initial total price
        updateTotalPrice();
        
        // Add event listener to each quantity input to update total price on change
        quantityInputs.forEach(function(input) {
            input.addEventListener('input', updateTotalPrice);
        });
    }

