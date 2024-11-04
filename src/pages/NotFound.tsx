// NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 text-gray-700">
      <NavBar />
      <div className='p-4 justify-center items-center flex flex-col'>
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold mt-4">
          Página Inexistente <span role="img" aria-label="alert">⚠️</span>
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          Huummm, está bisbilhotando demais não? 👀
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 text-white bg-primary hover:bg-purple-600 hover:scale-105 rounded-md  ease-in-out duration-300"
        >
          Voltar para o inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
