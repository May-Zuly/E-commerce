import React, { useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faHouseChimneyUser,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchQuery, filteredProducts } = location.state || {};

  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);

  return (
    <div className="container my-5">
      <h3 className="my-4">
        Search Results for "{searchQuery}"{" "}
        <button
          type="button"
          className={"btn btn-outline-primary position-relative ms-2"}
          onClick={() => navigate("/")}
        >
          {" "}
          <FontAwesomeIcon icon={faHouseChimneyUser} className="fa-2x" />
        </button>
      </h3>
      <div className="d-flex gap-3 flex-wrap">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const cartItem = cartItems.find((item) => item.id === product.id);
            const favoriteId = favoriteIds.find((fid) => fid === product.id);

            return (
              <div
                key={product.id}
                className="card"
                style={{
                  width: "18rem",
                  border: "1px solid #ddd",
                  background: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    margin: "10px 0",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <img
                    src={product.productImage}
                    className="card-img-top"
                    alt={product.productName}
                    style={{
                      width: "auto",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <Link to={`/product/${product.id}`}>
                      {product.productName}
                    </Link>
                  </h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-primary position-relative mx-2"
                    onClick={() => addToCart(product.id)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    {cartItem?.count && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItem.count}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    className={`btn btn-outline-primary position-relative mx-2 ${
                      favoriteId ? "text-danger" : ""
                    }`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
