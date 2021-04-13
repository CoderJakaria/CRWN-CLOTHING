import React from 'react';
import "./CollectionOverview.css";
import { useSelector } from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shop_selectors';

const CollectionOverview = () => {
    const shopData = useSelector( state => selectCollectionForPreview(state))
    return (
        <div className="collection-overview">
            {shopData.map(({id, ...otherCollectionProps})=>{
              return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </div>
    )
}

export default CollectionOverview
