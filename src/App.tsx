import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MainHeader from './components/MainHeader/MainHeader';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import MainFooter from "./components/MainFooter/MainFooter";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Programs from './components/Programs/Programs';
import Tabletop from './components/Tabletop/Tabletop';
import Keyboards from './components/Keyboards/Keyboards';
import Blender from './components/Blender/Blender';
import Hire from './components/Hire/Hire';

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <MainHeader />
      </header>
      <nav>
        <Breadcrumbs />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/tabletop" element={<Tabletop />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/models" element={<Blender />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </main>
      <footer>
        <MainFooter />
      </footer>
    </Router>
  );
}

export default App;
