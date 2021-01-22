import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  :hover {
    text-decoration: none;
  }
`


const Footer: React.FC = () => {
    return (
        <footer className="footer pt-0">
            <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6">
                    <div className="copyright text-center  text-lg-left  text-muted">
                        &copy; 2020 <a href="/" className="font-weight-bold ml-1">Covid live</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                        <li className="nav-item">
                            <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://covid19-brazil-api.now.sh/" className="nav-link"
                               target="_blank">API utilizada</a>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer
