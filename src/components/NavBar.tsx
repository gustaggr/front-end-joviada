import { IoHomeOutline, IoPersonOutline, IoTicketOutline } from "react-icons/io5";

export default function NavBar() {
    
    return (
        <>
            <div className="w-screen z-10 bg-backgroundClear h-16 items-center justify-center flex px-20">
                <div className="text-white w-full items-center justify-between flex xl:p-10 xl:w-[1200px]">
                    <div>
                        <h1 className="font-bold text-white text-xl">Joviada Coro</h1>
                    </div>
                    <div className="gap-4 items-center font-medium text-base hidden sm:flex">
                        <a className="">Registrar</a>
                        <a className="bg-primary p-2 rounded-lg">Entrar</a>
                    </div>
                </div>
            </div>
            <div className="w-full z-10 bg-backgroundClear h-16 fixed bottom-0 left-0 flex sm:hidden items-center justify-around text-white">
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