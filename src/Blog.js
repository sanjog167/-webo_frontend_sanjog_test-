import React from 'react'
import b1 from "../src/Images/b1.png";
import b2 from "../src/Images/b2.png";
import b3 from "../src/Images/b3.png";
import b4 from "../src/Images/b4.png";
import BlogData from './BlogData';

function Blog() {
  return (
    <section className="position-relative">
    <div className="container">
      <h1 className="fw-800">Recent Blogs</h1>
      <div className="blog__Cards mt-5">
        <BlogData image={b1} title="In design active temper be uneasy. Thirty for remove plenty regard." subtitle="Best Practices" link="Read More"/>
        <BlogData image={b2} title="Partiality on or continuing particular principles as. " subtitle="Best Practices"/>
        <BlogData image={b3} title="Village did removed enjoyed explain. " subtitle="Best Practices"/>
        <BlogData image={b4} title="Wise busy past both park when an ye no. Nay likely her length." subtitle="Best Practices"/>


      </div>
    </div>
  </section>
  )
}

export default Blog