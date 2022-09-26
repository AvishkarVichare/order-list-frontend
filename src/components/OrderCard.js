import React from 'react'

const OrderCard = (props) => {
    const {orderID, amount, date} = props;
    // console.log(date)
    const newDate = (new Date(date)).toDateString()
    console.log(newDate)
  return (
    <div className='text-white flex gap-12 border-2 border-[#fff] m-3 p-5 w-[50%] rounded-lg'>
    <h3>Order ID: {orderID}</h3>
    <h3>Amount : Rs. {amount}</h3>
    <h4 className='ml-auto inline text-gray-400'><span className='font-bold text-gray-300'>Date : </span> {newDate}</h4>
    </div>
  )
}

export default OrderCard