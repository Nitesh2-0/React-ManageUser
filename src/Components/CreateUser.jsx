import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const CreateUser = ({setUsers, users}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const submitHandler = (event) => {
    event.preventDefault();
    if(!(name && email && number)) return;
    const newUser = {name:name, email:email, number:number, id:nanoid()}
    const updatedUser = [...users,newUser]
    setUsers(updatedUser)
    localStorage.setItem('Users' , JSON.stringify(updatedUser))
    setEmail('')
    setName('')
    setNumber('')
  }
  return (
    <div className='w-full bg-gray-700 h-auto absolute bottom-0 p-5'>
      <form onSubmit={submitHandler} >
        <input onChange={(e) => setName(e.target.value)}  type="text" placeholder='Enter Your Name' className='w-full p-2 rounded bg-gray-900 my-2' value={name}/>
        <br />
        <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder='Enter professional Email ' className='w-full p-2 rounded bg-gray-900 my-2' value={email}/>
        <br />
        <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Enter Phone Number' className='w-full p-2 rounded bg-gray-900 my-2' value={number}/>
        <br />
        <button type='submit' className='w-full p-2 rounded bg-blue-700 my-2'>Add New</button>
      </form>
    </div>
  )
}

export default CreateUser
