import React from "react";
import Cart from "./Cart";
import Individual from "./Individual";
import "./item.css";

function Item(props) {
  const itemList = props.items.map((product) => (
    <Individual item={product} fun={props.fun}></Individual>
  ));
  return (
    <div className="shop">
      <div className="product">{itemList}</div>
      <Cart className="cart" cartArray={props.cartArray} />
    </div>
  );
}

export default Item;
