import React from "react";
import { CurrencyBitcoin } from "@mui/icons-material";
import { CreditCard } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/Offer.css";

function Offer() {
  return (
    <div className='offer'>
      <button className='outerButton'>
        <h1>Checkout</h1>
        <p>Final price of the product you chose is 5.5 ETH</p>
        <div className='offerForm'>
          <p>Payment Method</p>
          <div className='form'>
            <input type='radio' name='purchase' value='crypto' id='crypto' />
            <label htmlFor='crypto'>
              <CurrencyBitcoin /> Crypto
            </label>
            <input type='radio' name='purchase' value='card' id='card' />
            <label htmlFor='card'>
              <CreditCard /> Card
            </label>
          </div>
          <div className='purchase'>
            <Link to='/purchaseSuccess'>
              <button type='submit' id='submit'>
                Complete Purchase
              </button>
            </Link>
            <Link to='/explore'>
              <button type='submit'>Cancel</button>
            </Link>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Offer;
