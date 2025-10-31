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

    // Qaybta filter-ka products-ka
    const searchInput = document.getElementById('search-input');
    const productListDiv = document.getElementById('product-list');
    const filterButtons = document.querySelectorAll('.filters button');

    // Xogta products-ka ee la saxay
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

    function renderProducts(filteredProducts) {
    productListDiv.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productListDiv.innerHTML = '<p>Wax product ah lama helin.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        
        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-prices">
                    <span class="product-current-price">$${product.price.toFixed(2)}</span>
                </div>
            </div>
        `;
        
        productListDiv.appendChild(productElement);
    });
}


    function filterAndRender() {
        const searchTerm = searchInput.value.toLowerCase();
        
        const filtered = products.filter(product => {
            const categoryMatches = (activeCategory === 'all' || product.category.toLowerCase() === activeCategory.toLowerCase());
            const nameMatches = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            
            return categoryMatches && nameMatches;
        });
        
        renderProducts(filtered);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeCategory = button.dataset.category.toLowerCase();
            filterAndRender();
        });
    });

    searchInput.addEventListener('keyup', () => {
        filterAndRender();
    });

    filterAndRender();
});
