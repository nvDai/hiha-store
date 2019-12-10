import React from 'react'
import PropsTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem, toggleCart } from 'redux/cart/cart.action'
import { selectCartHidden } from 'redux/cart/cart.selectors'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem, toggleCart, hidden }) => {
	const { name, price, imageUrl } = item
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<CustomButton
				onClick={() => {
					addItem(item)
					if (hidden) {
						toggleCart()
					}
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
	toggleCart: () => dispatch(toggleCart()),
})

CollectionItem.propsTypes = {
	item: PropsTypes.object.isRequired,
	addItem: PropsTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
