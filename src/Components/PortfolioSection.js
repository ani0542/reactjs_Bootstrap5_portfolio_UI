import React from 'react'
import portfolio1 from "../assets/p1.jpg"
import portfolio2 from "../assets/p2.jpg"
import portfolio3 from "../assets/p3.jpg"
import portfolio4 from "../assets/p4.jpg"
import portfolio5 from "../assets/p5.jpg"
import portfolio6 from "../assets/p6.jpg"


function PortfolioSection() {
    return (
        <>
                <section className='services py-5'>
                      <div className='container-lg py-4'>
                                    <div className='row justify-content-center'>
                                              <div className='col-lg-8 '>
                                                       <div className='section-title text-center'>
                                                                <h2 className='fw-bold mb-5'>Latest Works</h2>
                                                       </div>
                                              </div>
                                     </div>

                                     <div className='row'>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio1} alt='error' className='w-100 img-thumbnail'/>
                                                             <h3 className='text-capitalize my-2 fs-4'>Team Section</h3>
                                                             <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio2} alt='error' className='w-100 img-thumbnail'/>
                                                             <h3 className='text-capitalize my-2 fs-4'>Team Section</h3>
                                                             <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio3} alt='error' className='w-100 img-thumbnail'/>
                                                             <h3 className='text-capitalize my-2 fs-4'>Team Section</h3>
                                                             <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio4} alt='error' className='w-100 img-thumbnail'/>
                                                             <h3 className='text-capitalize my-2 fs-4'>Team Section</h3>
                                                             <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio5} alt='error' className='w-100 img-thumbnail'/>
                                                             <h3 className='text-capitalize my-2 fs-4'>Team Section</h3>
                                                             <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio6} alt='error' className='w-100 img-thumbnail'/>
                                                             <h3 className='text-capitalize my-2 fs-4'>Team Section</h3>
                                                             <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p>
                                                       </div> 
                                               </div>
                                     </div>
                     </div>
                </section> 
        </>
    )
}

export default PortfolioSection
