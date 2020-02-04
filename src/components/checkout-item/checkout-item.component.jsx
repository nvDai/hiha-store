import React from 'react'
import { connect } from 'react-redux'

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

export const CheckoutItem = ({
	item: { id, name, imageUrl, price, quantity },
	clearItemFromCart,
	addItem,
	removeItem,
}) => (
	<div className='checkout-item'>
		<div className='image-container'>
			<img src={imageUrl} alt='cart item' />
		</div>
		<span className='name'>{name}</span>
		<div className='quantity'>
			<div
				id='decrease-btn'
				className='arrow'
				onClick={() => removeItem({ id })}
			>
				&#10094;
			</div>
			<span className='value'>{quantity}</span>
			<div id='increase-btn' className='arrow' onClick={() => addItem({ id })}>
				&#10095;
			</div>
		</div>
		<span className='price'>$ {price}</span>
		<div className='remove-button' onClick={() => clearItemFromCart({ id })}>
			&#10005;
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
	clearItemFromCart: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
