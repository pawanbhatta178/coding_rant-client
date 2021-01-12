import React from 'react'
import MenuItem from './MenuItem';
import './OptionMenu.css';

const OptionMenu = ({options, onSelect}) => {
    return (
        <div className="option-menu absolute top-8 border h-24 w-26 overflow-x-hidden overflow-y-scroll flex flex-col ">
            {options.map((option,i) => <MenuItem key={i} optionData={option} onSelect={onSelect}/>)}
        </div>
    )
}

export default OptionMenu;
