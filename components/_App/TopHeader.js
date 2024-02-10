import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-4 col-sm-6">
                        <div className="header-content-left">
                            <p>Welcome To flexa Insurance!</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-8 col-sm-6">
                        <ul className="header-content-right">
                           

                            <li>
                                <a href="mailto:hello@flexa.com">
                                    <i className="bx bx-envelope"></i>
                                    {t("Email: hello@santepay.com")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;