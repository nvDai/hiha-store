/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { withRouter } from 'react-router-dom'
import LazyloadImage from '../lazyload-image/lazyload-image.component'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
	return (
		<div
			className={`menu-item ${size ? size : ''}`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<LazyloadImage once throttle={500} height={260} offset={260}>
				<div
					className='background-image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
			</LazyloadImage>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<p className='sub-title'>SHOP NOW</p>
			</div>
		</div>
	)
}
export default withRouter(MenuItem)
