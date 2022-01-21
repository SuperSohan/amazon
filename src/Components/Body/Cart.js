import React from "react";
import "./cart.css";
function Cart(props) {
  console.log(props.cartArray);
  //   const sum1 = 0;
  //   props.cartArray.map((item) => {
  //     sum1 = item.price + sum1;
  //   });
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Item ordered: {props.cartArray.length}</p>
      <p>Items:{}</p>
    </div>
  );
}

export default Cart;
