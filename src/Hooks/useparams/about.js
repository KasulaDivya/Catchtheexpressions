import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'


function About() {
    const { id } = useParams()
    const [cur,setdatas]=useState([])
    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((result)=>{setdatas(result.data)})
      

  },[id])
  
  return (
    <>
    <div>About</div>
    <img src={cur.image} alt=""></img>
    </>

  )
}

export default About