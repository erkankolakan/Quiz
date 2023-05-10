import React from 'react'
import './Dropdown.css'


const Dropdown = ({data , setdifficultyChanege} ) => {
  return (
    <div className='dropdown'>
        <select onChange={e => setdifficultyChanege(e.target.value) } name="" id="">
            {
                data.map((dt,i) => ( 
                    <option key={i} value={dt}>{dt}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown
