import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionOverview from 'components/collections-overview/collections-overview.component'
import WithSpinner from 'components/with-spinner/with-spinner.components'
import CollectionPage from '../collection/collection.component'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import {
	selectCollectionFetching,
	selectIsCollectionLoaded,
} from '../../redux/shop/shop.selector'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	componentDidMount() {
		this.props.fetchCollectionsStartAsync()
	}
	render() {
		const { match, isCollectionFetching, isCollectionLoaded } = this.props

		return (
			<div className='shope-page'>
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
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectCollectionFetching,
	isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
