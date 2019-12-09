import React from 'react'
import { connect } from 'react-redux'

import { toggleCart } from 'redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCart, hidden }) => (
	<div className='cart-icon' onClick={toggleCart}>
		<ShoppingIcon className='shopping-icon'></ShoppingIcon>
		<span className='item-count'>0</span>
	</div>
)

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(toggleCart()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
