import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Pages/Error';
import MainApp from './Pages/App';
import Support from './Pages/Support';
import About from './Pages/About';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<MainApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
