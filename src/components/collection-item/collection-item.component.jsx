import React from 'react'
import PropsTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import LazyloadImage from '../lazyload-image/lazyload-image.component'
import Placeholder from '../placeholder/placeholder.component'

import { addItem } from 'redux/cart/cart.actions'
import { selectCartHidden } from 'redux/cart/cart.selectors'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item
	return (
		<div className='collection-item'>
			<LazyloadImage
				once
				throttle={500}
				height={260}
				offset={260}
				placeholder={<Placeholder />}
			>
				<div
					className='image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
			</LazyloadImage>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<CustomButton
				onClick={() => {
					addItem(item)
				}}
			>
				Add to cart
			</CustomButton>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
})

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
})

CollectionItem.propsTypes = {
	item: PropsTypes.object.isRequired,
	addItem: PropsTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
