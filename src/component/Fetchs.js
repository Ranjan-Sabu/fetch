import React, { useEffect, useState } from 'react'

function Fetchs() {
  const [list,setList] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/quotes')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Array.isArray(data.quotes)
      ?setList(data.quotes.slice(0,10))
      :console.log("data is not available");
    })
    .catch(error => {
      console.log("error fetching data:",error);
    })
  },[])
  return (
    <div className='hel'>
      <h1>DATA LIST</h1>
      { list.map((lists,i) => 
        <h3 key={i}>{lists.quote}</h3>
        )}
     </div>
   
  )
}
export default Fetchs;
