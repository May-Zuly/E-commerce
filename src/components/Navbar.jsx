import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { PRODUCTS } from "../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

export const Navbar = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems, favoriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = PRODUCTS.filter(product =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pass filteredProducts to the search results page or update the state
    navigate("/search", { state: { searchQuery, filteredProducts } });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Flitry Phone
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  "nav-link " +
                  (pathname === "/" && "active text-danger fw-bold")
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={
                  "nav-link " +
                  (pathname === "/cart" && "active text-danger fw-bold")
                }
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge bg-danger rounded-circle">
                    {totalItemCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorite"
                className={
                  "nav-link " +
                  (pathname === "/favorite" && "active text-danger fw-bold")
                }
              >
                Favorite{" "}
                {favoriteIds.length > 0 && (
                  <span className="badge bg-danger rounded-circle">
                    {favoriteIds.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0 d-flex"
            onSubmit={handleSearchSubmit}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-outline-primary mx-2 my-2 my-sm-0"
              type="submit"
            >
             <FontAwesomeIcon icon={faSearch}/>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
