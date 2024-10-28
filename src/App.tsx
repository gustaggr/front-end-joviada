import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Order from './pages/Order';

// Lazy Loading das páginas
const Home = lazy(() => import('./pages/Home'));
const Event = lazy(() => import('./pages/Event'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='w-screen h-screen bg-background text-white font-bold items-center justify-center flex'>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
