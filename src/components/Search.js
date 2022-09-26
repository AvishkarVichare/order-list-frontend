import React, { useContext } from 'react'
import customerContext from '../context/customerContext/customerContext'

const Search = () => {

    const c = useContext(customerContext);
    
    const {search, setSearch} = c;

    const handleOnchage = (e)=>{
        setSearch(e.target.value)
    }
    
    console.log(search)
  return (
    <div  >
        <input className='w-[80%] block my-10 p-2 text-[22px] mx-auto text-center rounded-lg ' onChange={handleOnchage} type="text" placeholder='Search For Orders' />
        <p className='text-[15px] text-gray-400 text-center'>Search orders by Name of customer or Date,</p>
        <p className='text-[15px] text-gray-400 text-center'><span className='text-gray-200'>***year-month-date***</span> Please use this format for searching using date and Please enter full date for perfect result</p>
    </div>
  )
}

export default Search