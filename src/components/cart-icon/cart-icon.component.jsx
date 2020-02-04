import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCart } from 'redux/cart/cart.actions'
import { selectCartItemCount } from 'redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'

import './cart-icon.styles.scss'

export const CartIcon = ({ toggleCart, itemCount }) => (
	<div className='cart-icon' onClick={toggleCart}>
		<ShoppingIcon className='shopping-icon'></ShoppingIcon>
		<span className='item-count'>{itemCount}</span>
	</div>
)

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemCount,
})

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(toggleCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
