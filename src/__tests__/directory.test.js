import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Directory } from '../components/directory/directory.component'

describe('Directory', () => {
	it('should render without crashing', () => {
		const props = {
			sections: [
				{
					id: 1,
					imageUrl: 'https://ik.imagekit.io/fireman35/images/cvpntL1/hats.png',
					linkUrl: 'shop/hats',
					title: 'hats',
				},
				{
					id: 2,
					imageUrl:
						'https://ik.imagekit.io/fireman35/images/px2tCc3/jackets.png',
					linkUrl: 'shop/jackets',
					title: 'jackets',
				},
				{
					id: 3,
					imageUrl:
						'https://ik.imagekit.io/fireman35/images/0jqHpnp/sneakers.png',
					linkUrl: 'shop/sneakers',
					title: 'sneakers',
				},
				{
					id: 4,
					imageUrl:
						'https://ik.imagekit.io/fireman35/images/GCCdy8t/womens.png',
					linkUrl: 'shop/womens',
					size: 'large',
					title: 'womens',
				},
				{
					id: 5,
					imageUrl: 'https://ik.imagekit.io/fireman35/images/R70vBrQ/men.png',
					linkUrl: 'shop/mens',
					size: 'large',
					title: 'mens',
				},
			],
		}
		const wrapper = shallow(<Directory {...props} />)

		expect(toJson(wrapper)).toMatchSnapshot()
	})
})
