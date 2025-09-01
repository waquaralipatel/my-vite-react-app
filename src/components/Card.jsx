import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSCu03R-0zatpzd7rrDeabjv0yR4ZlcD28Q&s" alt="img" />
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
  )
}

export default Card
