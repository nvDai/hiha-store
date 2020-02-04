import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import CartDropdown from '../components/cart-dropdown/cart-dropdown.component'

describe('CartDropdown', () => {
	let wrapper, mockProps

	beforeEach(() => {
		mockProps = {
			cartItems: [],
			hideCart: jest.fn(),
		}
		wrapper = shallow(<CartDropdown {...mockProps} />)
	})

	it('should render without crashing', () => {
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('should render CartItem list', () => {
		mockProps = {
			...mockProps,
			cartItems: [
				{
					id: 1,
					imageUrl:
						'https://ik.imagekit.io/fireman35/images/ZYW3VTp/brown-brim.png',
					name: 'Brown Brim',
					price: 25,
					quantity: 2,
				},
				{
					id: 2,
					imageUrl:
						'https://ik.imagekit.io/fireman35/images/ypkgK0X/blue-beanie.png',
					name: 'Blue Beanie',
					price: 18,
					quantity: 2,
				},
			],
		}
		wrapper = shallow(<CartDropdown {...mockProps} />)
		expect(wrapper.find('.cart-items').props().children.length).toEqual(2)
	})

	it('should render empty message', () => {
		expect(wrapper.find('.empty-message').length).toEqual(1)
		// expect(wrapper1.find('CustomButton').length).toEqual(1)
	})

	describe('CustomButton', () => {
		it('should hide cart when click', () => {
			wrapper.find('CustomButton').simulate('click')
			expect(mockProps.hideCart).toHaveBeenCalledTimes(1)
		})
	})
})
