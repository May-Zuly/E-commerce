import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import FavoriteItem from "./FavoriteItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeLg } from "@fortawesome/free-solid-svg-icons/faHomeLg";
import { useNavigate } from "react-router-dom";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";

const Favorite = () => {
  const { favoriteIds } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="products-title">
        <h2 className="my-3 py-3">
          Favorite Items
          <button
          type="button"
          className={"btn btn-outline-primary position-relative ms-2"} 
          onClick={() => navigate("/")}>
            {" "}
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="fa-2x"

            />
          </button>
        </h2>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {favoriteIds.map((fid) => {
          const product = PRODUCTS.find((product) => product.id === fid);
          return <FavoriteItem data={product} key={fid} />;
        })}
      </div>
    </div>
  );
};

export default Favorite;
