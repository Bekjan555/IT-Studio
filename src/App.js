import './index.scss';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Standards from './components/standards';
import Specialization from './components/specialization';
import Projects from './components/projects';
import Video from './components/video';


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
    </div>
  );
}

export default App;
