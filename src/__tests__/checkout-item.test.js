import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CheckoutItem } from '../components/checkout-item/checkout-item.component'

describe('CheckoutItem', () => {
	let wrapper, props
	beforeEach(() => {
		props = {
			item: {
				id: '1',
				name: 'T shirt',
				imageUrl: 'image.jpeg',
				price: 0,
				quantity: 0,
			},
			clearItemFromCart: jest.fn(),
			addItem: jest.fn(),
			removeItem: jest.fn(),
		}
		wrapper = shallow(<CheckoutItem {...props} />)
	})

	it('should render without crashing', () => {
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('should increase quantity of item when clicked', () => {
		wrapper.find('#increase-btn').simulate('click')
		expect(props.addItem).toHaveBeenCalledTimes(1)
	})

	it('should decrease quantity of item when clicked', () => {
		wrapper.find('#decrease-btn').simulate('click')
		expect(props.removeItem).toHaveBeenCalledTimes(1)
	})

	it('should remove a item when clicked', () => {
		wrapper.find('.remove-button').simulate('click')
		expect(props.clearItemFromCart).toHaveBeenCalledTimes(1)
	})
})
