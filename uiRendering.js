// uiRendering.js
// Wuxuu mas'uul ka yahay muujinta badeecadaha, cart-ka, iyo maareynta badhamada UI-ga.

// Import shaqooyinka iyo xogta loo baahan yahay
import { products } from './productData.js';
import { 
    addToCart, 
    updateQuantity, 
    calculateCartTotals, 
    clearCart, 
    updateCartCount,
    getCart
} from './cartState.js';

let productListDiv, cartItemsDiv;

/** Waxaa la muujiyaa sanduuqa digniinta guusha */
export const showSuccessAlert = (total) => {
    document.getElementById('alert-message').textContent = `Your order for $${total.toFixed(2)} has been successfully placed.`;
    document.getElementById('custom-alert').classList.add('active'); 
    document.body.classList.add('no-scroll'); 
    
    // Ku dar overlay
    const overlay = document.createElement('div');
    overlay.id = 'alert-overlay';
    overlay.className = 'fixed inset-0 bg-gray-900 bg-opacity-70 z-[2000]'; 
    document.body.appendChild(overlay);
};

/** Waxaa la xidhaa sanduuqa digniinta */
export const closeAlertHandler = () => {
    document.getElementById('custom-alert').classList.remove('active');
    document.body.classList.remove('no-scroll'); 
    const overlay = document.getElementById('alert-overlay');
    if (overlay) overlay.remove();
};

/** Waxaa la maamulaa habka Checkout-ka */
export const checkoutHandler = () => {
    const cart = getCart();
    if (cart.length === 0) {
        console.warn("Hami Minimarket: Checkout tried to run on an empty cart.");
        return;
    }
    
    console.log("Checkout Handler Fired! Order process starting...");
    
    const { total } = calculateCartTotals();
    document.getElementById('cart-modal').classList.remove('show');
    
    showSuccessAlert(total);
    clearCart(); 
    updateCartCount(); 
    renderCart(); // Dib u soo bandhig cart-ka oo faaruq ah
};

/** Waxaa lagu shaqeeyaa hal badeeco card */
const renderProduct = (product) => {
    const productElement = document.createElement('div');
    productElement.className = 'product-card bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden';
    
    // HAGAHAJINTA SAWIRKA: Waxaa la hubinayaa in la isticmaalo 'imageUrl'
    const imageUrl = product.imageUrl || 'https://placehold.co/400x300/cccccc/333333?text=Hami+Product'; 
    
    productElement.innerHTML = `
        <div class="product-image h-48">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/333333?text=Sawir+Ma+Jiro';">
        </div>
        <div class="p-4 text-center">
            <h3 class="text-xl font-bold mb-1 text-gray-800">${product.name}</h3>
            <p class="text-sm text-gray-500 h-10 overflow-hidden">${product.description}</p>
            
            <div class="flex justify-center items-baseline mt-3">
                <span class="text-2xl font-extrabold text-green-600">$${product.price.toFixed(2)}</span>
            </div>
            
            <button data-product-id="${product.id}" 
                    class="add-to-cart mt-4 w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md">
                <i class="fa-solid fa-cart-plus mr-2"></i> Add to Cart
            </button>
        </div>
    `;

    // Ku xidh shaqada ku darista cart-ka (add to cart)
    productElement.querySelector('.add-to-cart').addEventListener('click', () => {
        const selectedProduct = products.find(p => p.id === product.id); 
        if (selectedProduct) {
            addToCart(selectedProduct); 
            
            updateCartCount(); 
            if (document.getElementById('cart-modal').classList.contains('show')) {
                renderCart();
            }
        }
    });
    
    return productElement;
};

/** Waxaa lagu soo bandhigayaa badeecadaha la sifeeyay */
export const renderProductList = (productsToDisplay) => {
    productListDiv = document.getElementById('product-list');
    
    // Hubi in productListDiv la helay
    if (!productListDiv) {
        console.error("Hami Minimarket: Element-ka 'product-list' lama helin.");
        return;
    }
    
    productListDiv.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productListDiv.innerHTML = '<p class="col-span-full text-center text-xl text-gray-500 mt-10">No products found matching your criteria.</p>';
    }
    
    productsToDisplay.forEach(product => {
        productListDiv.appendChild(renderProduct(product));
    });
};

/** Waxaa lagu soo bandhigayaa dhammaan cart-ka */
export const renderCart = () => { 
    cartItemsDiv = document.getElementById('cart-items');
    const cart = getCart();
    const { subtotal, tax, total } = calculateCartTotals();

    cartItemsDiv.innerHTML = ''; 
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="text-center text-gray-500 mt-10">Your cart is empty. Start adding some fresh produce!</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex items-center justify-between border-b pb-3 mb-3';
            itemElement.innerHTML = `
                <div class="flex-grow">
                    <h4 class="font-semibold text-gray-800">${item.name}</h4>
                    <p class="text-sm text-gray-500">$${item.price.toFixed(2)} / item</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="qty-btn bg-gray-200 text-gray-800 px-2 py-1 rounded-l-lg hover:bg-gray-300 transition" data-id="${item.id}" data-change="-1">-</button>
                    <span class="font-bold">${item.quantity}</span>
                    <button class="qty-btn bg-gray-200 text-gray-800 px-2 py-1 rounded-r-lg hover:bg-gray-300 transition" data-id="${item.id}" data-change="1">+</button>
                </div>
                <span class="font-bold text-lg w-20 text-right">$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartItemsDiv.appendChild(itemElement);
        });
    }

    // Cusboonaysii wadarta guud ee UI-ga
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;

    // Ku xidh listeners badhamada tiro beddelka
    document.querySelectorAll('.qty-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const change = parseInt(e.target.dataset.change);
            updateQuantity(id, change);
            renderCart(); // Dib u soo bandhig cart-ka ka dib isbeddelka
            updateCartCount();
        });
    });
};