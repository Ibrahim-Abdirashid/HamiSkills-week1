export const renderProduct = (product) => {
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
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
    
    return productElement;
};
