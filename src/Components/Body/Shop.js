import React, { useState } from "react";
import fakeData from "../../fakeData";
import Item from "./Item";

function Shop() {
  const xyz = fakeData.slice(0, 10);
  const [item, setItem] = useState(xyz);
  const [cart, setCart] = useState("");
  const handleAddToCart = (e) => {
    const newCart = [...cart, e];
    setCart(newCart);
  };
  return (
    <div>
      <Item items={item} fun={handleAddToCart} cartArray={cart} />
    </div>
  );
}

export default Shop;
