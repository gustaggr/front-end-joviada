import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy Loading das páginas
const Home = lazy(() => import('./pages/Home'));
const Event = lazy(() => import('./pages/Event'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
