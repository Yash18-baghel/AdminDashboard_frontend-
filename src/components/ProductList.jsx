import axios from 'axios'
import React, { useEffect } from 'react'
import * as MdIcon from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProductList = (props) => {
    const products = props.products
    
    const navigate = useNavigate()
    const Delete = ()=>{
        
        console.log(products.id)
        
        axios.delete("http://127.0.0.1:8000/api/product/"+products.id)
        .then((res)=>{
            console.log(res)
            props.ondelete()
            // navigate('/Home')
        })
        .catch((er)=>{
            console.log(er)
        })
    }



    return (    
        <div className="row mb-5 d-laptop pt-3 pb-2 px-1 d-flex flex-wrap popin bg-light m-auto w-100 rounded-3">
            <div className="col-1 col-md-2 col-sm-2 col-lg-1 m-auto pe-4">
                <h3 className="my-2 text-end">{props.index + 1}</h3>
            </div>
            <div className="col-2 col-md-2 col-sm-2 m-auto">
                <h5 className="my-2 text-center"><span className='pe-2'><img style={{ width: "50px", height: "50px" }} src={`http://127.0.0.1:8000/${products.product_pic}`} alt="img" /></span> {products.product_name}</h5>
            </div>
            <div className="col-2 col-md-2 col-sm-2 m-auto">
                <h5 className="my-2 text-center">{products.quantity}</h5>
            </div>
            <div className="col-2 col-md-2 col-sm-2 m-auto">
                <h5 className="my-2 text-center">{products.sold}</h5>
            </div>
            <div className="col-3 col-md-2 col-sm-2 col-lg-3 ">
                <div className="my-2 text-center">
                    <img style={{ height: '20px', width: '25px',cursor:'pointer' }} onClick={()=>   navigate(`/Edit/${products.id}`)} src='Images/icons8-edit-48.png'></img>
                    <button className="btn btn-dan me-3 m-2 " onClick={Delete}><span><MdIcon.MdDelete /></span></button>
                </div>
            </div>


        </div>
    )
}

export default ProductList