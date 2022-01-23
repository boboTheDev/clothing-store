import { createSelector } from "reselect";

// two types: input selector (dont use inputselector) and output

const selectCart = (state) => state.cart;

// const selectUser = (state) => state.user;

// export const selectCartItems = createSelector(
//   [selectCart, selectUser],
//   //note: cart and user from each array like .map()
//   (cart, user) => {}
// );

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  //note: automatically reference to above function
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (prevValue, currentItem) => prevValue + currentItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (prevValue, currentItem) =>
      prevValue + currentItem.quantity * currentItem.price,
    0
  )
);
