import { Link } from "react-router-dom";
import useUserStore from "../../../../store/useUserStore";
import useNavBarStore from "../../../../store/useNavBarStore";
import {
    IoChevronDown,
    IoFolder,
    IoFolderOutline,
    IoHome,
    IoHomeOutline,
    IoMapOutline,
    IoMapSharp,
    IoPerson,
    IoPersonOutline,
    IoTicket,
    IoTicketOutline,
} from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { FaPercentage } from "react-icons/fa";

interface SideBarProps {
    children?: React.ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
    const { nameuser, isMenuOpen, setIsMenuOpen } = useUserStore();
    const { isDropdownOpen, hasAdmin, toggleLogin } = useNavBarStore();

    const [dropdownState, setDropdownState] = useState(isDropdownOpen);
    const userInitial = nameuser.charAt(0).toUpperCase();

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const dropDownButton = () => {
        setDropdownState((prev) => !prev);
    };

    useEffect(() => {
        // Função para detectar cliques fora do dropdown ou do botão
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                // Se o clique não for dentro do dropdown ou do botão, fecha o dropdown
                setDropdownState(false);
            }
        };

        // Adiciona o event listener para detectar cliques fora
        document.addEventListener("mousedown", handleClickOutside);

        // Limpeza do event listener quando o componente for desmontado
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // A dependência vazia garante que isso seja executado apenas uma vez

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <div className="flex" >
                {/* SideBar */}
                < div className="flex w-72 max-lg:hidden" >
                    <div className="flex flex-col py-6 items-center gap-1 bg-white w-full min-h-screen p-3" >
                        <div className="p-6" >
                            <Link to={"/admin/"} className="font-bold text-black text-xl" >
                                <img className="w-40" src="/namelogo.svg" alt="Logo" />
                            </Link>
                        </div>
                        <div className="bg-gray-300 w-full h-[1px]" > </div>
                        < div className="flex flex-col w-full items-center gap-4 mt-5 px-4 font-light" >
                            <Link
                                to="/admin/"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/"
                                    ? "bg-bghover text-primary"
                                    : "hover:bg-bgprimary hover:text-primary "
                                    }`
                                }
                            >
                                {
                                    location.pathname === "/admin/" ? (
                                        <IoHome />
                                    ) : (
                                        <IoHomeOutline />
                                    )
                                }
                                Inicio
                            </Link>
                            < Link
                                to="/admin/registrations"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/registrations"
                                    ? "bg-bghover text-primary"
                                    : "hover:bg-bgprimary hover:text-primary "
                                    }`}
                            >
                                {
                                    location.pathname === "/admin/registrations" ? (
                                        <IoFolder  />
                                    ) : (
                                        <IoFolderOutline />
                                    )
                                }
                                Inscrições
                            </Link>
                            < Link
                                to="/admin/events"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/events"
                                    ? "bg-bghover text-primary"
                                    : "hover:bg-bgprimary hover:text-primary "
                                    }`}
                            >
                                {
                                    location.pathname === "/admin/events" ? (
                                        <IoMapSharp />
                                    ) : (
                                        <IoMapOutline />
                                    )
                                }
                                Eventos
                            </Link>
                            < Link
                                to="/admin/tickets"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/tickets"
                                    ? "bg-bghover text-primary"
                                    : "hover:bg-bgprimary hover:text-primary "
                                    }`}
                            >
                                {
                                    location.pathname === "/admin/tickets" ? (
                                        <IoTicket />
                                    ) : (
                                        <IoTicketOutline />
                                    )
                                }
                                Ingressos
                            </Link>
                            < Link
                                to="/admin/users"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/users"
                                    ? "bg-bghover text-primary"
                                    : "hover:bg-bgprimary hover:text-primary "
                                    }`}
                            >
                                {
                                    location.pathname === "/admin/users" ? (
                                        <IoPerson />
                                    ) : (
                                        <IoPersonOutline />
                                    )
                                }
                                Usuários
                            </Link>
                            < Link
                                to="/admin/coupons"
                                className={`p-2 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/coupons"
                                    ? "bg-bghover text-primary"
                                    : "hover:bg-bgprimary hover:text-primary "
                                    }`}
                            >
                                {
                                    location.pathname === "/admin/coupons" ? (
                                        <FaPercentage  />
                                    ) : (
                                        <FaPercentage />
                                    )
                                }
                                Cupons
                            </Link>
                        </div>
                    </div>
                </div>

                {/* NavBar */}
                <div className="w-full z-20" >
                    <div
                        className={
                            `w-full flex h-16 bg-white items-center justify-center ${isMenuOpen ? "fixed top-0 left-0 w-full z-50" : ""
                            }`
                        }
                    >
                        <div className="flex max-lg:justify-between justify-end items-center w-full px-4" >
                            <div
                                className="max-lg:flex w-10 h-full hidden flex-col items-start justify-between cursor-pointer gap-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span
                                    className={
                                        `w-6 h-0.5 bg-black rounded transform transition-transform duration-500 ${isMenuOpen
                                            ? "w-10 fixed  h-0.5 rotate-45 transform origin-center"
                                            : ""
                                        }`
                                    }
                                />
                                < span
                                    className={`w-6 h-0.5 bg-black rounded transition-transform duration-500 ${isMenuOpen ? "scale-0" : ""
                                        }`}
                                />
                                < span
                                    className={`w-6 h-0.5 bg-black rounded transform transition-transform duration-500 ${isMenuOpen
                                        ? "w-10 fixed  h-0.5 -rotate-45 transform origin-center"
                                        : ""
                                        }`}
                                />
                            </div>
                            < div className="relative gap-2" >
                                <button
                                    ref={buttonRef}
                                    className="cursor-default flex items-center gap-1"
                                >
                                    <button
                                        onClick={dropDownButton}
                                        className={`flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full relative ${dropdownState ? "scale-105 bg-purple-500" : "scale-100"
                                            }`}
                                    >
                                        <span>{userInitial} </span>
                                    </button>
                                    < IoChevronDown
                                        onClick={dropDownButton}
                                        className={`cursor-pointer transform transition-transform text-2xl ${dropdownState
                                            ? "rotate-180 scale-105"
                                            : "rotate-0 scale-100"
                                            }`}
                                    />
                                </button>

                                {
                                    dropdownState && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-30"
                                        >
                                            <Link
                                                to="/person"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Perfil
                                            </Link>
                                            < Link
                                                to="/tickets"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Ingressos
                                            </Link>
                                            {
                                                hasAdmin && (
                                                    <Link
                                                        to="/admin"
                                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                    >
                                                        Painel
                                                    </Link>
                                                )
                                            }
                                            <button
                                                onClick={toggleLogin}
                                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Sair
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    {
                        isMenuOpen && (
                            <div className="fixed z-30 w-full h-full bg-white lg:hidden mt-16" >
                                <div className="flex flex-col gap-3 p-3" >
                                    <Link
                                        onClick={handleLinkClick}
                                        to="/admin/"
                                        className={`p-4 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/"
                                            ? "bg-bghover text-primary"
                                            : "hover:bg-bgprimary hover:text-primary "
                                            }`
                                        }
                                    >
                                        {
                                            location.pathname === "/admin/" ? (
                                                <IoHome />
                                            ) : (
                                                <IoHomeOutline />
                                            )
                                        }
                                        Inicio
                                    </Link>
                                    < Link
                                        onClick={handleLinkClick}
                                        to="/admin/tickets"
                                        className={`p-4 rounded-md w-full px-4 items-center flex justify-start gap-3 text-lg ${location.pathname === "/admin/tickets"
                                            ? "bg-bghover text-primary"
                                            : "hover:bg-bgprimary hover:text-primary "
                                            }`}
                                    >
                                        {
                                            location.pathname === "/admin/tickets" ? (
                                                <IoTicket />
                                            ) : (
                                                <IoTicketOutline />
                                            )
                                        }
                                        Inscrições
                                    </Link>
                                </div>
                            </div>
                        )}
                    <div className="p-4 z-0" > {children} </div>
                </div>
            </div>
        </div>
    );
}
