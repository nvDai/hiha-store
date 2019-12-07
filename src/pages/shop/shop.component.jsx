import React from 'react'

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import CollectionPreview from ''

class ShopPage extends React.Component {
  constructor() {
    super()
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    console.log(collections)
    return (
      <div className="shope-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={ id } { ...otherCollectionProps } />
          ))
        }
      </div>
    )
  }
}

export default ShopPage
