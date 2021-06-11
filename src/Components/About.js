import React from 'react'

function About() {
    return (
        <>
               <section className='about py-5 bg-white'>
                           <div className='container-lg py-4'>
                                     <div className='row justify-content-center'>
                                              <div className='col-lg-8 '>
                                                       <div className='section-title text-center'>
                                                                <h2 className='fw-bold mb-5'>About Me</h2>
                                                       </div>
                                              </div>
                                     </div>

                                     <div className='row'>
                                              <div className='col-md-6'>
                                                       <div className='about-text'>
                                                              <h3 className='fs-4 mb-3 lead'>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.</h3>
                                                              <p className='text-muted'>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>

                                                       </div>
                                                       <div className='row text-center text-uppercase my-3'>
                                                                 <div className='col-sm-4'>
                                                                        <div className='fact-item'>
                                                                                <h4 className='fs-1 fw-bold'>100</h4>
                                                                                <p className='text-muted'>Projects Completed.</p>
                                                                        </div>
                                                                 </div>

                                                                 <div className='col-sm-4'>
                                                                        <div className='fact-item'>
                                                                                <h4 className='fs-1 fw-bold'>90</h4>
                                                                                <p className='text-muted'>Happy Clients.</p>
                                                                        </div>
                                                                 </div>

                                                                 <div className='col-sm-4'>
                                                                        <div className='fact-item'>
                                                                                <h4 className='fs-1 fw-bold'>105</h4>
                                                                                <p className='text-muted'>Projects riviews.</p>
                                                                        </div>
                                                                 </div>
                                                       </div>
                                                       
                                                       <div className='row mx-auto'>
                                                                  <div className='col-lg-12 d-flex align-items-center '>
                                                                          <button className='btn btn-danger me-5 px-3 '>Download CV</button>
                                                                          <div className='social-links'>
                                                                                  <a href='#' className='text-dark me-2'><i className='fab fa-facebook-f'></i></a>
                                                                                  <a href='#' className='text-dark me-2'><i className='fab fa-twitter'></i></a>
                                                                                  <a href='#' className='text-dark me-2'><i className='fab fa-instagram'></i></a>
                                                                                  <a href='#' className='text-dark me-2'><i className='fab fa-linkedin-in'></i></a>
                                                                          </div>
                                                                  </div>
                                                       </div>
                                              </div>
                                              <div className='col-md-6 mt-5 mt-md-0'>

                                                          <div className='skill-item mb-4'>
                                                                     <h3 className='fs-6'>HTML</h3>
                                                                     <div class="progress " style={{height:"5px"}}>
                                                                             <div class="progress-bar bg-danger" role="progressbar" style={{width:"35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                     </div>
                                                          </div>

                                                          <div className='skill-item mb-4'>
                                                                     <h3 className='fs-6'>CSS</h3>
                                                                     <div class="progress " style={{height:"5px"}}>
                                                                             <div class="progress-bar bg-danger" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                     </div>
                                                          </div>

                                                          <div className='skill-item mb-4'>
                                                                     <h3 className='fs-6'>BOOTSTRAP</h3>
                                                                     <div class="progress " style={{height:"5px"}}>
                                                                             <div class="progress-bar bg-danger" role="progressbar" style={{width:"100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                     </div>
                                                          </div>

                                                          <div className='skill-item mb-4'>
                                                                     <h3 className='fs-6'>JAVASCRIPT</h3>
                                                                     <div class="progress " style={{height:"5px"}}>
                                                                             <div class="progress-bar bg-danger" role="progressbar" style={{width:"95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                     </div>
                                                          </div>

                                                          <div className='skill-item mb-4'>
                                                                     <h3 className='fs-6'>REACT.JS</h3>
                                                                     <div class="progress " style={{height:"5px"}}>
                                                                             <div class="progress-bar bg-danger" role="progressbar" style={{width:"95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                     </div>
                                                          </div>

                                                          <div className='skill-item mb-4'>
                                                                     <h3 className='fs-6'>REDUX</h3>
                                                                     <div class="progress " style={{height:"5px"}}>
                                                                             <div class="progress-bar bg-danger" role="progressbar" style={{width:"75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                     </div>
                                                          </div>

                                                          <div className='skill-item mb-4'>
                                                                     <h3 className='fs-6'>TYPESCRIPT</h3>
                                                                     <div class="progress " style={{height:"5px"}}>
                                                                             <div class="progress-bar bg-danger" role="progressbar" style={{width:"75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                     </div>
                                                          </div>
                                                          
                                              </div>
                                     </div>
                           </div>
               </section> 
        </>
    )
}

export default About
