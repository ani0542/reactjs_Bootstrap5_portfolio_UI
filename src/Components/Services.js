import React from 'react'

function Services() {
    return (
        <>
                <section className='services py-5'>
                      <div className='container-lg py-4'>
                                    <div className='row justify-content-center'>
                                              <div className='col-lg-8 '>
                                                       <div className='section-title text-center'>
                                                                <h2 className='fw-bold mb-5'>Services</h2>
                                                       </div>
                                              </div>
                                     </div>

                                     <div className='row text-center'>
                                                    <div className='col-md-6 col-lg-4 mb-4'>
                                                            <div className='service-item shadow-sm p-4 rounded bg-white'>
                                                                    <div className='icon fs-2 text-danger my-3'>
                                                                              <i className='fas fa-code'></i>
                                                                    </div>
                                                                    <h3 className='fs-5 py-2'> Web Development</h3>
                                                                    <p className='text-muted'>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.</p>

                                                            </div>
                                                    </div>

                                                    <div className='col-md-6 col-lg-4 mb-4'>
                                                            <div className='service-item shadow-sm p-4 rounded bg-white'>
                                                                    <div className='icon fs-2 text-danger my-3'>
                                                                              <i className='fas fa-lightbulb'></i>
                                                                    </div>
                                                                    <h3 className='fs-5 py-2'> Creative Design</h3>
                                                                    <p className='text-muted'>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.</p>

                                                            </div>
                                                    </div>


                                                    <div className='col-md-6 col-lg-4 mb-4'>
                                                            <div className='service-item shadow-sm p-4 rounded bg-white'>
                                                                    <div className='icon fs-2 text-danger my-3'>
                                                                              <i className='fas fa-image'></i>
                                                                    </div>
                                                                    <h3 className='fs-5 py-2'> PhotoShop</h3>
                                                                    <p className='text-muted'>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.</p>

                                                            </div>
                                                    </div>

                                                    
                                     </div>
                      </div>
                </section>
        </>
    )
}

export default Services
