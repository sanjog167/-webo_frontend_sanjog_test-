import React from 'react'

function StatsData({title,image,description}) {
  return (
    <div className='col-lg-4'>
    <div className={'stats_1'}>
        <h1 className='fs-78'>{title}</h1>
        <div className='d-flex align-items-center'>
        <img src={image} alt='' className='w-20 mt-3' /><h4 className='mt-3 ms-2'>{description}</h4>

        </div>
    </div>
</div>
  )
}

export default StatsData