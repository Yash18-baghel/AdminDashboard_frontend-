import React, { useEffect, useState } from 'react'

// import Navbar from '../components/Navbar'
import * as FaIcon from 'react-icons/fa'
import * as BiIcon from 'react-icons/bi'
import * as MdIcon from 'react-icons/md'
import axios from 'axios'



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
const AllProductDetails = (props) => {

    return (
        <div className="row">
            <TabStyle />
            <div className="col-6 col-md-3 mb-3">
                <div className="shadow p-3 bg-white rounded text-center">
                    <div className="card-body main-card">
                        <div className="card-icon mb-3"><FaIcon.FaShoppingBag /></div>
                        <h5 className="card-title">Total Product</h5>
                        <p className="card-amount">{props.data.count}</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <div className="shadow p-3 bg-white rounded text-center">
                    <div className="card-body main-card">
                        <div className="card-icon  mb-3"><FaIcon.FaStore /></div>
                        <h5 className="card-title">Quantity</h5>
                        <p className="card-amount">{props.data.quantity}</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <div className="shadow p-3 bg-white rounded text-center">
                    <div className="card-body main-card">
                        <div className="card-icon  mb-3"><FaIcon.FaShoppingCart /></div>
                        <h5 className="card-title">Sold</h5>
                        <p className="card-amount">{props.data.sold}</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <div className="shadow p-3 bg-white rounded text-center">
                    <div className="card-body main-card">
                        <div className="card-icon  mb-3"><BiIcon.BiMeteor /></div>
                        <h5 className="card-title">Total</h5>
                        <p className="card-amount">{props.data.total}</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default AllProductDetails