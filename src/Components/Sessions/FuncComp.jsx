import React, { useState } from 'react'

const FuncComp = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [show, setShow] = useState(false)
    // const counter=0;
    // const setCounter=(res)=>{
    //     counter=res
    // }
    const handleSubmit = () => {
        setShow(true)
    }
    return (
        <div>
            <input value={user.name} placeholder='name' onChange={(e) => setUser({ ...user,name: e.target.value })} />
            <input value={user.email} placeholder='email' onChange={(e) => setUser({ ...user,email: e.target.value })} />
            <input value={user.password} placeholder='password' onChange={(e) => setUser({ ...user,password: e.target.value })}  />
            <button onClick={handleSubmit} >Submit</button>
            <h1>
            
                name:{show && user.name}<br/>
                email:{show && user.email}<br/>
                password:{show && user.password}<br/>
            
            </h1>
        </div>
    )
}

export default FuncComp
