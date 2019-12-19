import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import WithSpinner from 'components/with-spinner/with-spinner.components'
import Spinner from 'components/spinner/spinner.component'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import {
	selectCollectionFetching,
	selectIsCollectionLoaded,
} from '../../redux/shop/shop.selector'

const CollectionOverview = lazy(() =>
	import('components/collections-overview/collections-overview.component')
)
const CollectionPage = lazy(() => import('../collection/collection.component'))
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({
	match,
	isCollectionFetching,
	isCollectionLoaded,
	fetchCollectionsStart,
}) => {
	useEffect(() => {
		fetchCollectionsStart()
	}, [fetchCollectionsStart])
	return (
		<div className='shope-page'>
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionLoaded}
							{...props}
						/>
					)}
				/>
			</Suspense>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectCollectionFetching,
	isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
