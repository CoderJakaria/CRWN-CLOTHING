import React from 'react'
import { Route, Switch } from 'react-router';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/Collection';

const Shop = ({match}) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default Shop
