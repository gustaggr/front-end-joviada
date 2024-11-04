import { IoPerson, IoTicket, IoTicketOutline } from "react-icons/io5";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MyTickets() {
    const [hasTicket, setHasTicket] = useState(false);

    const nameuser = 'Gustavo'

    const toggleTicket = () => {
        setHasTicket((prev) => !prev);
    };
    return (
        <div className="bg-background w-screen min-h-screen">
            <NavBar />
            <div className="max-sm:h-screen">
                <div className="flex flex-col justify-center items-center py-5">
                    <div className="flex max-w-[1200px] max-wi:px-4 text-lg w-full gap-1">Meu Perfil / <h1 className="font-semibold">Meus Ingressos</h1></div>
                </div>
                <div className="w-full justify-center items-center flex">
                    <div className="w-full max-w-[1200px] max-wi:px-4 gap-4 flex flex-row">
                        <div className="w-full max-sm:hidden  max-w-[300px] h-full rounded-lg flex flex-col gap-10 justify-center items-center py-8 px-10 bg-white shadow-slate-300 shadow-md backdrop-blur-sm">
                            <div>
                                <h1 className="font-semibold text-[24px]"> Meu Perfil</h1>
                                <h2 className="text-[14px] font-light">Olá, {nameuser}</h2>
                            </div>
                            <div className="flex w-full justify-center items-center flex-col gap-2">
                                <Link to={`/person`} className="flex w-full gap-3 rounded-full p-3 justify-center font-light items-center  text-black hover:bg-bgprimary hover:scale-[1.02] ease-in-out duration-300">
                                    <IoPerson size={'25px'} />
                                    <h1>Meus Dados</h1>
                                </Link>
                                <Link to={`#`} className="flex w-full gap-3 rounded-full p-3 justify-center font-light items-center bg-bgprimary text-primary hover:bg-bghover hover:scale-[1.02] ease-in-out duration-300">
                                    <IoTicketOutline className="text-primary" size={'25px'} />
                                    <h1>Ingressos</h1>
                                </Link>

                                <button onClick={toggleTicket} className="mt-5 p-2 bg-primary text-white rounded">
                                    {hasTicket ? (` Pegar ingresso  `) : (` Remover ingresso`)}
                                </button>
                            </div>
                        </div>

                        <div className="w-full bg-white flex shadow-slate-300 shadow-md backdrop-blur-sm rounded-lg flex-col gap-5 p-8">
                            <div className="flex gap-2 items-center">
                                <hr className="h-6 border bg-primary border-primary w-1" />
                                <h1 className="text-black font-bold text-xl">Meus Ingressos</h1>
                            </div>
                            {hasTicket ? (
                                <div className="w-full flex items-center justify-center flex-col">
                                    <h1 className="text-[70px]">😟</h1>
                                    <h1 className="text-[20px]">Poxa, será que não vou te ver lá?</h1>
                                    <Link className="bg-primary text-white p-2 mt-3 rounded-lg" to={'/event'}>Boraaa??</Link>
                                </div>
                            ) : (
                                <div className="w-full flex items-center justify-center flex-col gap-3">
                                    <Link to={'/ticket'} className="flex justify-between items-center w-full bg-background rounded-lg p-4 gap-5">
                                        <div className="flex gap-5 items-center">
                                            <IoTicket className="text-green-400" size={'40px'} />
                                            <div>
                                                <h1 className="font-light">Nome do participante:</h1>
                                                <h1>Jhon Doe</h1>
                                            </div>
                                            <div>
                                                <h1 className="font-light">Tipo de entrada:</h1>
                                                <h1>Inscrição Geral - Inteira</h1>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <h1 className="font-light">Status:</h1>
                                            <h1 className="text-green-400">Aprovado</h1>
                                        </div>
                                    </Link>
                                    <Link to={'/ticket'} className="flex justify-between items-center w-full bg-background rounded-lg p-4 gap-5">
                                        <div className="flex gap-5 items-center">
                                            <IoTicket className="text-red-400" size={'40px'} />
                                            <div>
                                                <h1 className="font-light">Nome do participante:</h1>
                                                <h1>Jhon Doe</h1>
                                            </div>
                                            <div>
                                                <h1 className="font-light">Tipo de entrada:</h1>
                                                <h1>Inscrição Geral - Inteira</h1>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <h1 className="font-light">Status:</h1>
                                            <h1 className="text-red-400">Recusado</h1>
                                        </div>
                                    </Link>
                                    <Link to={'/ticket'} className="flex justify-between items-center w-full bg-background rounded-lg p-4 gap-5">
                                        <div className="flex gap-5 items-center">
                                            <IoTicket className="text-orange-400" size={'40px'} />
                                            <div>
                                                <h1 className="font-light">Nome do participante:</h1>
                                                <h1>Jhon Doe</h1>
                                            </div>
                                            <div>
                                                <h1 className="font-light">Tipo de entrada:</h1>
                                                <h1>Inscrição Geral - Inteira</h1>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <h1 className="font-light">Status:</h1>
                                            <h1 className="text-orange-400">Pendente</h1>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}