import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I2sGvLaWu3Gv0t8TrONHyJvZxvUCzt0VIRIeNopcbGZkxZGDgmyYJfgF3c6qgFVcmWbZYmS4WF1MSsWuCjnWXFQ00zrkmTs93';

    const onToken = token => {
        console.log(token);
        console.log('Payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Delice Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            
        />
    );

}

export default StripeCheckoutButton;