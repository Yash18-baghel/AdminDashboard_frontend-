import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

  const [user, Setuser] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    Setuser({ ...user, [e.target.name]: e.target.value })

  }
  const nevigate = useNavigate();

  const redirect = () => {
    nevigate('/')
  }
  const SignupStyle = () => {
    return <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
    .font{
      font-family: 'Lato', sans-serif;
    }
    `}</style>
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
      axios.post('http://127.0.0.1:8000/api/Login', user).then((res) => {

        if (res.data[0]) {
          localStorage.setItem('admin-info', JSON.stringify(res.data[1]))
          nevigate('/Home');
        }
      })
        .catch((er) => {
          throw er
        })
    }
    catch (e) {
      console.log('Please Fill All Fields');
    }


  }
  return (
    <div>
      <SignupStyle />
      <ToastContainer />
      <h2 className='text-center my-5 font' style={{ fontSize: '40px' }}>Login To Manaege Your Shop </h2>
      <form className='container w-25 p-4 border my-5 rounded' >
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
        Don't Have An Account? <a className="text-secondary" onClick={redirect} style={{ cursor: 'pointer' }}>Sign-in</a>
      </div>
    </div >
  )
}

export default Login