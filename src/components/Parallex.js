import React from "react";


export class Parallex extends React.Component{
    render(){
        return(
            <section class="parallax">
            <div class="bg-overlay2"></div>
          <div class="container text-light">
          <div class="row">
            <div class="col-lg-5 parallax-intro">
              <h2>Our Numbers & Smoth parallax</h2>
              <p class="parallax-para">
                Nulla varius consequat magna, id molestie ipsum volutpat quis. A
                true story, that never been told!. Fusce id mi diam, non ornare.
                Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, id
                molestie ipsum volutpat quis. facilisis ut venenatis eu.
              </p>
              <a href="#services" class="btn btn-outline-light rounded-pill py-2 px-3 shadow-sm"
                >Our Services</a
              >
            </div>
            <div class="col-lg-7 parallax-counter">
              <div class="row">
                <div class="col-lg-6">
                  <div class="text-center">
                    <div class="counter text-lg">
                      <span
                        data-speed="3000"
                        data-refresh-interval="50"
                        data-to="12416"
                        data-from="600"
                        data-seperator="true"
                      ></span>
                    </div>
                    <div class="seperator seperator-small"></div>
                    <p>LINES OF CODE</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="text-center">
                    <div class="counter text-lg">
                      <span
                        data-speed="4500"
                        data-refresh-interval="23"
                        data-to="365"
                        data-from="100"
                        data-seperator="true"
                      ></span>
                    </div>
                    <div class="seperator seperator-small"></div>
                    <p>CUPS OF COFFEE</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="text-center">
                    <div class="counter text-lg">
                      <span
                        data-speed="3000"
                        data-refresh-interval="12"
                        data-to="114"
                        data-from="50"
                        data-seperator="true"
                      ></span>
                    </div>
                    <div class="seperator seperator-small"></div>
                    <p>FINISHED PROJECTS</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="text-center">
                    <div class="counter text-lg">
                      <span
                        data-speed="4550"
                        data-refresh-interval="50"
                        data-to="14825"
                        data-from="48"
                        data-seperator="true"
                      ></span>
                    </div>
                    <div class="seperator seperator-small"></div>
                    <p>SATISFIED CLIENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
        )}}