import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const CarouselReact = () => {

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
  return (
    <div>
      
      {/* <h1>Hello CodeSandbox</h1> */}
      <h2 className='my-5 text-center text-danger '>11.11 NEW SALE 2024</h2>
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          <div>
                <img src='https://m.media-amazon.com/images/I/71XeBzXVE+L._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/71x8eJYN4JL._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/6134RpEFrXL._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/51bs6us3OfL._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/81Ogru+S3ZL._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/61yjozUB2TL._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/614ngmgsIcL._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/81LE33gFAML._AC_SY200_.jpg' height={250} width={250} />
          </div>
          <div>
                <img src='https://m.media-amazon.com/images/I/412Mx3zTTzL._AC_SY200_.jpg' height={250} width={250} />
          </div>

        </Carousel>
      </div>


    </div>
  )
}

export default CarouselReact
