import React from "react";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//NOTE; this is called selector, gets the whole state and pulls off just small portions of it
// whenever any reducer refresh, redux recomposes this mapStateToProps, always rerendering the component.
// becuase this funciton dont know the coming state is new or not
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   // itemCount: cartItems.reduce(
//   //   (prevValue, currentItem) => prevValue + currentItem.quantity,
//   //   0
//   // ),
// });

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
