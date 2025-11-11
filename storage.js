export const updateCartCount = (count) => {
    document.getElementById('cart-count').textContent = count;
};

export const renderCart = (cart) => {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    
    cartItemsDiv.innerHTML = '';  // Clear any existing cart items
    let total = 0;
    
    // Render cart items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-item" data-product-name="${item.name}">Remove</button>
        `;
        cartItemsDiv.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    
    cartTotalDiv.textContent = total.toFixed(2);  // Update total price

    // Add event listeners to the "Remove" buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product-name');  // Get product name from button data
            removeFromCart(productName);  // Call removeFromCart to remove the product
            renderCart(cart);  // Re-render the cart modal to reflect the changes
        });
    });
};
