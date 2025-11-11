import { updateCartCount } from './storage.js';

// Ka dhig cart-ka mid la export-gareyn karo si storage.js uu ula shaqeeyo
export const cart = [];

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
    // Hel index-ka badeecada
    const index = cart.findIndex(item => item.name === productName);
    
    if (index !== -1) {
        // Haddi badeecadu ka badan tahay 1, hal ka dhim
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            // Haddi ay tahay hal kaliya, ka saar gebi ahaan
            cart.splice(index, 1);
        }
        
        saveCart();
        updateCartCount(cart.length);
    }
};

export const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Buuxi cart-ka la export-gareeyay si loo wada isticmaalo
    cart.splice(0, cart.length, ...savedCart); 
    updateCartCount(cart.length);
    return cart; // Soo celi cart-ka la buuxiyay
};