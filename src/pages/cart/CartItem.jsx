import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const qty = props.qty;
  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);
  return (
    <div className="card mb-3 w-50 mx-5 my-5">
      <div className="row g-0 mx-auto">
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
            <div className="card-text">
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => removeFromCart(id)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control"
                  value={qty}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => addToCart(id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
