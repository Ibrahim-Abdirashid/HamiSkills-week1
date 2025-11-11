import { removeFromCart, cart } from './cart.js'; // Import cart iyo removeFromCart

export const updateCartCount = (count) => {
    document.getElementById('cart-count').textContent = count;
};

export const renderCart = () => { // Maadaama aan ka import-gareynay cart-ka, uma baahnin in loo soo dhiibo
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    
    cartItemsDiv.innerHTML = ''; 	// Nadiifi wixii jiray
    let total = 0;
    
    // Soo bandhig cart items-ka
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
    
    cartTotalDiv.textContent = total.toFixed(2); // Cusbooneysii wadarta

    // Ku dar event listeners badhamada "Remove"
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product-name'); 
            removeFromCart(productName); 	// Wac removeFromCart 
            renderCart(); 					// Dib u shaqee cart-ka si uu isbeddelka u muujiyo
        });
    });
};