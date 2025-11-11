document.addEventListener('DOMContentLoaded', () => {
    // Code-ka hamburger-ka wuu saxan yahay, ma beddelin
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
})
    


import { renderProduct } from './product.js';
import { addToCart, loadCart, removeFromCart } from './cart.js';
import { renderCart, updateCartCount } from './storage.js';

// Load products from the array
  const products = [
    { 
        name: 'Tomato', 
        category: 'Vegetables', 
        description: 'Yaanyadu waa nooc kamida Khudaarta waa midho inta badan jaale iyo green noqda.', 
        image: 'images/Tomato.jpg', 
        price: 8.50 
    },
    { 
        name: 'Watermelon', 
        category: 'Fruits', 
        description: 'qaraha ama xab-xabku waa nooc kamida fruits-ka, sidoo kalena macaan midho ahaana waa loo cunaa sidoo kal sharaab ahaana waa loo shiita', 
        image: 'images/Watermelon.jpg', 
        price: 5.00 
    },
    { 
        name: 'Banana', 
        category: 'Fruits', 
        description: 'muusku waa nooc kamida fruits-ka. kaliigii waa la cunaa cuntadana waa lagu cunaa', 
        image: 'images/Banana.jpg', 
        price: 9.50 
    },
    { 
        name: 'Mango', 
        category: 'Fruits', 
        description: 'Cambuhu waa nooc kamida fruits-ka waa midho macan mar-marka qaarna dhanaan yeesha.', 
        image: 'images/Mango.jpg', 
        price: 2.75 
    },
    { 
        name: 'Papaya', 
        category: 'Fruits', 
        description: 'babaygu waa nooc kamida fruits-ka', 
        image: 'images/Papaya.jpg', 
        price: 3.50 
    },
    { 
        name: 'Strawberry', 
        category: 'Fruits', 
        description: 'waa nooc kamida fruits-ka balse waddankeena kama baxo', 
        image: 'images/Strawberry.jpg', 
        price: 6.50 
    },
    { 
        name: 'Salad', 
        category: 'Vegetables', 
        description: 'waa nooc kamida khudaarta, cuntada ayaa lagu cunaa inta badan', 
        image: 'images/Salad.jpg', 
        price: 2.00 
    },
    { 
        name: 'Apple', 
        category: 'Fruits', 
        description: 'waa nooc kamida fruits-ka .', 
        image: 'images/Apple.jpg', 
        price: 11.00 
    },
 
];

let activeCategory = 'all';
const cart = loadCart();

document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.toggle('show');
    renderCart(cart);
});

const searchInput = document.getElementById('search-input');
const productListDiv = document.getElementById('product-list');
const filterButtons = document.querySelectorAll('.filters button');

// Render products based on search and filter
const filterAndRender = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = products.filter(product => {
        const categoryMatches = (activeCategory === 'all' || product.category.toLowerCase() === activeCategory.toLowerCase());
        const nameMatches = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatches && nameMatches;
    });
    productListDiv.innerHTML = '';
    filtered.forEach(product => {
        const productElement = renderProduct(product);
        productElement.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
            alert(`${product.name} added to cart!`);
        });
        productListDiv.appendChild(productElement);
    });
};

// Handle filter changes
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        activeCategory = button.dataset.category.toLowerCase();
        filterAndRender();
    });
});

// Search functionality
searchInput.addEventListener('keyup', filterAndRender);

// Initial render
filterAndRender();

   