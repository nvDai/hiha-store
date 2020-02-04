import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CollectionOverview } from '../components/collections-overview/collections-overview.component'

describe('CollectionOverview', () => {
	it('should render without crashing', () => {
		const props = {
			collections: [
				{
					id: 10,
					imageUrl:
						'https://ik.imagekit.io/fireman35/images/0s3pdnc/adidas-nmd.png',
					name: 'Adidas NMD',
					price: 220,
				},
			],
		}
		const wrapper = shallow(<CollectionOverview {...props} />)

		expect(toJson(wrapper)).toMatchSnapshot()
	})
})
