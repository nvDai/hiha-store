import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCollectionForPreview } from 'redux/shop/shop.selector'

import CollectionPreview from 'components/collection-preview/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionOverview = ({ collections }) => {
	return (
		<div className='collection-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)
