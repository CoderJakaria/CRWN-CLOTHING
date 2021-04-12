import React, { useState } from 'react';
import './Directory.css';
import MenuItem from '../Menu-Item/MenuItem';

const Directory = () => {
    const [updt,setUpdt] = useState({
        sections : [{
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            linkUrl:'hats'
        },
        {
            title:'Jackets',
            imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
            id:2,
            linkUrl:'jacket'
        },
        {
            title:'Sneakers',
            imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
            id:3,
            linkUrl:''
        },
        {
            title:'Womens',
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            id:4,
            linkUrl:'',
            size:'large'
        },
        {
            title:'Mens',
            imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
            id:5,
            linkUrl:'',
            size:'large'
        }
    ]
    })
    return (
        <div className='directory-menu'>
            {updt.sections.map(({id, ...otherSectionProp})=>{
                return <MenuItem key={id} {...otherSectionProp}/>
            })}
        </div>
    )
}

export default Directory
