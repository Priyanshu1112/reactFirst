// import React from "react";

import {useState} from 'react';
import Show from './components/Show';
import Create from './components/Create';
import './global.css'

function App() {
  
  const [users, setusers] = useState([{
    username: 'John Doe',
    skill: 'Full Stack Developer'
}])

  const [active, setactive] = useState(null)
  const [username, setusername] = useState('');
  const [skill, setskill] = useState('')
  
  const ActiveHandler = (i) =>{
    setactive(i);
    setusername(users[i].username)
    setskill(users[i].skill)
  }

  return (
    <>
      <Create users={users} setusers={setusers}  active={active} setactive={setactive} username={username} setusername={setusername} skill={skill} setskill={setskill}/>
      <hr className='w-75 mx-auto'/>
     <Show users={users} setusers={setusers} ActiveHandler={ActiveHandler} active={active} setactive={setactive} username={username} setusername={setusername} skill={skill} setskill={setskill}/>
    </>
  )
}

export default App;

