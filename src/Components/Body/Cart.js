import React from "react";
import "./cart.css";
function Cart(props) {
  console.log(props.cartArray);
  const cart = props.cartArray;
  // var itemPrice = 0;
  if (cart.length !== 0) {
    var itemPrice = cart.reduce((total, e) => total + e.price, 0);
  }
  var shippingCharge;
  if (itemPrice < 100) shippingCharge = 15;
  else if (itemPrice < 200) shippingCharge = 10;
  else if (itemPrice < 500) shippingCharge = 5;
  else shippingCharge = 0;
  var totalPrice = (itemPrice + shippingCharge + 1).toFixed(2);
  return (
    <div className="order">
      <h3>Order Summary</h3> <p>Item ordered: {props.cartArray.length}</p>
      <p>Items price: ${itemPrice}</p>
      <p>Shipping charge: ${shippingCharge}</p>
      <small>Vat: $1</small>
      <p style={{ fontWeight: "600" }}>
        Total price:
        <span className="total-p">
          {"            "}${totalPrice}
        </span>
      </p>
      <button className="button">Review your order</button>
    </div>
  );
}

export default Cart;
