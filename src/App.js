import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Roadmap from './components/Roadmqp'
import Economics from './components/Economics'
import Tokendetails from './components/Tokendetails'
import Utility from './components/Tokenutility';
import Footer from './components/Footer';

function App() {
  const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    return (
      <div className={`info-loader absolute bg-secondary bg-opacity-80 border rounded-1 ${showLoader ? '' : 'hidden'}`}>
        <div className="absolute top-0 bottom-0 start-0 end-0 m-auto w-[100vw] h-[100vh]" role="status">
          <span>Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Loader />
      <Header />
      <Home />
      <About />
      <Roadmap />
      <Economics />
      {/* <Tokendetails /> */}
      <Utility /> 
      <Footer />
    </div>
  );
}

export default App;
