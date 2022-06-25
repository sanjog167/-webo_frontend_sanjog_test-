import React from 'react'

function BoxData({title, description, numbering, image}) {
  return (
    <div className='col-lg-4'>
    <div className='box1 position-relative' data-aos="fade-right">
        <img src={image} alt=""></img>
        <h4 className='text-center mt-4 fw-800 w-275 m-auto'>{title}</h4>
        <p className='text-center w-330 mx-auto mt-4'>{description}</p>
        <div className='box1__Numbering'>
            <span>{numbering}</span>
        </div>
    </div>
</div>
  )
}

export default BoxData