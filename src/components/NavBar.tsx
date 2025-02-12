import { useEffect, useRef, useState } from 'react';
import { IoHomeOutline, IoHome, IoTicketOutline, IoTicket, IoPersonOutline, IoPerson, IoChevronDown } from 'react-icons/io5';
import { Link, useLocation } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import useNavBarStore from "../store/useNavBarStore";

export default function NavBar() {
    const { nameuser } = useUserStore();
    const { hasLogged, isDropdownOpen, hasAdmin, toggleLogin, toggleAdmin } = useNavBarStore();

    const userInitial = nameuser.charAt(0).toUpperCase();
    const location = useLocation();

    const [dropdownState, setDropdownState] = useState(isDropdownOpen); 
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const dropDownButton = () => {
        setDropdownState((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setDropdownState(false); 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="w-full z-10 bg-backgroundClear h-16 items-center justify-center flex px-5">
                <div className="text-black w-full items-center justify-between flex max-w-[1200px]">
                    <div>
                        <Link to={'/'} className="font-bold text-black text-xl">
                            <img className="w-52" src='/namelogo.svg' alt="Logo" />
                        </Link>
                    </div>
                    <div className="gap-4 max-xl:pr-4 items-center font-medium text-base hidden sm:flex">
                        <button onClick={toggleLogin} className="bg-primary p-2 text-white rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105 ease-in-out duration-300">
                            {hasLogged ? 'Sair' : 'Login'}
                        </button>
                        {hasLogged && (
                            <button onClick={toggleAdmin} className="bg-primary p-2 text-white rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105 ease-in-out duration-300">
                                {hasAdmin ? 'NoAdm' : 'Admin'}
                            </button>
                        )}
                        {hasLogged ? (
                            <div className="relative gap-2" ref={dropdownRef}>
                                {/* Ícone do usuário */}
                                <button
                                    ref={buttonRef}
                                    onClick={dropDownButton}
                                    className={`flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full relative ${dropdownState ? 'scale-105 bg-purple-500' : 'scale-100'}`}
                                >
                                    <span>{userInitial}</span>
                                </button>

                                {/* Seta do dropdown */}
                                <IoChevronDown
                                    onClick={dropDownButton}
                                    className={`cursor-pointer absolute right-[-25px] ml-6 top-1/2 transform -translate-y-1/2 transition-transform text-2xl ${dropdownState ? 'rotate-180 scale-105' : 'rotate-0 scale-100'}`}
                                />

                                {/* Conteúdo do dropdown */}
                                {dropdownState && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-30">
                                        <Link onClick={dropDownButton} to="/person" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Perfil</Link>
                                        <Link onClick={dropDownButton} to="/tickets" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Ingressos</Link>
                                        {hasAdmin && (
                                            <Link onClick={dropDownButton} to="/admin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                Painel
                                            </Link>
                                        )}
                                        <button onClick={toggleLogin} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Sair</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className='flex gap-2 items-center font-medium text-base'>
                                <Link to={"/register"} className="text-primary">Registrar</Link>
                                <Link to={"/login"} className="bg-primary p-2 text-white rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105 ease-in-out duration-300">Entrar</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Navbar inferior para mobile */}
            <div className="w-full z-10 bg-backgroundClear h-16 fixed bottom-0 left-0 flex sm:hidden items-center justify-around text-black">
                <Link to={'/'} className="flex flex-col items-center">
                    {location.pathname === '/' ? <IoHome size={'30px'} className="text-primary" /> : <IoHomeOutline size={'30px'} />}
                </Link>
                <Link to={'/tickets'} className="flex flex-col items-center gap-1">
                    {location.pathname === '/tickets' ? <IoTicket size={'30px'} className="text-primary" /> : <IoTicketOutline size={'30px'} />}
                </Link>
                <Link to={'/person'} className="flex flex-col items-center">
                    {location.pathname === '/person' ? <IoPerson size={'30px'} className="text-primary" /> : <IoPersonOutline size={'30px'} />}
                </Link>
            </div>

            {/* Overlay para fechar o dropdown ao clicar fora */}
            {dropdownState && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setDropdownState(false)}
                />
            )}
        </>
    );
}
