import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Roadmap from './components/Roadmqp'
import Economics from './components/Economics'
import Tokendetails from './components/Tokendetails'
import Utility from './components/Tokenutility';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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
