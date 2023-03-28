import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducer'


const Contact = () => {
    const  {count} = useSelector((state) => state)
    const dispatch = useDispatch()


  return (
    <div >
      <h1 >Count: {count}</h1>
      <button className="counter__button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="counter__button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  )
}

export default Contact