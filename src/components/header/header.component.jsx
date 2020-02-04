import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from 'assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdownContainer from '../cart-dropdown-container/cart-dropdown-container.component'
import { selectCartHidden } from 'redux/cart/cart.selectors'
import { selectCurrentUser } from 'redux/user/user.selectors'
import { signOutStart } from 'redux/user/user.actions'

import './header.styles.scss'

const Header = ({ currentUser, hidden, signOutStart }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='sign-out' onClick={signOutStart}>
					SIGN OUT
				</div>
			) : (
				<Link to='/sign-in'>SIGN IN</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdownContainer />}
	</div>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
