import cartActionTypes from '../cart.types'
import * as cartActions from '../cart.actions'

describe('cartActions', () => {
	it('should create an action to toggle cart', () => {
		const expectedAction = {
			type: cartActionTypes.TOGGLE_CART_HIDDEN,
		}

		expect(cartActions.toggleCart()).toEqual(expectedAction)
	})

	it('should create an action to hide cart', () => {
		const expectedAction = {
			type: cartActionTypes.HIDE_CART,
		}

		expect(cartActions.hideCart()).toEqual(expectedAction)
	})

	it('should create an action to add item to cart', () => {
		const item = {}
		const expectedAction = {
			type: cartActionTypes.ADD_ITEM,
			payload: item,
		}

		expect(cartActions.addItem(item)).toEqual(expectedAction)
	})

	it('should create an action to clear item from cart 1', () => {
		const item = {}
		const expectedAction = {
			type: cartActionTypes.CLEAR_ITEM_FROM_CART,
			payload: item,
		}

		expect(cartActions.clearItemFromCart(item)).toEqual(expectedAction)
	})

	it('should create an action to clear all items from cart', () => {
		const expectedAction = {
			type: cartActionTypes.CLEAR_CART,
		}

		expect(cartActions.clearCart()).toEqual(expectedAction)
	})

	it('should create an action to remove item from cart', () => {
		const item = {}
		const expectedAction = {
			type: cartActionTypes.REMOVE_ITEM,
			payload: item,
		}

		expect(cartActions.removeItem(item)).toEqual(expectedAction)
	})
})
