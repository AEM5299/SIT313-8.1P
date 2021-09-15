import CardList from './components/CardList';
import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import { getExperts } from './services/ExpertService';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <img className="w-full hero-img mt-4" src="https://www.deakin.edu.au/__data/assets/image/0011/858161/DDT1600.jpg" alt="hero image" />
      </div>
      <div className="container mx-auto">
        <CardList experts={getExperts()} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
