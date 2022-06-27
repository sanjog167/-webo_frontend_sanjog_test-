import React from 'react'
import arrowright from "../src/Images/arrowright.png";

function BlogData({image,title,link,subtitle}) {
  return (
    <div className='blogCard elementHover'>
        <div className='blogCard__content p-3'>
        <p>{subtitle}</p>
        <h4 className='mt-2 mb-5 w-300 fs-26 fw-800 h-100'>{title}</h4>
        {
          link ? <p>  {link} <img src={arrowright} alt=''/></p>  : ''  
    }
        </div>
        <div className='blogCard__image'>
            <img src={image} alt="" className='w-100'/>
           </div>

    </div>
  )
}

export default BlogData