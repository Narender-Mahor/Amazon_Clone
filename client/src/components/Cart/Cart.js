import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { Divider } from '@mui/material'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const {id} = useParams("")
    // console.log(id);

    const [indData, setindData] = useState([]);

    const getinData = async()=> {
        const res = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        
        const data = await res.json();
        // console.log(data);

        if(res.status !== 201){
            console.log("no data found");
        }else{
            console.log("get Data");
            setindData(data)
        }

    }

    useEffect(()=> {
        getinData();
    },[id])

    //add cart function

    const addtocart = async(id)=> {
        const checkres = await fetch(`/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                indData
            }),
            credentials:"include"
        });

        const data1 = await checkres.json();
        console.log(data1 + "frontend data");

        if (checkres.status === 401 || !data1){
            console.log("user invalid")
            alert("user invalid")

        }else{
            alert("data add in your cart")
        }
    }




  return (
    <div className='cart_section'>
        { indData && Object.keys(indData).length &&
        <div className='cart_container'>
            <div className='left_cart'>
                <img src={indData.detailUrl} alt=''/>
                <div className='cart_btn'>
                    <button className='cart_btn1' onClick={()=> addtocart(indData.id)}>Add to Cart</button>
                    <button className='cart_btn2'>Buy Now</button>
                </div>
            </div>
            <div className='right_cart'>
                
                <h3>{indData.title.shortTitle}</h3>
                <h4>{indData.title.longTitle}</h4>  
                <Divider/>
                <p className='mrp'>M.R.P : ₹{indData.price.mrp}</p>
                <p>{indData.tagline}: <span style={{color: "#b12704"}}>₹{indData.price.cost}.00</span></p>
                <p>You Save: <span style={{color: "#b12704"}}>₹{indData.price.mrp - indData.price.cost} ({indData.price.discount})</span></p>

                <div className='discount_box'>
                    <h5>Discount : <span style={{color: "#111"}}>{indData.discount}</span></h5>
                    <h4>Free Delivery: <span style={{color: "#111", fontWeight: 600}}>Aug 12 - 2023</span> Details</h4>
                    <p>Fastest delivery <span style={{color: "#111", fontWeight: 600}}>Tommorow 11AM</span></p>
                </div>
                <p className='description'>
                    About the item: <span style={{color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: .4}}>{indData.description}</span>
                </p>
            </div>
        </div>
        }
    </div>
  )
}

export default Cart