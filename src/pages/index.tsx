import React from "react";
import {GetServerSideProps} from "next";
import CountUp from 'react-countup';
import Link from 'next/link';

//Components imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";


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
                                                  <span className="h2 font-weight-bold mb-0">
                                                      <CountUp
                                                          start={0}
                                                          end={brazilData.data.cases}
                                                          duration={2.75}
                                                          separator="."
                                                          decimals={4}
                                                          decimal="."
                                                        />
                                                  </span>
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
                                                  <span className="h2 font-weight-bold mb-0">
                                                      <CountUp
                                                          start={0}
                                                          end={brazilData.data.deaths}
                                                          duration={2.75}
                                                          separator="."
                                                          decimals={4}
                                                          decimal="."
                                                      />
                                                  </span>
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
                                                  <span className="h2 font-weight-bold mb-0">
                                                      <CountUp
                                                          start={0}
                                                          end={brazilData.data.recovered}
                                                          duration={2.75}
                                                          separator="."
                                                          decimals={4}
                                                          decimal="."
                                                      />
                                                  </span>
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
                                                  <span className="h2 font-weight-bold mb-0">
                                                      <CountUp
                                                          start={90000}
                                                          end={0}
                                                          duration={2.75}
                                                      />
                                                  </span>
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
                  <div className="col-xl-7">
                      <div className="card">
                          <div className="card-header border-0">
                              <div className="row align-items-center">
                                  <div className="col">
                                      <h3 className="mb-0">Dados por estado</h3>
                                  </div>
                                  <div className="col text-right">
                                      <Link href="/states" passHref>Veja tudo</Link>
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
                                          <CountUp
                                              start={spData.cases}
                                              end={spData.cases}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={spData.deaths}
                                              end={spData.deaths}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={spData.suspects}
                                              end={spData.suspects}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Rio de Janeiro
                                      </th>
                                      <td>
                                          <CountUp
                                              start={rjData.cases}
                                              end={rjData.cases}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={rjData.deaths}
                                              end={rjData.deaths}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={rjData.suspects}
                                              end={rjData.suspects}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Paraná
                                      </th>
                                      <td>
                                          <CountUp
                                              start={prData.cases}
                                              end={prData.cases}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={prData.deaths}
                                              end={prData.deaths}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={prData.suspects}
                                              end={prData.suspects}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Minas Gerais
                                      </th>
                                      <td>
                                          <CountUp
                                              start={mgData.cases}
                                              end={mgData.cases}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={mgData.deaths}
                                              end={mgData.deaths}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={mgData.suspects}
                                              end={mgData.suspects}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          Amazonas
                                      </th>
                                      <td>
                                          <CountUp
                                              start={amData.cases}
                                              end={amData.cases}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={amData.deaths}
                                              end={amData.deaths}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                      <td>
                                          <CountUp
                                              start={amData.suspects}
                                              end={amData.suspects}
                                              duration={0}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-5">
                      <div className="card">
                          <div className="card-header border-0">
                              <div className="row align-items-center">
                                  <div className="col">
                                      <h3 className="mb-0">Mundo inteiro</h3>
                                  </div>
                                  <div className="col text-right">
                                      <Link href="/countries" passHref>Veja tudo</Link>
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
                                          <CountUp
                                              start={0}
                                              end={worldData.Global.TotalConfirmed}
                                              duration={2.75}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </th>
                                      <th scope="row" style={{fontSize: 18}}>
                                          <CountUp
                                              start={0}
                                              end={worldData.Global.TotalDeaths}
                                              duration={2.75}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
                                      </th>
                                      <th scope="row" style={{fontSize: 18}}>
                                          <CountUp
                                              start={0}
                                              end={worldData.Global.TotalRecovered}
                                              duration={2.75}
                                              separator="."
                                              decimals={4}
                                              decimal="."
                                          />
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

