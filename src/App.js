import React, { useContext, useEffect, useState } from 'react'
import Search from './components/Search'
import SearchDisplay from './components/SearchDisplay'
import CustomerState from './context/customerContext/CustomerState'
import fetchData from './fetchData'

const App = () => {
   

  return (
    <CustomerState>

        <>
        <Search/>
        <SearchDisplay />
        </>

    </CustomerState>
  )
}

export default App