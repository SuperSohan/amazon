import React from "react";

function Shop() {
  fetch("../../fakeData/products.JSON")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div>ddddddddddddddd</div>;
}

export default Shop;
