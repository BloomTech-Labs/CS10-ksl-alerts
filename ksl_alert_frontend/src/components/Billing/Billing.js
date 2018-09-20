import React, { Component } from 'react';

class Billing extends Component {
  render() {
    return (
      <div>
        <p>Payment Info</p>
        <ul>
          <li>
            <input type="text" name="cc" placeholder="CC#" />
          </li>
          <li>
            <input type="text" name="exp" placeholder="EXP" />
          </li>
          <li>
            <input type="text" name="cvv" placeholder="CVV" />
          </li>
          <li>
            <input type="checkbox" name="oneMonthSub" /> 1 Month Subs - $20
          </li>
          <li>
            <input type="checkbox" name="newPassword" /> 1 Client - $1.99
          </li>
          <li>
            <button>Buy Now!</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Billing;
