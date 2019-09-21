import React from 'react';

function Varsity () {
    return (
        <div>
            <div className="row offset-lg-1 offset-sm-1">
                <div className="col-lg-3 col-sm-12">
                    <img src="https://zerodha.com/static/images/index-education.svg" alt="Varsity placeholder"/>
                </div>
                <div className="col-lg-5 col-sm-12 offset-lg-3">
                    <div className="row mt-5">
                        <h3 className="mb-4">Free and open market education</h3>
                        <p className="gray">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="/">
                            <p>Varsity</p>
                        </a>   
                        <p className="gray">TradingQnA, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="/">
                            <p>TradingQnA </p>
                        </a>   
                    </div>              
                </div>
            </div>
        </div>
    );
}

export default Varsity;

