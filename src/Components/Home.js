import React from 'react'
import profile from "../assets/profile.png"
function Home() {
    return (
        <>
            <section className='py-5 home bg-white'>
                    <div className='container-lg'>
                            <div className='row  min-vh-100 align-items-center align-content-center'>
                                    <div className='col-md-6 col-sm-6 mt-5 mt-md-0'>
                                              <div className='home-img text-center'>
                                                      <img src={profile} className='img-fluid mw-100 ' alt='error'/>
                                              </div>
                                    </div>
                                    <div className='col-md-6 col-sm-6 order-md-first'>
                                                <div className='home-text'>
                                                        <p className='text-muted mb-1'>Hello I'm</p>
                                                        <h1 className='text-danger text-uppercase fw-bold fs-1'>Web Developer</h1>
                                                        <h2 className='fs-4'>Animesh Awasthi</h2>
                                                        <p className='text-muted mt-4'>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
                                                        <a href='#' className='px-3 btn btn-danger mt-3'>My Work</a>
                                                 </div>
                                    </div>
                            </div>
                    </div>
            </section>
        </>
    )
}

export default Home



//the webshala portfolio website using only bsap 5