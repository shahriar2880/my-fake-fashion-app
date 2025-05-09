const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveToCart = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveToCart(cart);
};

export { addToLocalStorage, getStoredCart };

// const getStoredCart = () => {
// const storedCartString = localStorage.getItem('cart')
// if(storedCartString){
//  return JSON.parse(storedCartString)
// }
//  return [];
// };
