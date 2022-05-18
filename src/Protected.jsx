import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate()
    let Cmp = props.Cmp;
        useEffect(()=>{
            if(!localStorage.getItem('admin-info'))
            navigate('/')
        },[])
  return (
    <>
        <Cmp/>
    </>
  )
}

export default Protected