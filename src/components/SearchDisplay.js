import React, { useContext, useEffect, useState } from 'react'
import customerContext from '../context/customerContext/customerContext'
import fetchData from '../fetchData';
import OrderCard from './OrderCard';

const SearchDisplay = () => {


    const c = useContext(customerContext);
    const { custData, setCustData, search, setSearch } = c;

    const [displayData, setdisplayData] = useState([])

    useEffect(() => {
        const fetchCustData = async () => {
            const data = await fetchData();
            setCustData(data)
        }
        fetchCustData();

        let dateChecker ;
        if (search) {
        
            dateChecker = new Date(search);
          
        }


        if (search && dateChecker == 'Invalid Date') {
            const arr = custData.filter(e => {
                return e.firstName.includes(search.trim());
            })
            let orderArr = [];
            arr.forEach(e => {
                orderArr = orderArr.concat(e.orders);
            })
            setdisplayData(orderArr);
            console.log(displayData);
        }
        else if (dateChecker != 'Invalid Date' && search.length !=0) {
            let orderArr = [];
            custData.forEach((e, index, arr) => {
                orderArr = orderArr.concat(e.orders);
            })
            // console.log("this is ",orderArr)
            const arr = orderArr.filter(e => {
                return e.date.includes(search.trim());
            })
            // console.log("this is date",arr)
            setdisplayData(arr);
        }
        else {
            setdisplayData([]);
        }


    }, [search])


    // console.log(custData)

    return (
        <div className='flex flex-col items-center'>
            {displayData.length !== 0 ? displayData.map(e => {
                return (
                    <OrderCard key={e.orderID} orderID={e.orderID} amount={e.amount} date={e.date} />
                )
            }) : <h1 className='text-[3rem] font-bold text-gray-500 mt-[100px] '>Search for orders</h1>}
        </div>
    )
}

export default SearchDisplay