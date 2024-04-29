import React from 'react'
import ParentComponent from './prop'

function Child(props) {
const{tt}=props
  return (
    <>
    <div>child</div>
    <h1>{tt}</h1>
    <ParentComponent pp={"hii"}></ParentComponent>
    </>
  )
}

export default Child