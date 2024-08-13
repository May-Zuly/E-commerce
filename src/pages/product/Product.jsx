import React, { useContext } from "react";
import "./Product.css";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="product-card" style={{ width: "18rem" }}>
      <div className="img-box">
        <img
          src={productImage}
          className="card-img-top product-img"
          alt={productName}
        />
      </div>
      <div className="product-card-body text-center">
        <h5 className="card-title">
          <Link to={`/product/${id}`} className="btn btn-link">
            {productName}
          </Link>
        </h5>

        <p className="product-card-text">${price}</p>
        <button
          className="btn btn-primary position-relative mx-2"
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Add To Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          type="button"
          className={
            "btn btn-outline-primary position-relative mx-2 " +
            (favoriteId && "text-danger")
          }
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
