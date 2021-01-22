import React from "react";
import {GetServerSideProps} from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

import Virus from '../../public/virus.svg';


interface BrazilData {
    data: {
        cases: number;
        confirmed: number;
        deaths: number;
        recovered: number;
    }
}

interface StateData {
    cases: number;
    deaths: number;
    suspects: number;

}

interface WorldData {
    Global: {
        TotalConfirmed: number,
        TotalDeaths: number,
        TotalRecovered: number
    }
}

interface HomeProps {
    worldData: WorldData
    brazilData: BrazilData
    spData: StateData
    rjData: StateData
    prData: StateData
    mgData: StateData
    amData: StateData
}

export default function Home({ brazilData, spData, rjData, prData, mgData, amData, worldData }: HomeProps) {

  return (
      <div className="main-content" id="panel">
          <Header />
          <SEO title="Dashboard" shouldExcludeTitleSuffix={true} description="Veja o resumo da covid-19 no Brasil e no mundo" />
          <div className="header bg-primary pb-6">
              <div className="container-fluid">
                  <div className="header-body">
                      <div className="row align-items-center py-4">
                          <div className="col-lg-6 col-7">
                              <h1 className=" text-white d-inline-block mb-0">Brasil</h1>
                          </div>
                      </div>
                      {brazilData && (
                          <div className="row">
                              <div className="col-xl-3 col-md-6">
                                  <div className="card card-stats">
                                      <div className="card-body">
                                          <div className="row">
                                              <div className="col">
                                                  <h5 className="card-title text-uppercase text-muted mb-0">Casos confirmados</h5>
                                                  <span className="h2 font-weight-bold mb-0">{brazilData.data.cases}</span>
                                              </div>
                                              <div className="col-auto">
                                                  <div
                                                      className="icon icon-shape bg-gradient-red text-white rounded-circle shadow"
                                                  >
                                                      <i className="ni ni-chart-pie-35" >
                                                        <img className="ni ni-chart-pie-35" src="/covid.png" width={30}   />
                                                      </i>
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
                                                  <span className="h2 font-weight-bold mb-0">{brazilData.data.deaths}</span>
                                              </div>
                                              <div className="col-auto">
                                                  <div
                                                      className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                                      <i className="ni ni-chart-pie-35" >
                                                          <img className="ni ni-chart-pie-35" src="/deaths.png" width={30}   />
                                                      </i>
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
                                                  <span className="h2 font-weight-bold mb-0">{brazilData.data.recovered}</span>
                                              </div>
                                              <div className="col-auto">
                                                  <div
                                                      className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                                      <i className="ni ni-chart-pie-35" >
                                                          <img className="ni ni-chart-pie-35" src="/vaccine.png" width={30}   />
                                                      </i>
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
                                                      <i className="ni ni-chart-pie-35" >
                                                          <img className="ni ni-chart-pie-35" src="/crocodile.png" width={30}   />
                                                      </i>
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
                      )}
                  </div>
              </div>
          </div>
          <div className="container-fluid mt--6">
              <div className="row">
                  <div className="col-xl-8">
                      <div className="card">
                          <div className="card-header border-0">
                              <div className="row align-items-center">
                                  <div className="col">
                                      <h3 className="mb-0">Dados por estado</h3>
                                  </div>
                                  <div className="col text-right">
                                      <a href="#!" className="btn btn-sm btn-primary">Veja tudo</a>
                                  </div>
                              </div>
                          </div>
                          <div className="table-responsive">
                              <table className="table align-items-center table-flush">
                                  <thead className="thead-light">
                                  <tr>
                                      <th scope="col">Estado</th>
                                      <th scope="col">Casos</th>
                                      <th scope="col">Óbitos</th>
                                      <th scope="col">Suspeitas</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <th scope="row">
                                          São Paulo
                                      </th>
                                      <td>
                                          {spData.cases}
                                      </td>
                                      <td>
                                          {spData.deaths}
                                      </td>
                                      <td>
                                          {spData.suspects}
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Rio de Janeiro
                                      </th>
                                      <td>
                                          {rjData.cases}
                                      </td>
                                      <td>
                                          {rjData.deaths}
                                      </td>
                                      <td>
                                          {rjData.suspects}
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Paraná
                                      </th>
                                      <td>
                                          {prData.cases}
                                      </td>
                                      <td>
                                          {prData.deaths}
                                      </td>
                                      <td>
                                          {prData.suspects}
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Minas Gerais
                                      </th>
                                      <td>
                                          {mgData.cases}
                                      </td>
                                      <td>
                                          {mgData.deaths}
                                      </td>
                                      <td>
                                          {mgData.suspects}
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Amazonas
                                      </th>
                                      <td>
                                          {amData.cases}
                                      </td>
                                      <td>
                                          {amData.deaths}
                                      </td>
                                      <td>
                                          {amData.suspects}
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
                                      <h3 className="mb-0">Mundo inteiro</h3>
                                  </div>
                                  <div className="col text-right">
                                      <a href="#!" className="btn btn-sm btn-primary">Veja tudo</a>
                                  </div>
                              </div>
                          </div>
                          <div className="table-responsive">
                              <table className="table align-items-center table-flush">
                                  <thead className="thead-light">
                                  <tr>
                                      <th scope="col">Casos</th>
                                      <th scope="col">Óbitos</th>
                                      <th scope="col">Vacinados</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr style={{height: 100}}>
                                      <th scope="row" style={{fontSize: 18}}>
                                          {worldData.Global.TotalConfirmed}
                                      </th>
                                      <th scope="row" style={{fontSize: 18}}>
                                          {worldData.Global.TotalDeaths}
                                      </th>
                                      <th scope="row" style={{fontSize: 18}}>
                                          {worldData.Global.TotalRecovered}
                                      </th>
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    //All request responses
    const worldResponse = await fetch('https://api.covid19api.com/summary')
    const brResponse = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
    const spResponse = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp')
    const rjResponse = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj')
    const prResponse = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pr')
    const mgResponse = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mg')
    const amResponse = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/am')


    const worldData = await worldResponse.json()
    const brazilData = await brResponse.json();
    const spData = await spResponse.json()
    const rjData = await rjResponse.json()
    const prData = await prResponse.json()
    const mgData = await mgResponse.json()
    const amData = await amResponse.json()


    return {
        props: {
            worldData,
            brazilData,
            spData,
            rjData,
            prData,
            mgData,
            amData,
        }
    }
}

