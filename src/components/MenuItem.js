import React from 'react'

const MenuItem = ({optionData,onSelect }) => {
    return (
        optionData.active?<div id={optionData.id} className="hover:bg-gray-200 px-2 py-2 cursor-pointer" onClick={(e) =>  onSelect(e) } >
            {optionData.name}
        </div > :
        <div id={optionData.id} className="px-2 py-2 cursor-not-allowed text-gray-500"  >
        {optionData.name}
        </div > 
    )
}

export default MenuItem
