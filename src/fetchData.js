const fetchData = async()=>{
    const result = await fetch('https://orderlist-backend-production.up.railway.app/getcustomers')
    const data = await result.json();
    return data;

}

export default fetchData;