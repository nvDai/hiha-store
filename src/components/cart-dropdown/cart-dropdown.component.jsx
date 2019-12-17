import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from 'redux/cart/cart.selectors'
import { toggleCart } from 'redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, dispatch, history }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className='empty-message'>Your cart is empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				if (history.location.pathname === '/checkout') {
					dispatch(toggleCart())
					return
				}
				dispatch(toggleCart())
				history.push('/checkout')
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
