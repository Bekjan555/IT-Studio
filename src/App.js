import './index.scss';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Standards from './components/standards';
import Specialization from './components/specialization';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Services/>
      <Standards/>
      <Specialization/>
    </div>
  );
}

export default App;
