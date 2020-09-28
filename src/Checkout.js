import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
        // Constants used for State Manipulation of Objects & Components
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* Displaying User name with Greeting */}
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
        {/* Mapping Product Props with the Items in the Shopping Basket*/}
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
      <div className="checkout__right">
        {/* Using Subtotal Component on Checkout Page */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
