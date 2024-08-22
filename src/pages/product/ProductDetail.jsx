import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faCartShopping,
  faCircleLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  const product = PRODUCTS.find((product) => product.id === Number(params.id));
  const { id, productName, productImage, price, description } = product;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);
  const relatedItems = PRODUCTS.filter(
    (product) => product.id !== Number(params.id)
  );

  return (
    <div className="container">
      <h3 className="my-4">Product Detail</h3>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={productImage}
              className="img-fluid rounded-start"
              alt={productName}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{productName}</h5>
              <p className="card-text">${price}</p>
              <p className="card-text">{description}</p>
              <button
                type="button"
                className="btn btn-outline-primary position-relative me-2"
                onClick={() => addToCart(id)}
              >
                <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
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
              <button
                type="button"
                className={"btn btn-outline-primary position-relative ms-2"}
                onClick={() => navigate("/")}
              >
                <FontAwesomeIcon icon={faCircleLeft} className="me-2" />
                Back
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="my-5">Related Products</h3>
      <div className="d-flex gap-2 my-3">
        {relatedItems.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.productImage}
              className="card-img-top"
              alt={product.productName}
            />
            <div className="card-body text-center">
              <h5 className="card-title">
                <Link to={`/product/${product.id}`}>{product.productName}</Link>
              </h5>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
