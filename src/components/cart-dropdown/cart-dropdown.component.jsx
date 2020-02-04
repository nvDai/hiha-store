import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { hideCart as onHideCart } from 'redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, hideCart }) => {
	return (
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
			<CustomButton onClick={hideCart}>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default CartDropdown
