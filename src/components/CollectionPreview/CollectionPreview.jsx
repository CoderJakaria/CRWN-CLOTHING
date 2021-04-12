import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.css';

const CollectionPreview = ({title,items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'> {title.toUpperCase()} </h1>
            <div className="preview">
                {items.filter((item,idx)=> idx < 4 ).map((item)=>{
                    return <CollectionItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default CollectionPreview
