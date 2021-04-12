import React from 'react';
import { withRouter } from 'react-router';
import './MenuItem.css';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => {
    return (
            <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>

            <div className='backgroundImage' style={{
              backgroundImage:`url(${imageUrl})`
            }}/>

              <div className="content">
                <h1 className='title'> {title.toUpperCase()} </h1>
                <span className='subtitle'> SHOP </span>
              </div>
            </div>
    )
}

export default withRouter(MenuItem)
