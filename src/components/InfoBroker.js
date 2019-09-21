import React from 'react';

function InfoBroker() {
  return (
    <div>
        <div className="row mb-5">
            <div className="col-lg-4 offset-lg-1 offset-sm-2">
                <img src="https://zerodha.com/static/images/largest-broker.svg" alt="A placeholder for the graph"/>
            </div>
            <div className="col-lg-4 offset-sm-1">
                <h2 className="gray">Largest stock broker in India</h2>
                <p>
                    1.5+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                </p>
                <ul>
                    <div className="flex-row">
                        <li className="col-lg-6">Futures and Options</li> 
                        <li className="col-lg-6">Stocks and IPOs</li> 
                    </div>
                    <div className="flex-row">
                        <li className="col-lg-6">Commodity derivatives</li> 
                        <li className="col-lg-6">Direct mutual funds</li> 
                    </div>
                    <div className="flex-row">
                        <li className="col-lg-6">Currrency derivatives</li> 
                        <li className="col-lg-6">Bonds and Govt. Securities</li> 
                    </div>
                </ul>
                <div>
                    <a href="">
                        <img className="" src="https://zerodha.com/static/images/press-logos.png" alt="" style={{width: '500px'}} />
                    </a>
                </div>
            </div>
        </div>
        <div style={{height: 100}}></div>
    </div>
  );
}

export default InfoBroker;
