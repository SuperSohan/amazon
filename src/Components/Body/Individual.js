import React from "react";
import "./individual.css";
function Individual(props) {
  const { img, name, seller, price, stock } = props.item;
  return (
    <div className="whole">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="item-container">
        <h4>{name}</h4>
        <small>By {seller}</small>
        <p style={{ fontWeight: "bold" }}>${price}</p>
        <small>Only {stock} item left!</small>
        <br />
        <input
          className="button"
          type="button"
          value="Add to cart"
          onClick={() => {
            props.fun(props.item);
          }}
        />
      </div>
    </div>
  );
}

export default Individual;
