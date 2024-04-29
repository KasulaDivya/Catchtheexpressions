import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
const [curr,setcurr]=useState([])
    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then((result)=>result.json())
     .then((res)=>setcurr(res))
    },[])
  return (
    <div>
            <h1>Products</h1>
      <ul>
        {curr.map(product => (
          <li key={product.id}>
            <Link to={`/about/${product.id}`}>{product.id}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Home