import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products } from './ProductData';
import { Divider } from "@mui/material"
import { NavLink } from "react-router-dom"
import "./Slide.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Slide = ({title,products}) => {
  return (
    <div className='products_section'>
        <div className='products_deal'>
            <h3>{title}</h3>
            <button className='view_btn'>View All</button>
        </div>
        <Divider />

        <Carousel
         responsive={responsive}
         infinite={true}
         draggable={false}  
         swipeable={true}
         showDots={false}
         centerMode={true}
         autoPlay={true}
         autoPlaySpeed={4000}
         keyBoardControl={true}
         dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
         {
            products.map((elem)=> {
                return(
                    <>
                    <NavLink to={`/getproductsone/${elem.id}`}>
                      <div className='products_items' >
                          <div className='product_img'>
                              <img src={elem.url} alt='products_item'/>
                              <p className='products_name'>{elem.title.shortTitle}</p>
                              <p className='products_offer'>{elem.discount}</p>
                              <p className='products_explore'>{elem.tagline}</p>
                          </div>
                      </div>
                    </NavLink>
                    </>
                )
            })
         }
        </Carousel>
    </div>
  )
}

export default Slide