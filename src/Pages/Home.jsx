import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import * as FaIcon from 'react-icons/fa'
import * as BiIcon from 'react-icons/bi'
import * as MdIcon from 'react-icons/md'
import ProductList from '../components/ProductList'
import AllProductDetails from '../components/AllProductDetails'
import axios, { Axios } from 'axios'
import { useSelector } from 'react-redux'



const TabStyle = () => {
  return (
    <style>
      {`
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
              .popin{
                  font-family: 'Poppins', sans-serif;
              }
              .card-icon{
                  color:rgba(52, 197, 52, 0.767);
                  font-size:30px;
              }
              .card-amount{
                  font-size:30px;
              }
              .table-main{
                  width:100%;
              }
              .item-tab{
                  padding:10px 5px;
                  margin:10px 0px;
                  height:60px;
                  display:block;
                  margin-bottom:55px;
              }

              .d-show{
                  display:none !important;

              }
              .d-phone{
                  display:none;
              }
              @media screen and (max-width:980px){
                  .d-laptop{
                      // display:none;    
                  }
                  .d-phone{
                      display:flex;
                      flex-wrap:wrap;
                  }
                  .ddf{
                      display:flex;
                      justify-content:center;
                  }
              }
              @media screen and (max-width:780px){
                  .d-show{
                      display:flex !important;
                  }
              
                  .main-card{
                      height:150px;
                      display:flex;
                      justify-content:center;
                      align-items:center;
                      flex-direction:column;
                  }
                  .card-amount{
                      font-size:20px;
                      font-weight:600;
                  }
                  .d-laptop{
                      // display:none;
                  }
                  .d-phone{
                      display:flex;
                      flex-wrap:wrap;
                  }
                  
              }
              .item-tab tr{
                  margin-bottom:55px;
              }
              .main-r{
                  align-items:center;

              }
              .container-fluid-main{
                  width:90%;
              }
              .br-one{
                  display:flex;
                  align-items:center;
              }
              .btn-succ{
                  background-color: rgba(52, 197, 52, 0.767);
                  color:white;
              }
              .btn-dan{
                  background-color: white;
                  font-size:20px;
                  color:#f7575c;
              }
              .btn-dan:hover{
                  color:#f7575c;
              }
              h2{
                  font-size:20px;
                  font-weight:600;
                  font-family: 'Poppins', sans-serif;
              }
              h5{
                  font-size:15px;
                  font-weight:500;
              }
              h3{
                  font-size:15px;
                  font-weight:600;
              }
              .w-n{
                  font-size:17px;
                  font-weight:600;
              }
              .w-dd{
                  width:98%;
              }
          `}
    </style>
  )
}
const Home = () => {

  const [products, setProducts] = useState([])
  const [product_delete, setProduct_delete] = useState(false)
  const [data, setData] = useState({})


  useEffect(() => {

    let count = 0;
    let quantity = 0;
    let total = 0;
    let sold = 0;
    let admin_id = JSON.parse(localStorage.getItem('admin-info')).admin_id;
    admin_id = String(admin_id)
    axios.get(`http://127.0.0.1:8000/api/AllProductdetails/${admin_id}`)
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
        res.data.map((product) => {
          sold += product.sold
          quantity += product.quantity
          total += product.total
          count++
        })
        let proddata = { sold, quantity, total, count }
        setData(proddata)
        // console.log(res.data)
      })
      .then(() => {
        // console.log(products)
      })
      .catch((er) => {
        console.log(er)
      })
  }, [product_delete])
  const ondeletepropduct = () => {
    if (product_delete) {
      setProduct_delete(false)
    } else {
      setProduct_delete(true)
    }
  }
  let prod = useSelector((state) => state.products.data);
  useEffect(() => {
    if(prod!=null)
    setProducts(prod)
  }, [prod])

  return (

    <div>
      <Navbar />

      <div className="container-fluid-main m-auto my-5 popin">
        <AllProductDetails data={data} />

        <form className="d-flex m-auto pt-5  d-show">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn text-white border colr" type="submit">Search</button>
        </form>

        <div className={`container mt-5 mb-3 d-laptop`}>
          <div className="row d-laptop">
            <div className="col-2 col-md-2 col-sm-2 col-lg-2">
              <h2 style={{ fontSize: '15px' }} className="my-2 text-center">No</h2>
            </div>
            <div className="col-3 col-md-2 col-sm-2 col-lg-2">
              <h2 style={{ fontSize: '15px' }} className="my-2 text-center">Product Name</h2>
            </div>
            <div className="col-3 col-md-2 col-sm-2 col-lg-2">
              <h2 style={{ fontSize: '15px' }} className="my-2 text-end ">Quantity</h2>
            </div>
            <div className="col-2 col-md-2 col-sm-2 col-lg-2">
              <h2 style={{ fontSize: '15px' }} className="my-2 text-end">Sold</h2>
            </div>
            <div className="col-1 col-md-2 col-sm-2 col-lg-3">
              <h2 style={{ fontSize: '15px' }} className="my-2 text-end">Action</h2>
            </div>
          </div>
        </div>

        <div className={`d-laptop`}>
          {console.log(products)}
          {products.map((user, index) => <ProductList index={index} ondelete={ondeletepropduct} products={user} />)}
        </div>
      </div>
      <TabStyle />
    </div>
  )
}

export default Home