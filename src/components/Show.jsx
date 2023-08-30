// import React from 'react'

const Show = (props) => {
    const {users, setusers, ActiveHandler, active} = props;
    const DeleteHandler = (i) =>{
      setusers(users.filter((user, ind) =>  ind != i ? user : null))
    }
    
  return (
    <ul className="w-25 mx-auto px-0">
    {users.map((e,i)=>{
      return (<li key={i}>{e.username} | {e.skill} {active == i ? '': (<span><span onClick={()=>{ActiveHandler(i)}}>✏️</span> <span onClick={()=>{DeleteHandler(i)}}>❌</span></span>)}</li>)
    })}
  </ul>
  )
}

export default Show