import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shop_selectors';
import './Collection.css';


const CollectionPage = ({match}) => {
    const {collectionId} = useParams();

    const collection = useSelector( state => selectCollection(collectionId)(state));
    

    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default CollectionPage
