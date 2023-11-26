import React, { useCallback, useEffect, useState } from 'react'
import { Employees } from './Employees';

export const Management = () => {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const newName = e => {
    setName(e.target.value);
  }

  const changePage = (newPage) =>{
    setPage(newPage);
  }
  const message = useCallback( ()=>{
    console.log("Hello there");
  }, [page]);
  
  useEffect(()=>{
    console.log("Management created");
  }, [name, page]);
  return (
    <div className='page'>
      <input type='text' placeholder='Insert your name' onChange={newName} className='inputInserName' />
      <h1>Name of the user: {name}</h1>
      <h2>List of users</h2>
      <button onClick={() => changePage(1)}>Page 1</button>
      <button onClick={() => changePage(2)}>Page 2</button>
      <Employees page={page} message={message}/>
    </div>
  )
}
