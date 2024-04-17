import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className=' bg-amber-300 shadow-md p-4 text-center font-serif text-4xl'>User : {userid} </div>
  )
}

export default User