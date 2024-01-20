import React from "react";
import img1 from './images/image 5.webp'
import img2 from './images/image 6.webp'
import img3 from './images/image 7.webp'
import img4 from './images/image 8.webp'

export class Knowmore extends React.Component{
    render(){
        return(
            <section>
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center know-more">
                  <h4 class="mb-2">Know More</h4>
                  <h2>About Our Company</h2>
                  <p class="know-more-para">
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit. Proin gravida
                    nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed
                    lorem quis bibendum auctor.
                  </p>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-4 px-4 mb-4">
                  <h4 class="mb-4">We are making progress</h4>
      
                  <div class="progress-bar-container">
                    <div class="progress-title">HTML5</div>
                    <span class="progress-percent">100%</span>
                    <div
                      class="progress-bar"
                      data-percent="100"
                      data-delay="0"
                      data-type="%"
                    >
                    </div>
                  </div>
      
                  <div class="progress-bar-container">
                    <div class="progress-title">CSS3</div>
                    <span class="progress-percent">94%</span>
                    <div
                      class="progress-bar"
                      data-percent="94"
                      data-delay="100"
                      data-type="%"
                    >
                    </div>
                  </div>
      
                  <div class="progress-bar-container">
                    <div class="progress-title">JQUERY</div>
                    <span class="progress-percent">89%</span>
      
                    <div
                      class="progress-bar"
                      data-percent="89"
                      data-delay="200"
                      data-type="%"
                    >
                    </div>
                  </div>
      
                  <div class="progress-bar-container">
                    <div class="progress-title">MYSQL</div>
                    <span class="progress-percent">78%</span>
                    <div
                      class="progress-bar"
                      data-percent="78"
                      data-delay="300"
                      data-type="%"
                    >
                    </div>
                  </div>
      
                  <div class="progress-bar-container">
                    <div class="progress-title">PHP</div>
                    <span class="progress-percent">75%</span>
                    <div
                      class="progress-bar"
                      data-percent="75"
                      data-delay="400"
                      data-type="%"
                    >
                    </div>
                  </div>
                  <p class="progress-para">
                    Nulla varius consequat magna, id molestie ipsum volutpat quis. A
                    true story, that never been told!.
                  </p>
                </div>
                <div class="col-lg-4 mb-5">
                  <h4 class="mb-4">Best services around</h4>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Suscipit laboriosam
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          We're POLO, a creative agency located in the heart of New York city. A
                          true story, that never been told!.
                          <br />
                          <br />
                          Fusce id mi diam, Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                          tempora
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Aliquam voluptatem
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet,consectetur, adipisci velit, sed quia non numquam
              <br />
              <br />
              Fusce id mi diam, Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Labore et dolore
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet,consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              <br />
              <br />
              Fusce id mi diam, Neque porro quisquam est, qui dolorem ipsum quia
              dolorsit amet, consectetur, adipisci velit, sed quia non numquam eius
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <h4 class="mb-4">Latest from Blog</h4>
                  <div class="blogs">
                    <div class="blog">
                      <img src={img1} alt="Suspendisse consectetur" />
                      <div class="blog-content">
                        <a href="#">Suspendisse consectetur fringilla</a>
                        <span class="blog-date"
                          ><i class="far fa-clock"></i> 6m ago</span
                        >
                        <span class="blog-category"
                          ><i class="fa fa-tag"></i> Technology</span
                        >
                      </div>
                    </div>
                    <div class="blog">
                      <img src={img2} alt="Beautiful nature" />
                      <div class="blog-content">
                        <a href="#">Beautiful nature, and rare feathers!</a>
                        <span class="blog-date"
                          ><i class="far fa-clock"></i> 24h ago</span
                        >
                        <span class="blog-category"
                          ><i class="fa fa-tag"></i> Lifestyle</span
                        >
                      </div>
                    </div>
                    <div class="blog">
                      <img src={img3} alt="happiest time" />
                      <div class="blog-content">
                        <a href="#">The most happiest time of the day!</a>
                        <span class="blog-date"
                          ><i class="far fa-clock"></i> 11h ago</span
                        >
                        <span class="blog-category"
                          ><i class="fa fa-tag"></i> Lifestyle</span
                        >
                      </div>
                    </div>
                    <div class="blog">
                      <img src={img4} alt="Fringilla" />
                      <div class="blog-content">
                        <a href="#">Fringilla Lorem ipsum dolor sit amet</a>
                        <span class="blog-date"
                          ><i class="far fa-clock"></i> 11h ago</span
                        >
                        <span class="blog-category"
                          ><i class="fa fa-tag"></i> Lifestyle</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}}