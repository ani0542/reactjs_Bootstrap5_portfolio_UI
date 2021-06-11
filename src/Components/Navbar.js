import React from 'react'

function Navbar() {
    return (
        <>
                 <nav class="navbar  navbar-light bg-dark shadow-sm p-4 fixed-top">
                    <div class="container-lg">
                        <a class="navbar-brand text-danger fw-bold fs-4" href="#">Animesh</a>
                        <div class="dropdown">
                            <button class="btn btn-secondary btn-danger px-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  <i className='fas fa-bars'></i>
                            </button>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default Navbar
