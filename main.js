// main.js
// Wuxuu maamulayaa bilowga app-ka, filter-ka, iyo dhacdooyinka guud.

// Import xogta iyo shaqooyinka lagama maarmaanka ah
import { products } from './productData.js';
import { loadCart } from './cartState.js';
import { 
    renderProductList, 
    renderCart, 
    checkoutHandler, 
    closeAlertHandler 
} from './uiRendering.js';
 
let activeCategory = 'all';
let searchInput;
let filterButtons;

/** Waxaa lagu sifeeyaa oo lagu soo bandhigayaa badeecadaha */
const filterAndRender = () => {
    // Dib u hel element-yada haddii aysan diyaar ahayn bilowga
    if (!searchInput) {
        searchInput = document.getElementById('search-input');
        if (!searchInput) {
            console.error("Hami Minimarket: Search input element lama helin.");
            return; // Jooji haddii aan wali la helin
        }
    }
    
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = products.filter(product => { 
        const categoryMatches = (activeCategory === 'all' || product.category.toLowerCase() === activeCategory.toLowerCase());
        // Xaqiiji in filter-ku ku shaqaynayo 'name' iyo 'description'
        const nameMatches = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        return categoryMatches && nameMatches;
    });

    // Wac shaqada UI-ga si toos ah
    renderProductList(filtered);
};
        
/** Waxaa lagu xidhayaa dhacdooyinka UI-ga */
const setupEventListeners = () => {
    searchInput = document.getElementById('search-input');
    filterButtons = document.querySelectorAll('.filter-btn');
            
    // 1. Search and Filter listeners
    if (searchInput) {
        searchInput.addEventListener('input', filterAndRender);
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Maareynta class-yada badhamada
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-600', 'text-white');
                btn.classList.add('bg-white', 'text-indigo-600', 'border', 'border-indigo-600');
            });
            
            e.target.classList.add('active', 'bg-indigo-600', 'text-white');
            e.target.classList.remove('bg-white', 'text-indigo-600', 'border', 'border-indigo-600');
            
            activeCategory = e.target.dataset.category.toLowerCase();
            filterAndRender();
        });
    });

    // 2. Cart Modal listeners
    document.getElementById('cart-button').addEventListener('click', () => {
        document.getElementById('cart-modal').classList.add('show');
        document.body.classList.add('no-scroll');
        renderCart(); 
    });
    document.getElementById('close-cart-btn').addEventListener('click', () => {
        document.getElementById('cart-modal').classList.remove('show');
        document.body.classList.remove('no-scroll');
    });

    // 3. Checkout Listener and Alert Close
    document.getElementById('checkout-button').addEventListener('click', checkoutHandler);
    document.getElementById('close-alert-btn').addEventListener('click', closeAlertHandler);
};

// --- Hamburger Menu Logic ---
const setupHamburgerMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
};

/** Waxaa la bilaabayaa App-ka */
const initApp = () => {
    // Ka saar no-scroll haddii si qalad ah loo dhigay
    document.body.classList.remove('no-scroll'); 
    
    // Hubi haddii element-yada DOM-ka ay jiraan ka hor inta aan la wicin setupEventListeners
    if (document.getElementById('product-list')) {
        loadCart(); // Ka soo shub cart-ka kaydka (storage)
        setupEventListeners(); // Xidh listeners oo hel element-yada
        setupHamburgerMenu(); // Xidh nidaamka hamburger-ka
        filterAndRender(); // Soo bandhig badeecadaha bilowga
    } else {
        // Tani waxay dhacdaa haddii DOM-ka uusan wali diyaar ahayn - dhib ma ahan maadaama lagu jiro DOMContentLoaded
        console.warn("Hami Minimarket: Element-ka 'product-list' lama helin xilligii initApp. Dib ayaa loo celinayaa.");
    }
};

// Run Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', initApp);