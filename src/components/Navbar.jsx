import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [name,setName] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const search = (e)=>{
        e.preventDefault();
        axios.get("http://127.0.0.1:8000/api/search_products?name="+name).then((res)=>{
            dispatch({ type: 'products', data: res.data })
            // console.log(res.data)
        })
        // console.log(name)
    } 
    
    const gotocreate = () => {
        navigate('/AddProduct')
    }
    
    const Logout = () =>{
        localStorage.removeItem('admin-info')
        navigate('/')
    }

    const gotoHome =()=>{
        navigate('/Home')
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <a className="navbar-brand" onClick={gotoHome} href="#"><img  classNameName='px-5' src="Images/icons8-house-48.png" alt="Home" /></a>

            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
 
                <form className="form-inline my-2 my-lg-0 d-flex ">
                    <input className="form-control mr-sm-2 mx-2" type="search" onChange={(e)=>setName(e.target.value)} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={search} type="submit">Search</button>
                </form>
            </div>

            <div className='d-flex justify-content-around'>
                <button className={location.pathname!='/AddProduct'?"btn btn-success mx-2 ":"d-none"} onClick={gotocreate}>Add Product</button>
                <button className="btn btn-success mx-2 "onClick={Logout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar