import React from 'react';
import './Directory.css';
import MenuItem from '../Menu-Item/MenuItem';
import { useSelector } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory-selector';

const Directory = () => {

    const directory = useSelector(state=> selectDirectorySection(state))

    return (
        <div className='directory-menu'>
            {directory.map(({id, ...otherSectionProp})=>{
                return <MenuItem key={id} {...otherSectionProp}/>
            })}
        </div>
    )
}

export default Directory
