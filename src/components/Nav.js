import React from "react";


export class Nav extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand ms-4" href="#">POLO</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" id="navbar-toggle" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 0 3 12h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5zm0-4A.5.5 0 0 0 3 8h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5zm0-4A.5.5 0 0 0 3 4h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5z"/>
                  </svg>
                
              </button>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">POLO</h5>
                    <span aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x" viewBox="0 0 16 16"  class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">LAYOUT</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">FEATURES</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">ELEMENTS</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">PAGES</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">PORTFOLIO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">BLOG</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">SHOP</a>
                    </li>
                    
                      </ul>
                    </div>
                    </div>
                    </div>
                    </nav>
        )
    }
}