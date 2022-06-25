import React from 'react'

function FeatureData({image,title,description}) {
  return (
    <div className={"Card1 text-start " + ( description == null ? 'd-flex align-items-center' : '' )}>
     {
        image ? <img src={image} alt=""></img> : ''
     }   
 
    <h5 className={" fw-800 fs-22 w-300 d-flex align-items-center " + ( image == null ? '' : 'mb-4 mt-4' )}>
      {title}
    </h5>
 
    {
          description ? <p>  {description} </p> : ''  
    }
   
  </div>
  )
}

export default FeatureData