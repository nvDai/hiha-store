import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
	[selectShop],
	selectShop => selectShop.collections
)

export const selectCollectionForPreview = createSelector(
	[selectShopCollections],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam =>
	createSelector([selectShopCollections], collections => {
		return collections ? collections[collectionUrlParam] : null
	})

export const selectCollectionFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
	[selectShop],
	shop => !!shop.collections
)
