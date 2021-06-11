import React from 'react'

function ContactSection() {
    return (
        <>
                <section className='contact py-5 '>
                       <div className='container-lg py-4'>
                                    <div className='row justify-content-center'>
                                             <div className='col-lg-8 text-center'>
                                                     <h2 className=' fw-bold mb-5'>Contact Me</h2> 
                                                    
                                             </div>
                                    </div>

                                    <div className='row'>
                                             <div className='col-md-4'>
                                                         <div className='contact-item d-flex mb-3'>
                                                                  <div className='icon fs-4 text-danger'>
                                                                            <i className='fas fa-envelope'></i>
                                                                  </div>

                                                                  <div className='text ms-3'>
                                                                              <h3 className='fs-5'>Email</h3>
                                                                              <p className='text-muted '>infoani7@gmail.com</p>
                                                                  </div>
                                                         </div>


                                                         <div className='contact-item d-flex mb-3'>
                                                                  <div className='icon fs-4 text-danger'>
                                                                            <i className='fas fa-phone'></i>
                                                                  </div>

                                                                  <div className='text ms-3'>
                                                                              <h3 className='fs-5'>Phone</h3>
                                                                              <p className='text-muted m-0'>+91 9686733974</p>
                                                                  </div>
                                                         </div>


                                                         <div className='contact-item d-flex mb-3'>
                                                                  <div className='icon fs-4 text-danger'>
                                                                            <i className='fas fa-map-marker-alt'></i>
                                                                  </div>

                                                                  <div className='text ms-3'>
                                                                              <h3 className='fs-5'>Visit Office</h3>
                                                                              <p className='text-muted m-0'>BTM Layout 2nd stage bangalore - 560064</p>
                                                                  </div>
                                                         </div>
                                             </div>



                                             <div className='col-md-8'>
                                                         <div className='contact-form'>
                                                                  <form>
                                                                         <div className='row'>
                                                                                 <div className='col-lg-6 col-md-6  mb-4'>
                                                                                         <input type='text' placeholder='Enter Your Name..' className='form-control form-control-lg fs-6 border-0'/>
                                                                                 </div>

                                                                                 <div className='col-lg-6 col-md-6  mb-4'>
                                                                                         <input type='email' placeholder='Enter Your Mail..' className='form-control form-control-lg fs-6 border-0'/>
                                                                                 </div>
                                                                         </div>

                                                                         <div className='row'>
                                                                                <div className='col-lg-12 mb-4'>
                                                                                         <input type='text' placeholder='Enter Your Subject..' className='form-control form-control-lg fs-6 border-0'/>
                                                                                </div>
                                                                         </div>


                                                                         <div className='row'>
                                                                                <div className='col-lg-12 mb-4'>
                                                                                         <textarea rows='5' placeholder='Enter Your Details here..' className='form-control form-control-lg fs-6 border-0' style={{resize:"none"}}/>
                                                                                </div>
                                                                         </div>


                                                                         <div className='row'>
                                                                                <div className='col-lg-12'>
                                                                                         <button className='btn btn-outline-danger px-3'>Send Message</button>
                                                                                </div>
                                                                         </div>
                                                                  </form>
                                                         </div>
                                            </div>
                                    </div>
                        </div>

                 </section>
        </>
    )
}

export default ContactSection
