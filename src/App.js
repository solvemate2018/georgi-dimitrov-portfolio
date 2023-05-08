import './App.css';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className='bg-white relative'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
