import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import WithSpinner from '../../components/with-spinner/withSpinner';
import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/Firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/Collection';



const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const Shop = ({match, updateCollections}) => {
    const [load, setLoad] = useState({
        loading: true
    })
    let unsubscribeFromSnapshot = null;

    useEffect(()=>{
        const collectionRef = firestore.collection('collections');

       unsubscribeFromSnapshot =  collectionRef.onSnapshot(async snapshot => {
           const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap)
           setLoad({loading: false})
        })
    },[])

    const {loading} = load
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(Shop)
