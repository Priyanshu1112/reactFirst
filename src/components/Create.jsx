// import React from 'react'
// import { useState } from 'react';

const Create = (props) => {
    
    const { users, setusers, username, setusername, skill, setskill, active, setactive } = props;
    const submitHandler = (e) => {
        e.preventDefault()
        const copyusers = [...users]
        copyusers.push({username, skill});
        setusers(copyusers)
  
        setusername('');
        setskill('');
    }

    const updateHandler = (e) =>{
      e.preventDefault();
      var copyUsers = [...users];
      copyUsers[active] = {username, skill};
      setusers(copyUsers);
      setusername('');
      setskill('');
      setactive(null)
    }

  return (
    <form className='form w-25 m-auto p-3 d-flex flex-column mt-3'  >
        <input className='form-control mb-3' onChange={(e)=>{          
          setusername(e.target.value);
          }} type="text" placeholder='username' value={username} />
        <input className='form-control mb-3' onChange={(e)=>{          
          setskill(e.target.value);
          }} type="text" placeholder='skill'  value={skill}/>
        {active === null ? (
          <button className='btn btn-dark' type="submit" onClick={submitHandler}>Submit</button>
        ):
        (<button className='btn btn-danger'  type="submit" onClick={updateHandler}>Update</button>)}
      </form>
  )
}

export default Create