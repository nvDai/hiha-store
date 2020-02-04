import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CartItem } from '../components/cart-item/cart-item.component'

describe('CartItem', () => {
	it('should render without crashing', () => {
		const props = {
			item: {
				imageUrl: '',
				price: '',
				name: '',
				quantity: '',
			},
		}
		const wrapper = shallow(<CartItem {...props} />)

		expect(toJson(wrapper)).toMatchSnapshot()
	})
})
