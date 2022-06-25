import React from 'react'
import Button from '@mui/material/Button';

function Disccover() {
  return (
    <section className='discoverSection'>
        <div className='container position-relative'>
            <div className='bg-blue text-white py-150 border-20 position-relative'>
                <h3 className='w-760 m-auto text-center mb-5 position-relative'>Discover a better way to manage spendings</h3>
                <Button variant="contained" className='btn-orange'>Get Started</Button>
            </div>
        </div>
    </section>
  )
}

export default Disccover