import { updateCartCount } from './storage.js';

const cart = [];

export const addToCart = (product) => {
    const existingProduct = cart.find(item => item.name === product.name);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount(cart.length);
};

export const removeFromCart = (productName) => {
    // Find the product in the cart and remove it
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1);  // Remove the product from the cart array
        saveCart();  // Save the updated cart to localStorage
        updateCartCount(cart.length);  // Update the cart count in the navbar
    }
};

export const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    savedCart.forEach(product => cart.push(product));
    updateCartCount(savedCart.length);
    return savedCart;
};
