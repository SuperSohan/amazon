import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./individual.css";
function Individual(props) {
  console.log(props.item);
  var { img, name, seller, price, stock, star, features } = props.item;
  var rating = [];
  for (let index = 0; index < star; index++) {
    rating.push(
      <span>
        <FontAwesomeIcon color="#ffc14b" icon={faStar} />
      </span>
    );
  }
  const description = features.map((array) => (
    <li>
      {array.description} : {array.value}
    </li>
  ));
  return (
    <div className="whole">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="item-container">
        <h4>{name}</h4>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "50%",
              borderRight: "1px solid lightgrey",
              marginRight: "10px",
            }}
          >
            <small>By {seller}</small>
            <p style={{ fontWeight: "bold" }}>${price}</p>
            <small>Only {stock} item left!</small>
            <br />
            <button
              className="button"
              onClick={() => {
                props.fun(props.item);
              }}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              {"               "}
              Add to Cart
            </button>
          </div>
          <div style={{ width: "50%" }}>
            <div> {rating}</div>
            <h5>Features</h5>
            <ul className="list">{description}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
