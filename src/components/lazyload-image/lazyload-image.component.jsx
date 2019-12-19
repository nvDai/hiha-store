import React from 'react'
import LazyLoad from 'react-lazyload'

const LazyloadImage = ({ children, ...otherProps }) => {
	return <LazyLoad {...otherProps}>{children}</LazyLoad>
}

export default LazyloadImage
