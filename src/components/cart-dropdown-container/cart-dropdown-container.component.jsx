import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems } from 'redux/cart/cart.selectors'
import { hideCart as onHideCart } from 'redux/cart/cart.actions'

import CardDropdown from '../cart-dropdown/cart-dropdown.component'

const CartDropdownContainer = ({ cartItems, dispatch, history }) => {
	const hideCart = () => {
		if (history.location.pathname === '/checkout') {
			dispatch(onHideCart())
			return
		}
		dispatch(onHideCart())
		history.push('/checkout')
	}
	const props = { cartItems, hideCart }
	return <CardDropdown {...props} />
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdownContainer))
