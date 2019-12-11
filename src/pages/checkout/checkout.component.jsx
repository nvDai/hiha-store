import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
	selectCartItems,
	selectCartItemTotalPrice,
} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutComponent from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} item={cartItem} />
		))}
		<div className='total'>${total}</div>
		<div className='test-warning'>
			*Please use the following test credit card for payment*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeCheckoutComponent price={total} />
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartItemTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage)
