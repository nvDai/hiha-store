import { addItemToCart, removeItemFromCart } from '../cart.utils'

describe('cartUtils', () => {
	const cartItems = [
		{
			id: 19,
			imageUrl:
				'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
			name: 'Blue Jean Jacket',
			price: 90,
			quantity: 1,
		},
		{
			id: 20,
			imageUrl:
				'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
			name: 'Blue Jean Jacket',
			price: 90,
			quantity: 2,
		},
	]

	describe('addItemToCart', () => {
		it('should return a cart with new item when item does not exist', () => {
			const item = {
				id: 21,
				imageUrl:
					'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
				name: 'Blue Jean Jacket',
				price: 90,
				quantity: 1,
			}

			expect(addItemToCart(item, cartItems)).toEqual([...cartItems, item])
		})

		it('should return a cart with an item which its quantity increases 1 unit', () => {
			const item = {
				id: 20,
				imageUrl:
					'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
				name: 'Blue Jean Jacket',
				price: 90,
				quantity: 1,
			}

			expect(addItemToCart(item, cartItems)[1]['quantity']).toEqual(
				cartItems[1]['quantity'] + 1
			)
		})
	})

	describe('removeItemFromCart', () => {
		it('should return a cart which does not contain the item', () => {
			const item = {
				id: 20,
				imageUrl:
					'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
				name: 'Blue Jean Jacket',
				price: 90,
				quantity: 1,
			}
			const newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)

			expect(removeItemFromCart(item, cartItems)).toEqual(newCartItems)
		})

		it('should return a cart with an item which its quantity decrease 1 unit', () => {
			const item = {
				id: 20,
			}

			expect(addItemToCart(item, cartItems)[1]['quantity']).toEqual(
				cartItems[1]['quantity'] + 1
			)
		})
	})
})
