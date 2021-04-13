import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IfsYLBG5PsKWdLPLewmY4179WRhCTcWgreO7U4bqniTrlYsf7rk6pdt4o1rX7PrqrEA7LDdyX7KcuGoDsDE5oy700QPUASD49" 

    const onToken = token => {
        console.log(token)
        alert("Payment Succesfull")
    }
    return (
        <StripeCheckout
           label="Pay Now"
           name="JKRX Clothing LTD."
           billingAddress
           shippingAddress
           image="https://svgshare.com/i/CUz.svg"
           description={`Your total is ${price}`}
           amount={priceForStripe}
           panelLabel="Pay Now"
           token={onToken}
           stripeKey={publishableKey}
         />
    )
}

export default StripeCheckoutButton
