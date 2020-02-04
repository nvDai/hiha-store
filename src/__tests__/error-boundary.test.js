import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ErrorBoundary from '../components/error-boundary/error-boundary.component'

describe('ErrorBoundary', () => {
	it('should render without crashing', () => {
		// const state = {
		// 	hasError: false,
		// }
		// const wrapper = shallow(<ErrorBoundary />)
		// console.log(wrapper.instance().getDerivedStateFromError())
		// expect(toJson(wrapper)).toMatchSnapshot()
	})
})
