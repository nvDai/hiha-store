import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CollectionItem } from '../components/collection-item/collection-item.component'

let wrapper, props
beforeEach(() => {
	props = {
		addItem: jest.fn(),
		item: { name: 'Shirt', price: 0, imageUrl: 'shirt.jpg' },
	}
	wrapper = shallow(<CollectionItem {...props} />)
})
describe('CollectionItem', () => {
	it('should render without crashing', () => {
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

test('CustomButton should be clicked', () => {
	wrapper.find('CustomButton').simulate('click')
	expect(props.addItem).toHaveBeenCalledTimes(1)
})
