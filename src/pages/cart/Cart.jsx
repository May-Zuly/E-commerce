import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart mx-5 my-4">
      <div className="cart-title my-4 py-4">
        <h2 className="text-center">Your Cart Items</h2>
      </div>
      <div className="cart-list-container d-flex">
        <div className="cart-list d-flex flex-wrap gap-2">
          {cartItems.map((item) => {
            const product = PRODUCTS.find((product) => product.id === item.id);
            return (
              <CartItem data={product} qty={item.count} key={product.id} />
            );
          })}
        </div>
        <div className="cart-info">
          <h5>Subtotal: ${totalAmount}</h5>
          <button className="btn btn-primary mb-2">Checkout</button>
          <button className="btn btn-info" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
