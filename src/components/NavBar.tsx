import { IoHomeOutline, IoPersonOutline, IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavBar() {
    
    return (
        <>
            <div className="w-screen z-10 bg-backgroundClear h-16 items-center justify-center flex px-5">
                <div className="text-black w-full items-center justify-between flex max-w-[1200px]">
                    <div>
                        <Link to={'/'} className="font-bold text-black text-xl"><img className="w-52" src='../../public/namelogo.svg'/></Link>
                    </div>
                    <div className="gap-4 items-center font-medium text-base hidden sm:flex">
                        <Link to={"/register"} className="text-primary">Registrar</Link>
                        <Link to={"/login"} className="bg-primary p-2 text-white rounded-lg">Entrar</Link>
                    </div>
                </div>
            </div>
            <div className="w-full z-10 bg-backgroundClear h-16 fixed bottom-0 left-0 flex sm:hidden items-center justify-around text-black">
                <a className="flex flex-col items-center">
                    <IoHomeOutline size={'30px'} />
                    <span className="text-xs">Inicio</span>
                </a>
                <a className="flex flex-col items-center gap-1">
                    <IoTicketOutline size={'30px'} />
                    <span className="text-xs">Ingressos</span>
                </a>
                <a className="flex flex-col items-center">
                    <IoPersonOutline size={'30px'} />
                    <span className="text-xs">Minha Conta</span>
                </a>
            </div>
        </>
    )
}