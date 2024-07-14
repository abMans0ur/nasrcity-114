import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { aquafinaSlice } from './aquafinaSlice'

const AquaFina = () => {
    const counter=useSelector(state=>state.aquafina.numberOfItems)
    const dispatch = useDispatch()
    return (
    <>
    <h1>Number of bottles:{counter}</h1>
    <button onClick={()=>dispatch(aquafinaSlice.actions.order())} >Order</button>
    <button onClick={()=>dispatch(aquafinaSlice.actions.reStock())}>ReStock</button>
    </>
  )
}

export default AquaFina
