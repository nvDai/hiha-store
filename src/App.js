import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

import { selectCurrentUser } from 'redux/user/user.selectors'
import { selectCartHidden } from './redux/cart/cart.selectors'
import { checkUserSession } from './redux/user/user.actions'
import { hideCart } from './redux/cart/cart.actions'

import './App.scss'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'),
)
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const ContactPage = lazy(() => import('./pages/contact/contact.component'))

class App extends React.Component {
  componentDidMount() {
    this.props.checkUserSession()
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged()
    }
  }
  onRouteChanged() {
    const { cartHidden, hideCart } = this.props
    if (!cartHidden) {
      hideCart()
    }
  }
  render() {
    const { currentUser } = this.props
    return (
      <div className='app'>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/checkout' component={CheckoutPage} />
              <Route
                path='/sign-in'
                render={() =>
                  currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  hideCart: () => dispatch(hideCart()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
