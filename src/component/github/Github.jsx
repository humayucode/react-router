import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const follow = useLoaderData();
    // const [follow,setfollowors] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary').then(res => res.json()).then(data => setfollowors(data))
    // },[])
  return (
    <div className=' bg-fuchsia-300 m-4 p-4 text-center text-3xl leading-tight flex justify-center flex-col gap-4 items-center '>
    <img src={follow.avatar_url} alt="avtar" className=' rounded-full  h-32' />
    My Github followors  <br /> {follow.followers}
     </div>
    
  )
}

export default Github
export const githubdata = async  () =>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}