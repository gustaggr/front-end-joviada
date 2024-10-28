import NavBar from "../components/NavBar"

export default function Register() {
    return (
        <div className="w-screen min-h-screen bg-background flex flex-col">
            <NavBar />
            <div className="w-full h-full justify-center flex-col items-center flex p-4 mt-10">
                <div className="flex flex-col max-w-[600px] w-full items-start gap-8">
                    <h1 className="text-white font-bold text-lg">Crie uma conta</h1>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-white text-sm flex gap-1 font-normal">Nome Completo<h3 className="text-red-500">*</h3></h2>
                        <input required type="text" className="w-full text-lg p-2 bg-backgroundClear rounded-xl outline-none placeholder:text-slate-600 text-white" placeholder="John Doe"></input>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-white text-sm flex gap-1 font-normal">E-mail<h3 className="text-red-500">*</h3></h2>
                        <input required type="email" className="w-full text-lg p-2 bg-backgroundClear rounded-xl outline-none placeholder:text-slate-600 text-white" placeholder="seunome@hotmail.com"></input>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-white text-sm flex gap-1 font-normal">Senha<h3 className="text-red-500">*</h3></h2>
                        <input required className="w-full text-lg p-2 bg-backgroundClear  rounded-xl outline-none text-white"></input>
                    </div>
                    <button className="w-full bg-primary text-lg font-semibold text-white p-2 rounded-lg">Criar Conta</button>
                </div>
            </div>
        </div>
    )
}