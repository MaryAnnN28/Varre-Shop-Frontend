import React from 'react'
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <center>
        <h2 className="cart-page-header">Items in Your Cart</h2>

        <div className="cart-container">
          <table className="cart-items">
            <thead>Cart</thead>
            <tr>

            </tr>
          </table>
          <table className="cart-summary">
            <thead>Order Summary</thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>$1000.00</td>
              </tr>
              <tr>
              <td>Shipping</td>
                <td>$1000.00</td>
              </tr>
              <tr>
                <td>Sales Tax</td>
                <td>$1000.00</td>
              </tr>
              <tr>
              <td>Total</td>
                <td>$1000.00</td>
              </tr>
              <tr>
                <center>
                  <button type="submit">Proceed to Checkout</button>

                </center>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
  )
}

export default Cart; 
