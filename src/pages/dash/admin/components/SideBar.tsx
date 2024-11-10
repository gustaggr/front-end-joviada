import { Link } from "react-router-dom";
import useUserStore from "../../../../store/useUserStore";
import useNavBarStore from "../../../../store/useNavBarStore";
import { IoChevronDown, IoHome, IoHomeOutline, IoTicket, IoTicketOutline } from "react-icons/io5";
import { useState } from "react";

interface SideBarProps {
    children?: React.ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
    const { nameuser } = useUserStore(); // Importando o nameuser da store
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // toggle burger menu change
    const updateMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { isDropdownOpen, hasAdmin, toggleLogin, toggleDropdown } = useNavBarStore(); // Importando o estado e funções da store da NavBar

    const userInitial = nameuser.charAt(0).toUpperCase();
    return (
        <div>

            <div className="flex">

                {/* SideBar */}
                <div className="flex w-72 max-lg:hidden">
                    <div className="flex flex-col py-6 items-center gap-1  bg-white w-full min-h-screen p-3">
                        <div className="p-6">
                            <Link to={'/'} className="font-bold text-black text-xl">
                                <img className="w-40" src='/namelogo.svg' alt="Logo" />
                            </Link>
                        </div>
                        <div className="bg-gray-300 w-full h-[1px]"></div>
                        <div className="flex flex-col w-full items-center gap-4 mt-5 px-4 font-light">
                            <Link
                                to="/admin/"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === '/admin/' ? 'bg-bghover text-primary' : 'hover:bg-bgprimary hover:text-primary '
                                    }`}
                            >
                                {location.pathname === '/admin/' ? <IoHome /> : <IoHomeOutline />}
                                Inicio
                            </Link>
                            <Link
                                to="/admin/tickets"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === '/admin/tickets' ? 'bg-bghover text-primary' : 'hover:bg-bgprimary hover:text-primary '
                                    }`}
                            >
                                {location.pathname === '/admin/tickets' ? <IoTicket /> : <IoTicketOutline />}
                                Inscrições
                            </Link>
                        </div>
                    </div>
                </div>

                {/* NavBar */}
                <div className="w-full">
                    <div className="w-full h-16 bg-white flex items-center justify-center">
                        <div className="flex max-lg:justify-between justify-end items-center w-full px-4">
                            <div
                                className="max-lg:flex w-10 h-full hidden flex-col items-start justify-between cursor-pointer gap-2"
                                onClick={updateMenu}
                            >
                                <span
                                    className={`w-6 h-0.5 bg-black rounded transform transition-transform duration-500 ${isMenuOpen ? "w-full fixed  h-1 -rotate-45 transform origin-center" : ""
                                        }`}
                                />
                                <span
                                    className={`w-6 h-0.5 bg-black rounded transition-transform duration-500 ${isMenuOpen ? "scale-0" : ""
                                        }`}
                                />
                                <span
                                    className={`w-6 h-0.5 bg-black rounded transform transition-transform duration-500 ${isMenuOpen ? "w-full fixed  h-1 rotate-45 transform origin-center" : ""
                                        }`}
                                />
                            </div>
                            <div className="relative gap-2 ">
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={toggleDropdown}
                                        className={`flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full relative ${isDropdownOpen ? 'scale-105 bg-purple-500' : 'scale-100'}`}
                                    >
                                        <span>{userInitial}</span>
                                    </button>
                                    <IoChevronDown
                                        onClick={toggleDropdown}
                                        className={`cursor-pointer transform transition-transform text-2xl ${isDropdownOpen ? 'rotate-180 scale-105' : 'rotate-0 scale-100'}`}
                                    />
                                </div>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-30">
                                        <Link to="/person" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Perfil</Link>
                                        <Link to="/tickets" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Ingressos</Link>
                                        {hasAdmin && (
                                            <Link to="/admin" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>
                                                Painel
                                            </Link>
                                        )}
                                        <button onClick={toggleLogin} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Sair</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
