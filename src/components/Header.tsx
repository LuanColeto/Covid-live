import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  :hover {
    text-decoration: none;
  }
`


const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                        <div className="form-group mb-0">
                            <h1 style={{color: '#fff'}}>Covid Live</h1>
                        </div>
                        <button type="button" className="close" data-action="search-close"
                                data-target="#navbar-search-main" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header
