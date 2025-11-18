// cartState.js
// Wuxuu maamulayaa xogta cart-ka iyo xisaabinta.

export const cart = [];
const CART_STORAGE_KEY = "hamiMinimarketCart";
const TAX_RATE = 0.05; // 5% Tax

/** Waxaa loo adeegsadaa si loo cusboonaysiiyo tirada cart-ka iyo badhanka checkout-ka */
export const updateCartCount = () => {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("checkout-button").disabled = count === 0;
};

/** Waxaa lagu kaydiyaa cart-ka gudaha localStorage */
const saveCart = () => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

/** Waxaa lagu soo shubaa cart-ka localStorage */
export const loadCart = () => {
  const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  cart.splice(0, cart.length, ...savedCart);
  updateCartCount();
};

/** Waxaa lagu xisaabiyaa wadarta guud ee cart-ka */
export const calculateCartTotals = () => {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  return { subtotal, tax, total };
};

/** Waxaa laga saaraa badeeco cart-ka */
export const removeFromCart = (productId) => {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    saveCart();
    return true;
  }
  return false;
};

/** Waxaa lagu daraa badeeco cart-ka */
export const addToCart = (product) => {
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
};

/** Waxaa la cusboonaysiiyaa tirada badeecada */
export const updateQuantity = (productId, change) => {
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId); // Waxaa laga saaraa haddii tiradu tahay 0 ama ka yar
    }
    saveCart();
  }
};

/** Waxaa la faaruqinayaa cart-ka oo dhan */
export const clearCart = () => {
  cart.splice(0, cart.length);
  saveCart();
};

/** Waxaa la helayaa cart-ka */
export const getCart = () => {
    return [...cart];
};