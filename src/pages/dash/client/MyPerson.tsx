import { IoPerson, IoTicketOutline } from "react-icons/io5";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";

export default function MyPerson() {
    const nameuser = 'Gustavo'
    return (
        <div className="bg-background w-screen min-h-screen">
            <NavBar />
            <div className="max-sm:h-screen">
                <div className="flex flex-col justify-center items-center py-5">
                    <div className="flex max-w-[1200px] max-wi:px-4 text-lg w-full gap-1">Meu Perfil / <h1 className="font-semibold">Meus Dados</h1></div>
                </div>
                <div className="w-full justify-center items-center flex">
                    <div className="w-full max-w-[1200px] max-wi:px-4 gap-4 flex flex-row">
                        <div className="w-full max-sm:hidden  max-w-[300px] h-full rounded-lg flex flex-col gap-10 justify-center items-center py-8 px-10 bg-white shadow-slate-300 shadow-md backdrop-blur-sm">
                            <div>
                                <h1 className="font-semibold text-[24px]"> Meu Perfil</h1>
                                <h2 className="text-[14px] font-light">Olá, {nameuser}</h2>
                            </div>
                            <div className="flex w-full justify-center items-center flex-col gap-2">
                            <Link to={`#`} className="flex w-full gap-3 rounded-full p-3 justify-center font-light items-center bg-bgprimary text-primary hover:bg-bghover hover:scale-[1.02] ease-in-out duration-300">
                                    <IoPerson size={'25px'} />
                                    <h1>Meus Dados</h1>
                                </Link>
                                <Link to={`/tickets`} className="flex w-full gap-3 rounded-full p-3 justify-center font-light items-center  text-black hover:bg-bgprimary hover:scale-[1.02] ease-in-out duration-300">
                                    <IoTicketOutline className="text-primary" size={'25px'} />
                                    <h1>Ingressos</h1>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full bg-white flex shadow-slate-300 shadow-md backdrop-blur-sm rounded-lg flex-col gap-5 p-8">
                            <div className="flex gap-2 items-center">
                                <hr className="h-6 border bg-primary border-primary w-1" />
                                <h1 className="text-black font-bold text-xl">Meus Dados</h1>
                            </div>
                            <div className="flex gap-4 max-md:flex-col">
                                <div className="flex flex-col gap-2 md:w-full">
                                    <h2 className="text-black text-sm flex gap-1 font-normal">
                                        Nome Completo
                                    </h2>
                                    <input
                                        type="text"
                                        className="w-full text-lg p-2 bg-gray-100 rounded-xl outline-none"
                                        placeholder="Jhon Doe"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col ">
                                <div className="flex flex-col gap-2 sm:w-full">
                                    <h2 className="text-black text-sm flex gap-1 font-normal">
                                        Email
                                    </h2>
                                    <input
                                        type="text"
                                        className="w-full text-lg p-2 bg-gray-100 rounded-xl outline-none"
                                        placeholder="seuemail@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="w-full max-w-[900px] rounded-xl flex flex-col items-center justify-center pb-6 gap-3">
                                <div className="bg-white flex justify-between max-sm:flex-col max-sm:gap-3  border-gray-200 rounded-md h-full text-black border-2 gap-1 p-4 w-full">
                                    <div>
                                        <h1 className="text-sm font-semibold">
                                            Senha
                                        </h1>
                                        <h1 className="text-sm">
                                            Deseja alterar sua senha?
                                        </h1>
                                    </div>
                                    <button className="bg-bgprimary text-primary p-2 border-primary border-2 rounded-lg px-5 hover:scale-[1.02] ease-in-out duration-300">
                                        Alterar Senha
                                    </button>
                                </div>
                            </div>
                            <button className="bg-primary text-white p-2 rounded-lg px-5 hover:scale-[1.02] ease-in-out duration-300">
                                Salvar Alterações
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}