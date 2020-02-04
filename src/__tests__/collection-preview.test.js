import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CollectionPreview } from '../components/collection-preview/collection-preview.component'

describe('CollectionPreview', () => {
	it('should render without crashing', () => {
		const props = {
			title: 'CollectionPreview',
			items: [],
			match: jest.fn(),
		}
		const wrapper = shallow(<CollectionPreview {...props} />)

		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('should render CollectionItem list smaller than 5 items', () => {
		const props = {
			title: 'CollectionPreview',
			items: [
				{
					id: '1',
					name: 'T shirt 1',
					imageUrl: 'image1.jpeg',
					price: 0,
					quantity: 0,
				},
				{
					id: '2',
					name: 'T shirt 2',
					imageUrl: 'image2.jpeg',
					price: 0,
					quantity: 0,
				},
				{
					id: '3',
					name: 'T shirt 3',
					imageUrl: 'image2.jpeg',
					price: 0,
					quantity: 0,
				},
				{
					id: '4',
					name: 'T shirt 4',
					imageUrl: 'image2.jpeg',
					price: 0,
					quantity: 0,
				},
				{
					id: '5',
					name: 'T shirt 5',
					imageUrl: 'image2.jpeg',
					price: 0,
					quantity: 0,
				},
			],
			match: jest.fn(),
		}
		const wrapper = shallow(<CollectionPreview {...props} />)

		expect(wrapper.find('.preview').props().children.length).toEqual(4)
	})
})
