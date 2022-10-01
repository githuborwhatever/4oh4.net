import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from "./components/MainFooter/MainFooter";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Programs from './components/Programs/Programs';
import Tabletop from './components/Tabletop/Tabletop';
import Keyboards from './components/Keyboards/Keyboards';
import Blender from './components/Blender/Blender';

function App() {
  return (
    <Router>
      <header>
        <MainHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/programs" element={<Programs />} />
          <Route path="/projects/tabletop" element={<Tabletop />} />
          <Route path="/projects/keyboards" element={<Keyboards />} />
          <Route path="/projects/models" element={<Blender />} />
        </Routes>
      </main>
      <footer>
        <MainFooter />
      </footer>
    </Router>
  );
}

export default App;
