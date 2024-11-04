import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import MyTickets from './pages/dash/client/MyTickets';
import MyPerson from './pages/dash/client/MyPerson';
import MyTicket from './pages/dash/client/MyTicket';

// Lazy Loading das páginas
const Home = lazy(() => import('./pages/Home'));
const Event = lazy(() => import('./pages/Event'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='w-screen h-screen bg-background text-white font-bold items-center  justify-center flex'>Carregando...</div>}>
        <div className='font-lexend'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order />} />
            <Route path="/person" element={<MyPerson />} />
            <Route path="/tickets" element={<MyTickets />} />
            <Route path="/ticket" element={<MyTicket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
