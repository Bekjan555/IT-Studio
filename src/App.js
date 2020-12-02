import './index.scss';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Standards from './components/standards';
import Specialization from './components/specialization';
import Projects from './components/projects';
import Video from './components/video';
import Mailing from './components/mailing';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Services/>
      <Standards/>
      <Specialization/>
      <Projects/>
      <Video/>
      <Mailing/>
    </div>
  );
}

export default App;
