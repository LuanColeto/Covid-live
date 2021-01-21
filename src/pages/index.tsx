import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
      <div className="main-content" id="panel">
          <Header />
          <div className="header bg-primary pb-6">
              <div className="container-fluid">
                  <div className="header-body">
                      <div className="row align-items-center py-4">
                          <div className="col-lg-6 col-7">
                              <h1 className=" text-white d-inline-block mb-0">Global</h1>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-xl-3 col-md-6">
                              <div className="card card-stats">
                                  <div className="card-body">
                                      <div className="row">
                                          <div className="col">
                                              <h5 className="card-title text-uppercase text-muted mb-0">Casos confirmados</h5>
                                              <span className="h2 font-weight-bold mb-0">350,897</span>
                                          </div>
                                          <div className="col-auto">
                                              <div
                                                  className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                  <i className="ni ni-active-40" />
                                              </div>
                                          </div>
                                      </div>
                                      <p className="mt-3 mb-0 text-sm">
                                          {/*<span className="text-success mr-2"><i*/}
                                          {/*    className="fa fa-arrow-up" /> 3.48%</span>*/}
                                          {/*<span className="text-nowrap">Since last month</span>*/}
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                              <div className="card card-stats">
                                  <div className="card-body">
                                      <div className="row">
                                          <div className="col">
                                              <h5 className="card-title text-uppercase text-muted mb-0">Óbitos</h5>
                                              <span className="h2 font-weight-bold mb-0">2,356</span>
                                          </div>
                                          <div className="col-auto">
                                              <div
                                                  className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                                  <i className="ni ni-chart-pie-35" />
                                              </div>
                                          </div>
                                      </div>
                                      <p className="mt-3 mb-0 text-sm">
                                          {/*<span className="text-success mr-2"><i*/}
                                          {/*    className="fa fa-arrow-up" /> 3.48%</span>*/}
                                          {/*<span className="text-nowrap">Since last month</span>*/}
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                              <div className="card card-stats">
                                  <div className="card-body">
                                      <div className="row">
                                          <div className="col">
                                              <h5 className="card-title text-uppercase text-muted mb-0">Vacinadas</h5>
                                              <span className="h2 font-weight-bold mb-0">924</span>
                                          </div>
                                          <div className="col-auto">
                                              <div
                                                  className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                                  <i className="ni ni-money-coins"/>
                                              </div>
                                          </div>
                                      </div>
                                      <p className="mt-3 mb-0 text-sm">
                                          {/*<span className="text-success mr-2"><i*/}
                                          {/*    className="fa fa-arrow-up" /> 3.48%</span>*/}
                                          {/*<span className="text-nowrap">Since last month</span>*/}
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                              <div className="card card-stats">
                                  <div className="card-body">
                                      <div className="row">
                                          <div className="col">
                                              <h5 className="card-title text-uppercase text-muted mb-0">Viraram jacaré</h5>
                                              <span className="h2 font-weight-bold mb-0">0</span>
                                          </div>
                                          <div className="col-auto">
                                              <div
                                                  className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                                  <i className="ni ni-chart-bar-32" />
                                              </div>
                                          </div>
                                      </div>
                                      <p className="mt-3 mb-0 text-sm">
                                          {/*<span className="text-success mr-2"><i*/}
                                          {/*    className="fa fa-arrow-up" /> 3.48%</span>*/}
                                          {/*<span className="text-nowrap">Since last month</span>*/}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid mt--6">
              <div className="row">
                  <div className="col-xl-8">
                      <div className="card bg-default">
                          <div className="card-header bg-transparent">
                              <div className="row align-items-center">
                                  <div className="col">
                                      <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                      <h5 className="h3 text-white mb-0">Sales value</h5>
                                  </div>
                                  <div className="col">
                                      <ul className="nav nav-pills justify-content-end">
                                          <li className="nav-item mr-2 mr-md-0" data-toggle="chart"
                                              data-target="#chart-sales-dark"
                                              data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}'
                                              data-prefix="$" data-suffix="k">
                                              <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                                                  <span className="d-none d-md-block">Month</span>
                                                  <span className="d-md-none">M</span>
                                              </a>
                                          </li>
                                          <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark"
                                              data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}'
                                              data-prefix="$" data-suffix="k">
                                              <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                                                  <span className="d-none d-md-block">Week</span>
                                                  <span className="d-md-none">W</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="card-body">
                              <div className="chart">
                                  <canvas id="chart-sales-dark" className="chart-canvas" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4">
                      <div className="card">
                          <div className="card-header bg-transparent">
                              <div className="row align-items-center">
                                  <div className="col">
                                      <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                      <h5 className="h3 mb-0">Total orders</h5>
                                  </div>
                              </div>
                          </div>
                          <div className="card-body">
                              <div className="chart">
                                  <canvas id="chart-bars" className="chart-canvas" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xl-8">
                      <div className="card">
                          <div className="card-header border-0">
                              <div className="row align-items-center">
                                  <div className="col">
                                      <h3 className="mb-0">Page visits</h3>
                                  </div>
                                  <div className="col text-right">
                                      <a href="#!" className="btn btn-sm btn-primary">See all</a>
                                  </div>
                              </div>
                          </div>
                          <div className="table-responsive">
                              <table className="table align-items-center table-flush">
                                  <thead className="thead-light">
                                  <tr>
                                      <th scope="col">Page name</th>
                                      <th scope="col">Visitors</th>
                                      <th scope="col">Unique users</th>
                                      <th scope="col">Bounce rate</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <th scope="row">
                                          /argon/
                                      </th>
                                      <td>
                                          4,569
                                      </td>
                                      <td>
                                          340
                                      </td>
                                      <td>
                                          <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          /argon/index.html
                                      </th>
                                      <td>
                                          3,985
                                      </td>
                                      <td>
                                          319
                                      </td>
                                      <td>
                                          <i className="fas fa-arrow-down text-warning mr-3" /> 46,53%
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          /argon/charts.html
                                      </th>
                                      <td>
                                          3,513
                                      </td>
                                      <td>
                                          294
                                      </td>
                                      <td>
                                          <i className="fas fa-arrow-down text-warning mr-3" /> 36,49%
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          /argon/tables.html
                                      </th>
                                      <td>
                                          2,050
                                      </td>
                                      <td>
                                          147
                                      </td>
                                      <td>
                                          <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          /argon/profile.html
                                      </th>
                                      <td>
                                          1,795
                                      </td>
                                      <td>
                                          190
                                      </td>
                                      <td>
                                          <i className="fas fa-arrow-down text-danger mr-3" />46,53%
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4">
                      <div className="card">
                          <div className="card-header border-0">
                              <div className="row align-items-center">
                                  <div className="col">
                                      <h3 className="mb-0">Social traffic</h3>
                                  </div>
                                  <div className="col text-right">
                                      <a href="#!" className="btn btn-sm btn-primary">See all</a>
                                  </div>
                              </div>
                          </div>
                          <div className="table-responsive">
                              <table className="table align-items-center table-flush">
                                  <thead className="thead-light">
                                  <tr>
                                      <th scope="col">Referral</th>
                                      <th scope="col">Visitors</th>
                                      <th scope="col"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <th scope="row">
                                          Facebook
                                      </th>
                                      <td>
                                          1,480
                                      </td>
                                      <td>
                                          <div className="d-flex align-items-center">
                                              <span className="mr-2">60%</span>
                                              <div>
                                                  <div className="progress">
                                                      <div className="progress-bar bg-gradient-danger"
                                                           role="progressbar" />
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Facebook
                                      </th>
                                      <td>
                                          5,480
                                      </td>
                                      <td>
                                          <div className="d-flex align-items-center">
                                              <span className="mr-2">70%</span>
                                              <div>
                                                  <div className="progress">
                                                      <div className="progress-bar bg-gradient-success"
                                                           role="progressbar" />
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Google
                                      </th>
                                      <td>
                                          4,807
                                      </td>
                                      <td>
                                          <div className="d-flex align-items-center">
                                              <span className="mr-2">80%</span>
                                              <div>
                                                  <div className="progress">
                                                      <div className="progress-bar bg-gradient-primary"
                                                           role="progressbar" />
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Instagram
                                      </th>
                                      <td>
                                          3,678
                                      </td>
                                      <td>
                                          <div className="d-flex align-items-center">
                                              <span className="mr-2">75%</span>
                                              <div>
                                                  <div className="progress">
                                                      <div className="progress-bar bg-gradient-info" role="progressbar"/>
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          twitter
                                      </th>
                                      <td>
                                          2,645
                                      </td>
                                      <td>
                                          <div className="d-flex align-items-center">
                                              <span className="mr-2">30%</span>
                                              <div>
                                                  <div className="progress">
                                                      <div className="progress-bar bg-gradient-warning"
                                                           role="progressbar"  />
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <Footer />
          </div>
      </div>
)
}
