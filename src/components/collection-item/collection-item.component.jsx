import React from 'react'
import PropsTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import LazyImage from '../lazy-image/lazy-image.component'

import { addItem } from 'redux/cart/cart.actions'
import { selectCartHidden } from 'redux/cart/cart.selectors'

import './collection-item.styles.scss'

export const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item
	return (
		<div className='collection-item'>
			<LazyImage
				placeHolder={`${imageUrl}?tr=bl-30,q-50`}
				src={imageUrl}
				alt={name}
				className='image'
			/>
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
