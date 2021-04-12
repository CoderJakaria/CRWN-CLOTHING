import React, { useState } from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import ShopData from './ShopData';

const Shop = (props) => {
    const [state,setState] = useState({
        collections:  ShopData
    });

    const {collections} = state
    return (
        <div className='shop-page'>
            {collections.map(({id, ...otherCollectionProps})=>{
              return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </div>
    )
}

export default Shop
