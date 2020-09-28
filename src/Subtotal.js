import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Handleing number of itmes in shopping basket */}
              {/* Formatting Currency Part with react-currency-format */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
              {/* Button to proceed to Payment page, which reserves the history of shopping basket */}
      <button onClick={e => history.push('/payment')}><div className='subtotal__buttonText'>Proceed to Checkout</div></button>
    </div>
  );
}

export default Subtotal;
