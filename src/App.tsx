import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import Home from './pages/Home';

function App() {

  return (
    <div className='font-inter'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
