import React from "react";
import {GetServerSideProps} from "next";
import CountUp from 'react-countup';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';


//Components imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";




interface CountryData {
    data: [
        {
            country: string;
            confirmed: number;
            deaths: number;
            recovered: number;
        }
    ]
}

interface StatesProps {
    countriesData: CountryData
}

export default function Countries({  countriesData  }: StatesProps) {

    return (
        <div className="main-content" id="panel">
            <Header />
            <SEO title="Dashboard" shouldExcludeTitleSuffix={false} description="Veja o resumo da covid-19 no Brasil e no mundo" />
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <h6 className="h2 text-white d-inline-block mb-0">Países pelo mundo</h6>
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><Link href="/" passHref><FaHome className="fas fa-home" /></Link>
                                        </li>
                                        <li className="breadcrumb-item">Países</li>
                                    </ol>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt--6">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Dados por País</h3>
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
                                        <th scope="col">Vacinados</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {countriesData && (
                                        countriesData.data.map(country => (
                                            <tr>
                                                <th scope="row">
                                                    {country.country}
                                                </th>
                                                <td>
                                                    <CountUp
                                                        start={country.confirmed}
                                                        end={country.confirmed}
                                                        duration={0}
                                                        separator="."
                                                    />
                                                </td>
                                                <td>
                                                    <CountUp
                                                        start={country.deaths}
                                                        end={country.deaths}
                                                        duration={0}
                                                        separator="."
                                                    />
                                                </td>
                                                <td>
                                                    <CountUp
                                                        start={country.recovered}
                                                        end={country.recovered}
                                                        duration={0}
                                                        separator="."
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    )}
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

export const getServerSideProps: GetServerSideProps<StatesProps> = async () => {
    const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries')

    const countriesData = await response.json()


    return {
        props: {
            countriesData
        }
    }
}

