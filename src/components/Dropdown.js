import React from 'react'


const data = [
    {id:"js", name:"JavaScript", more:"Some more information"},
    {id:"py", name:"Python", more:"Some more information"}
]



const handleChange = (e) => {
     console.log(e.target.value)
 }


const Dropdown = () => {
    return (
        <div>
            <select  onChange={(e) => handleChange(e)}>
            {data.map(item => {
                return <option  value={item.id} >{item.name}</option>
            })}
            </select>
        </div>
    )
}

export default Dropdown
