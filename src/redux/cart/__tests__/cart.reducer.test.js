import cartActionTypes from '../cart.types'
import cartReducer from '../cart.reducer'

describe('cartReducer', () => {
	const initialState = {
		hidden: true,
		cartItems: [],
	}
	const item = {
		id: 19,
		imageUrl:
			'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
		name: 'Blue Jean Jacket',
		price: 90,
		quantity: 1,
	}

	it('should return the initial state', () => {
		expect(cartReducer(undefined, {})).toEqual(initialState)
	})

	it('should handle TOGGLE_CART_HIDDEN action', () => {
		expect(
			cartReducer(initialState, {
				type: cartActionTypes.TOGGLE_CART_HIDDEN,
			})
		).toEqual({ ...initialState, hidden: !initialState.hidden })
	})

	it('should handle HIDE_CART action', () => {
		expect(
			cartReducer(initialState, {
				type: cartActionTypes.HIDE_CART,
			})
		).toEqual({ ...initialState, hidden: true })
	})

	it('should handle ADD_ITEM action', () => {
		expect(
			cartReducer(initialState, {
				type: cartActionTypes.ADD_ITEM,
				payload: item,
			})
		).toEqual({ ...initialState, cartItems: [item] })
	})

	it('should handle REMOVE_ITEM action', () => {
		const state = {
			hidden: true,
			cartItems: [item],
		}

		expect(
			cartReducer(state, {
				type: cartActionTypes.REMOVE_ITEM,
				payload: item,
			})
		).toEqual({ ...state, cartItems: [] })
	})

	it('should handle CLEAR_ITEM_FROM_CART action', () => {
		const itemLeft = {
			id: 20,
			imageUrl:
				'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
			name: 'Blue Jean Jacket',
			price: 92,
			quantity: 4,
		}
		const state = {
			hidden: true,
			cartItems: [item, itemLeft],
		}

		expect(
			cartReducer(state, {
				type: cartActionTypes.CLEAR_ITEM_FROM_CART,
				payload: item,
			})
		).toEqual({ ...state, cartItems: [itemLeft] })
	})

	it('should handle CLEAR_CART action', () => {
		const state = {
			hidden: true,
			cartItems: [item],
		}

		expect(
			cartReducer(state, {
				type: cartActionTypes.CLEAR_CART,
				payload: item,
			})
		).toEqual({ ...state, cartItems: [] })
	})
})
