import React from 'react';

function Pricing() {
  return (
    <div className="mb-5 row ml-5">
        <div className="col-lg-4 ml-2">
            <h3 className="gray mb-4">Unbeatable pricing</h3>
            <h6 className="gray mb-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</h6>
            <a href="">
                <h6 className="text-primary">See Pricing</h6>
            </a>
        </div>
        <div className="col-lg-7 col-sm-12 row text-center gray offset-lg-1">
            <div className="col-lg-4 border border-secondary">
                <h1 className="mt-4">₹0</h1>
                <p className="mt-4 mb-5">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-lg-4 border border-secondary">
                <h1 className="mt-4">₹20</h1>
                <p className="mt-4 mb-5">Intraday and FnO</p>
            </div>
        </div>
    </div>
  );
}

export default Pricing;
