export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => {
      // console.log('cartItem.id', typeof cartItem.id)
      // console.log('cartItemToAdd.id', typeof cartItemToAdd.id)
      return (cartItem.id === cartItemToAdd.id)
    }
  );
  // console.log('existingCartItem', existingCartItem)

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      // use map since we need create a new state
      cartItem.id === cartItemToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map((cartItem) =>
    // use map since we need create a new state
    cartItem.id === cartItemToRemove.id ?
      { ...cartItem, quantity: cartItemToRemove.quantity - 1 }
      : cartItem
  );
}


export const sumPrice = (cartItems) => {
  return cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.foodPrice
    , 0);
}