import Navbar from "./navbar";
import { data } from "./App";
import React, { useContext } from "react";
import FOOTER from "./footer";
import Adminslider from "./sidernav/adminslider";

import "./component/graph.js";





function ADMIN() {


  const name = useContext(data);
  return (<div  >

    <Navbar />

    <div style={{ width: "100%", height: "180vh", backgroundColor: "wheat" }}>
      <Adminslider />





      <div style={{ marginLeft: "20%", marginTop: "-80%" }}>


        <div class="row my-4">
          <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="card">
              <h5 class="card-header">Download</h5>
              <div class="card-body">
                <h5 class="card-title">12</h5>
                <p class="card-text">Feb 1 - Apr 1</p>
                <p class="card-text text-success">18.2% increase since last month</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card">
              <h5 class="card-header">Watch Time</h5>
              <div class="card-body">
                <h5 class="card-title">43 hours</h5>
                <p class="card-text">Feb 1 - Apr 1, United States</p>
                <p class="card-text text-danger">2.6% decrease since last month</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card">
              <h5 class="card-header">Traffic</h5>
              <div class="card-body">
                <h5 class="card-title">64 </h5>
                <p class="card-text">Feb 1 - Apr 1</p>
                <p class="card-text text-success">2.5% increase since last month</p>
              </div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-12 col-xl-8 mb-4 mb-lg-0">
            <div class="card">
              <h5 class="card-header">Latest LOGIN</h5>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Product</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Total</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">17371705</th>
                        <td>Volt Premium Bootstrap 5 Dashboard</td>
                        <td>johndoe@gmail.com</td>
                        <td>Aug 31 2020</td>
                        <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                      </tr>
                      <tr>
                        <th scope="row">17370540</th>
                        <td>Pixel Pro Premium Bootstrap UI Kit</td>
                        <td>jacob.monroe@company.com</td>

                        <td>Aug 28 2020</td>
                        <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                      </tr>
                      <tr>
                        <th scope="row">17371705</th>
                        <td>Volt Premium Bootstrap 5 Dashboard</td>
                        <td>johndoe@gmail.com</td>
                        <td>Aug 31 2020</td>
                        <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                      </tr>
                      <tr>
                        <th scope="row">17370540</th>
                        <td>Pixel Pro Premium Bootstrap UI Kit</td>
                        <td>jacob.monroe@company.com</td>
                        <td>Aug 28 2020</td>
                        <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                      </tr>
                      <tr>
                        <th scope="row">17371705</th>
                        <td>Volt Premium Bootstrap 5 Dashboard</td>
                        <td>johndoe@gmail.com</td>
                        <td>Aug 31 2020</td>
                        <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                      </tr>
                      <tr>
                        <th scope="row">17370540</th>
                        <td>Pixel Pro Premium Bootstrap UI Kit</td>
                        <td>jacob.monroe@company.com</td>
                        <td>Aug 28 2020</td>
                        <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="#" class="btn btn-block btn-light">View all</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4">

          </div>
        </div>





      </div>































    </div>


    <div style={{ backgroundColor: "black", position: "absolute", width: "100%", marginTop: "0%" }}>
      <FOOTER />
    </div>
  </div>);
}

export default ADMIN;