import React from 'react'
import testimonials1 from "../assets/t1.jpg"
import testimonials2 from "../assets/t2.jpg"
import testimonials3 from "../assets/t3.jpg"


function Testimonial() {
    return (
        <>
            <section className='testimonials py-5  '>
                       <div className='container-lg py-4'>
                                    <div className='row justify-content-center'>
                                             <div className='col-lg-8 '>
                                                        <div className='section-title text-center'>
                                                                 <h2 className='fw-bold mb-5'>Testimonials</h2>
                                                        </div>
                                             </div>
                                    </div>

                                    <div className='row justify-content-center'>
                                           <div className='col-lg-8 col-xl-7'>
                                                 
                                                      <div className='test-item bg-white p-4 rounded shadow-sm'>
                                                             <div className='test-author-info d-flex align-items-center'>
                                                                      <img src={testimonials1} alt='error' className='img-thumbnail rounded-circle'/>
                                                                      <div className='author ms-3'>
                                                                             <h3 className='mb-1 fs-4'>Animesh Awasthi</h3>
                                                                             <p className='text-muted m-0'>Frontend Developer</p>
                                                                      </div>
                                                             </div>

                                                             <p className='text-muted mt-3'>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences</p>
                                                             <div className='rating text-warning'>
                                                                     <i className='fas fa-star'></i>
                                                                     <i className='fas fa-star'></i>
                                                                     <i className='fas fa-star'></i>
                                                                     <i className='fas fa-star'></i>
                                                                     <i className='fas fa-star'></i>
                                                             </div>
                                                      </div>       

                                           </div>
                                    </div>
                        </div>

                 </section>
        </>
    )
}

export default Testimonial
