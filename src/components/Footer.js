import React from 'react';

function Footer() {
  return (
    <div className="container  col-lg-12">
        <div style={{height: 100}}></div>
        <hr />
        <div className="jumbotron">
            <div className="row">
                <div className="col-lg-3">
                    <div style={{ width: '15rem' }}>
                        <div className="card-body">
                            <img className="logo-img mb-3" src="https://zerodha.com/static/images/logo.svg" alt="Zerodha logo" />
                            <h5 className="card-text text-grey mb-3">+91 80 40402020</h5>
                            <h6 className="card-text mb-2 text-muted">© 2010 - 2019, Zerodha Broking Ltd. <br />All rights reserved.</h6>
                            <div>
                                <a href="https://twitter.com/zerodhaonline" className="">
                                    <img className="" src="https://image.flaticon.com/icons/png/512/107/107195.png" alt="" style={{height: '30px'}} />
                                </a>
                                <a href="" className="">
                                    <img className="ml-3" src="https://www.pngfind.com/pngs/m/267-2670905_gray-circle-facebook-icon-black-png-social-media.png" alt="" style={{height: '30px'}}/>
                                </a>
                                <a href="" className="">
                                    <img className="ml-3" src="https://www.pinclipart.com/picdir/middle/366-3665404_instagram-logo-grey-dark-gray-instagram-icon-clipart.png" alt="" style={{height: '30px'}}/>
                                </a>
                                <a href="" className="">
                                    <img className="ml-3" src="https://icon2.kisspng.com/20180408/thq/kisspng-linkedin-computer-icons-business-advertising-compa-grey-background-5acab175e72e40.3662579915232331419469.jpg" alt="" style={{height: '30px'}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div style={{ width: '15rem' }}>
                        <div className="card-body">
                            <h5 className="card-text text-grey mb-3">Company</h5>
                            <h6 className="card-text mb-2 text-muted">About</h6>
                            <h6 className="card-text mb-2 text-muted">Products</h6>
                            <h6 className="card-text mb-2 text-muted">Pricing</h6>
                            <h6 className="card-text mb-2 text-muted">Referral programme</h6>
                            <h6 className="card-text mb-2 text-muted">Careers</h6>
                            <h6 className="card-text mb-2 text-muted">Press and media</h6>
                            <h6 className="card-text mb-2 text-muted">Zerodha Cares (CSR)</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div style={{ width: '15rem' }}>
                        <div className="card-body">
                            <h5 className="card-text text-grey mb-3">Support</h5>
                            <h6 className="card-text mb-2 text-muted">Support portal</h6>
                            <h6 className="card-text mb-2 text-muted">Z-Connect</h6>
                            <h6 className="card-text mb-2 text-muted">List of charges</h6>
                            <h6 className="card-text mb-2 text-muted">Downloads and <br />resources</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div style={{ width: '15rem' }}>
                        <div className="card-body">
                            <h5 className="card-text text-grey mb-3">Account</h5>
                            <h6 className="card-text mb-2 text-muted">Open an account</h6>
                            <h6 className="card-text mb-2 text-muted">Fund transfer</h6>
                            <h6 className="card-text mb-2 text-muted">60 day challenge</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
