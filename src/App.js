import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import { selectCurrentUser } from 'redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import './App.css'

class App extends React.Component {
	componentDidMount() {
		const { checkUserSession } = this.props
		checkUserSession()
	}
	render() {
		return (
			<div className='app'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						path='/sign-in'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
