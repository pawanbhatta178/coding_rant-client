import React, {useState} from 'react'
import OptionMenu from './OptionMenu';



const Dropdown = ({ options, defaultVal, onChange }) => {
    
    const [showOptions, setShowOptions]=useState(false);

    const resetOnChange = (e) => { 
        onChange(e.target.id);
        setShowOptions(false);
    }

    return (
        <div className="relative text-xs font-semibold cursor-pointer">
            <div className={"inline-flex space-x-2 border py-2 px-2"} onClick={() => { setShowOptions(!showOptions) }}>
                <div className=" flex-1 w-16">{options.filter(option=>option.id===defaultVal)[0]?.name }</div>
                <div className="contents">
                    <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="currentColor" className={showOptions?"rotate-90 bi bi-caret-down-fill":"bi bi-caret-down-fill"} viewBox="0 0 16 16">
                   <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                   </svg>
                 </div>
                </div>
            </div>
            {showOptions && <OptionMenu options={options.filter(option => option.id !== defaultVal)} onSelect={resetOnChange} />}
        </div>
        
    )
}

export default Dropdown
