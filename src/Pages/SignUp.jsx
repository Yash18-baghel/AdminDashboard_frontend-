import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";;
const SignUp = () => {

  const SignupStyle = () => {
    return <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
    .font{
      font-family: 'Lato', sans-serif;
    }
    `}</style>
  }

  const [user, Setuser] = useState({ name: '', email: '', password: '' });
  const handleChange = (e) => {
    Setuser({ ...user, [e.target.name]: e.target.value })
  }
  const nevigate = useNavigate();

  const redirect = () => {
    nevigate('/Login')
  }
  const submit = (e) => {
    e.preventDefault()
    try {
      Object.values(user).forEach((i) => {
        if (i.length < 1) {
          toast.error("Please Fill All Fields..!");
          throw 'break'
        }

      })
      axios.post('http://127.0.0.1:8000/api/register', user).then((res) => {

        console.log(res)

        if (res.data[0]) {
          console.log(res.data[0])
          localStorage.setItem('admin-info', JSON.stringify(res.data))
          nevigate('/Home');
        }
      })
        .catch((er) => {
          toast.error('Email already registered')
          console.log(er)
          throw er
        })
    }
    catch (e) {
      console.log('Please Fill All Fields');
    }


  }
  return (
    <>
      <SignupStyle />
      <ToastContainer />
      <h2 className='text-center my-5 font' style={{ fontSize: '40px' }}>Sign Up To Create Your Shop Manager</h2>
      <form className='container w-25 p-4 border my-5 rounded' >
        <div className="form-floating mb-3">
          <input type="name" name='name' className="form-control" id="floatingInput" onChange={handleChange} placeholder="name@example.com" required />
          <label htmlFor="floatingInput">Name </label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" name='email' className="form-control" id="floatingInput" onChange={handleChange} placeholder="name@example.com" required />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" name='password' className="form-control" id="floatingPassword" onChange={handleChange} placeholder="Password" required />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <button type='submit' className="btn btn-primary w-100 py-3" onClick={submit}>Sign Up</button>
        </div>
      </form >

      <div className="border container w-25 p-4 border my-5 rounded ">
        Already Have An Account? <a className="text-secondary" onClick={redirect} style={{ cursor: 'pointer' }}>Sign-in</a>
      </div>
    </>
  )
}

export default SignUp