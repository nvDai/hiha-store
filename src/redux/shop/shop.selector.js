import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
	[selectShop],
	selectShop => selectShop.collections
)

export const selectCollectionForPreview = createSelector(
	[selectShopCollections],
	collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
	createSelector([selectShopCollections], collections => {
		return collections[collectionUrlParam]
	})
