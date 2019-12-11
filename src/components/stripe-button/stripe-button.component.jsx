import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const onToken = event => {
	alert('Your payment is success')
}

const StripeCheckoutComponent = ({ price }) => {
	//stripe currency is cent so convert dollar to cent
	const priceForStripe = price * 100
	const publishApiKey = 'pk_test_QgeCfmfxG9ZEhxVhn9nflLcy00ndg1Oigk'
	return (
		<div className='payment-button'>
			<StripeCheckout
				label='Pay Now'
				name='Hiha Store'
				billingAddress
				shippingAddress
				description={`Your total is $${price}`}
				amount={priceForStripe}
				panelLabel='Pay Now'
				token={onToken}
				stripeKey={publishApiKey}
			/>
		</div>
	)
}

export default StripeCheckoutComponent
