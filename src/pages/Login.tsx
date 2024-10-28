import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function Login() {
    return (
        <div className="w-screen min-h-screen bg-background flex flex-col">
            <NavBar />
            <div className="w-full h-full justify-center flex-col items-center flex p-4 mt-10">
                <div className="flex flex-col max-w-[600px] w-full items-start gap-8">
                    <h1 className="text-white font-bold text-lg">Acesse sua conta</h1>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-white text-sm flex gap-1 font-normal">E-mail<h3 className="text-red-500">*</h3></h2>
                        <input required type="email" className="w-full text-lg p-2 bg-backgroundClear rounded-xl outline-none text-white" placeholder="seunome@hotmail.com"></input>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-white text-sm flex gap-1 font-normal">Senha<h3 className="text-red-500">*</h3></h2>
                        <input required className="w-full text-lg p-2 bg-backgroundClear  rounded-xl outline-none text-white"></input>
                        <Link to={"/event"} className="text-slate-400 mt-[-14px]">Esqueceu sua senha?</Link>
                    </div>
                    <button className="w-full bg-primary text-lg font-semibold text-white p-2 rounded-lg">Acessar Conta</button>
                </div>
            </div>
        </div>
    )
}