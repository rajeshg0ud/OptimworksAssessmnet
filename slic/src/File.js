import React from 'react'
import { useSelector } from 'react-redux'

export default function File() {

    const value= useSelector(store=> store.slicee.items)
  return (
    <div>{value}</div>
  )
}
