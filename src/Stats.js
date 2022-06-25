import React from 'react'
import StatsData from './StatsData'
import s1 from "../src/Images/s1.png";
import s22 from "../src/Images/s22.png";
import s3 from "../src/Images/s3.png";

export default function Stats() {
  return (
    <section className='bg-blue py-60 text-white statsSection position-relative'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 m-0auto position-relative'>
                    <p className='w-145 lh-29 fs-19'>We speak with
our powerfull
statistics</p>
                </div>
                <div className='col-lg-10 ps-5'>
                    <div className='row'>
                        <StatsData title="1M" image={s1} description="Active Users"/>
                        <StatsData title="30K+" image={s22} description="5-Stars Reviews"/>
                        <StatsData title="$252M" image={s3} description="Transactions"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
