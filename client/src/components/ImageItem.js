import React, { useEffect, useState } from 'react' // accept props and render ui based on those props
import { Link, Route, Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function ImageItem({ index, image, name, price, description }) {
  const navigate = useNavigate()
 image = image.replace('//','/')
 
  return (
    <div>
      
      <Link to={`/detail/${index}`} className='link'>
      <div className='imageItem'>
          <div style={{overflow:"hidden",}}>
            <img src={`http://localhost:5000/${image}`} alt="crypto image" />
          </div>
          <h1>{ name }</h1>
          {/* <p>{price}</p>
          <h5>{ description }</h5> */}
      </div>
      </Link>
    </div>
  )

}

export default ImageItem