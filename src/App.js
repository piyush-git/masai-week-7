import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import InfoBroker from './components/InfoBroker';
import OpenAccount from './components/OpenAccount';
import Pricing from './components/Pricing';
import ZerodhaUniverse from './components/ZerodhaUniverse';
import Varsity from './components/Varsity';

function App() {
  return (
    <div >
        <Navbar />
        <SignUp />
        <InfoBroker />
        <ZerodhaUniverse />
        <Pricing />
        <Varsity />
        <OpenAccount />
        <Footer />
    </div>
  );
}

export default App;
