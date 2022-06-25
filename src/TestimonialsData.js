import React from 'react'

function TestimonialsData({description,name,image,position}) {
  return (

    <div className="testimonialBox d-flex border p-20 position-relative">
        <div className="m-auto">
            <p className="fs-18 fw-600 mt-4">{description}</p>
            <p className="mt-4">- {name}, {position}</p>
        </div>
        <div className="ms-4">
        <img src={image} alt="" className="h-300 w-200 object-cover"></img>
        </div>
    </div>

  )
}

export default TestimonialsData