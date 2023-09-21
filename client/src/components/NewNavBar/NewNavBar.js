import React from 'react'
import "./NewNavBar.css"

const NewNavBar = () => {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
               <p>All</p>
               <p>Mobile</p>
               <p>Bestseller</p>
               <p>Fashion</p>
               <p>Customer Services</p>
               <p>Prime</p>
               <p>Toda's deal</p>
               <p>Amazon Pay</p>
            </div>
            <div className='right_data'>
                <img src='./nav.jpg' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default NewNavBar