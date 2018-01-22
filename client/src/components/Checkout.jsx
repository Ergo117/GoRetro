import React from 'react';
import {
  CardElement,
  PaymentRequestButtonElement,
  StripeProvider,
  Elements,
  injectStripe
} from 'react-stripe-elements';

class _CardForm extends React.Component {

  render() {
    return (
      <form onSubmit={() => this.props.stripe
        .createToken()
        .then(payload => console.log(payload))}>
        <CardElement />
        <button className="payBtn">Pay</button>
      </form>
    )
  }
}
const CardForm = injectStripe(_CardForm)

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <h1>Ready to Checkout?</h1>
        <Elements>
          <CardForm />
        </Elements>
      </div>
    )
  }
}

export default Checkout;