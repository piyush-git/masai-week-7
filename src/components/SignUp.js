import React from 'react';

function SignUp() {
  return (
    <div>
        <div style={{height: 100}}></div>
        <div className="row">
            {/* <div className="col-lg-4"></div> */}
            {/* <div className="col-1"></div> */}
            <img className="col-lg-4 col-8 mb-5 offset-sm-2 offset-lg-4" src="https://zerodha.com/static/images/landing.png" alt="A landing page placeholder" />
            <p className="display-4 col-lg-4 col-8 offset-sm-2 offset-lg-4 text-center font-weight-bold">Invest in everything</p>
            <h4 className=" col-lg-6 col-8 offset-sm-2 offset-lg-3 text-center font-weight-bold text-muted mb-5">Online platform to invest in stocks, derivatives, mutual funds, and more</h4>            
        </div>
        <div className="row text-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <button className="btn btn-primary col-lg-4 col-sm-3">Sign up now</button>
            </div>
            <div className="col-lg-4"></div>
        </div>
        <div style={{height: 100}}></div>

    </div>
  );
}

export default SignUp;
