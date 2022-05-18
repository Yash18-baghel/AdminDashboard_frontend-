import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Navbar from '../components/Navbar'


const Addstyle = () => {
    return (
      <style>
        {`
            .container-add{
                width:40%;
            }
            @media screen and (max-width:700px){
                .container-add{
                    width:95%;
                }
            }
  
            `}
      </style>
    )
  } 
const Edit = () => {



    const id = useParams().id
    const [Product, setProduct] = useState({})


    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/product/${id}` ).then((res)=>{
            res.data.quantity = undefined;
            res.data.sold = undefined;     
        setProduct(res.data)
        })
    },[])

    const inputChnage = (e) => {
        setProduct({ ...Product, [e.target.name]: e.target.value })
    }

    const onFileUpload = (e) => {
        console.log(e.target.files[0])
        // const formdata = new FormData();
        // formdata.append("img", e.target.files[0])
        console.log(Product.product_pic )
        setProduct({ ...Product, ['product_pic']: e.target.files[0] })
    }
    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(Product)
        const formData = new FormData();
        const admin_info = JSON.parse(localStorage.getItem('admin-info'))
        console.log(admin_info.admin_id);
        formData.append('admin_id', admin_info.admin_id)
        console.log(Product.product_pic)
        formData.append('product_pic', Product.product_pic)
        formData.append('brand_name', Product.brand_name)
        formData.append('quantity', Product.quantity)
        formData.append('sold', Product.sold)
        formData.append('product_name', Product.product_name)
        console.log(formData)
        axios.post('http://127.0.0.1:8000/api/product/'+id, formData).then((res) => {
            console.log(res)
            // toast.success('Product Add')
            navigate('/Home');

            // if (res.data[0]) {
            //   localStorage.setItem('admin-info', JSON.stringify(res.data[1]))
            // }
        })
            .catch((er) => {
                throw er
            })
    }

    return (
        <div>
        <Navbar />
        <ToastContainer />  
        <div>
          <div className='container-add m-auto shadow-light my-5 shadow px-4 py-5 rounded'>
            <form onSubmit={e => onSubmit(e)}>
              <div className="mb-3">
                <input type="text" className="form-control" id="in1" value={Product.product_name} name='product_name'  onChange={e => inputChnage(e)} placeholder="Product Name" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="in5" value={Product.brand_name}  name='brand_name'  onChange={e => inputChnage(e)} placeholder="Enter your Brand name" />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" id="in2"   name="quantity" onChange={e => inputChnage(e)} placeholder="Quantity" />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" id="in2"  name="sold" onChange={e => inputChnage(e)} placeholder="sold" />
              </div>
              {/* <div className="mb-3">
                <input type="file" className="form-control" id="in3" name='img_url' onChange={onFileUpload} placeholder="Img_URL" />
              </div> */}
              <div className="div w-100">
                <button className="btn btn-success w-100">Add Item</button>
              </div>
  
            </form>
  
          </div>
        </div>
        <Addstyle />
      </div>
    )
}

export default Edit