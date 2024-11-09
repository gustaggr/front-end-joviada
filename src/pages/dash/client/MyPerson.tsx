import { IoCloseOutline, IoPerson, IoTicketOutline } from "react-icons/io5";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";

Modal.setAppElement("#root");

export default function MyPerson() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameuser, setnameuser] = useState('Gustavo');
    const [email, setemail] = useState('gustavo@gmail.com');
    const [tempName, setTempName] = useState(nameuser);  // Armazenando temporariamente o novo nome
    const [tempEmail, setTempEmail] = useState(email);  // Armazenando temporariamente o novo email

    const correctCurrentPassword = "1234"; // Senha atual para verificação

    function openModal(event: { preventDefault: () => void; }) {
        event.preventDefault();
        setModalIsOpen(true);
    }

    function updateData(e: React.FormEvent) {
        e.preventDefault(); // Previne o comportamento padrão de submit do formulário

        // Validação de campos
        if (tempName === "" && tempEmail === "") {
            toast.error("Nome e email estão em branco");
        } else {
            if (tempName === "") {
                toast.error("Nome em branco");
            }
            if (tempEmail === "") {
                toast.error("Email em branco");
            } else {
                // Atualiza permanentemente os dados
                setnameuser(tempName);
                setemail(tempEmail);
                toast.success("Dados atualizados com sucesso!");
            }
        }
    }

    function closeModal() {
        setModalIsOpen(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }

    function handlePasswordChange() {
        // Verificar se a senha atual está correta
        if (currentPassword !== correctCurrentPassword) {
            toast.error("Senha atual incorreta.");
            setCurrentPassword("");
            return;
        }

        // Verificar se as novas senhas coincidem
        if (newPassword !== confirmPassword) {
            toast.error("As senhas não coincidem.");
            return;
        }

        // Lógica para atualizar a senha, se necessário
        closeModal();
        toast.success("Senha alterada com sucesso!");
    }

    return (
        <div className="bg-background w-screen min-h-screen">
            <NavBar />
            <div className="max-sm:h-screen">
                <div className="flex flex-col justify-center items-center py-5">
                    <div className="flex max-w-[1200px] max-sm:flex-col max-wi:px-4 text-lg w-full gap-1">
                        Meu Perfil / <h1 className="font-semibold">Meus Dados</h1>
                    </div>
                </div>
                <div className="w-full justify-center items-center flex">
                    <div className="w-full max-w-[1200px] max-wi:px-4 gap-4 flex flex-row">
                        <div className="w-full max-sm:hidden max-w-[300px] h-full rounded-lg flex flex-col gap-10 justify-center items-center py-8 px-10 bg-white shadow-slate-300 shadow-md backdrop-blur-sm">
                            <div>
                                <h1 className="font-semibold text-[24px]"> Meu Perfil</h1>
                                <h2 className="text-[14px] font-light">Olá, {nameuser}</h2>
                            </div>
                            <div className="flex w-full justify-center items-center flex-col gap-2">
                                <Link to="#" className="flex w-full gap-3 rounded-full p-3 justify-center font-light items-center bg-bgprimary text-primary hover:bg-bghover hover:scale-[1.02] ease-in-out duration-300">
                                    <IoPerson size={'25px'} />
                                    <h1>Meus Dados</h1>
                                </Link>
                                <Link to="/tickets" className="flex w-full gap-3 rounded-full p-3 justify-center font-light items-center text-black hover:bg-bgprimary hover:scale-[1.02] ease-in-out duration-300">
                                    <IoTicketOutline className="text-primary" size={'25px'} />
                                    <h1>Ingressos</h1>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full bg-white flex shadow-slate-300 shadow-md backdrop-blur-sm rounded-lg mb-20 flex-col gap-5 p-8">
                            <div className="flex gap-2 items-center">
                                <hr className="h-6 border bg-primary border-primary w-1" />
                                <h1 className="text-black font-bold text-xl">Meus Dados</h1>
                            </div>

                            {/* Formulário para alterar dados */}
                            <form className="flex flex-col   gap-5" onSubmit={updateData}>
                                <div className="flex gap-4 max-md:flex-col">
                                    <div className="flex flex-col gap-2 md:w-full">
                                        <h2 className="text-black text-sm flex gap-1 font-normal">Nome Completo</h2>
                                        <input
                                            type="text"
                                            className="w-full text-lg p-2 bg-gray-100 rounded-xl outline-none"
                                            placeholder="Jhon Doe"
                                            value={tempName}
                                            onChange={(e) => setTempName(e.target.value)}  // Atualiza o nome temporário
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 flex-col">
                                    <div className="flex flex-col gap-2 sm:w-full">
                                        <h2 className="text-black text-sm flex gap-1 font-normal">Email</h2>
                                        <input
                                            type="email"
                                            className="w-full text-lg p-2 bg-gray-100 rounded-xl outline-none"
                                            placeholder="seuemail@gmail.com"
                                            value={tempEmail}
                                            onChange={(e) => setTempEmail(e.target.value)}  // Atualiza o email temporário
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full max-w-[900px] rounded-xl flex flex-col items-center justify-center gap-3">
                                    <div className="bg-white flex justify-between max-sm:flex-col max-sm:gap-3 border-gray-200 rounded-md h-full text-black border-2 gap-1 p-4 w-full">
                                        <div>
                                            <h1 className="text-sm font-semibold">Senha</h1>
                                            <h1 className="text-sm">Deseja alterar sua senha?</h1>
                                        </div>
                                        <button onClick={openModal} className="bg-bgprimary text-primary p-2 border-primary border-2 rounded-lg px-5 hover:scale-[1.02] ease-in-out duration-300">
                                            Alterar Senha
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-primary text-white p-2 rounded-lg px-5 hover:scale-[1.02] w-full ease-in-out duration-300"
                                >
                                    Salvar Alterações
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para alterar a senha */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="flex items-center justify-center h-screen"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-20"
            >
                <div className="bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md">
                    <div className="flex items-start justify-between">
                        <h2 className="text-xl font-semibold mb-4">Alterar Senha</h2>
                        <IoCloseOutline className="cursor-pointer" onClick={closeModal} size={20} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-col gap-2 sm:w-full">
                                <h2 className="text-black text-sm flex gap-1 font-normal">Senha atual</h2>
                                <input
                                    type="password"
                                    className="w-full text-lg p-2 bg-gray-100 rounded-xl outline-none"
                                    placeholder="******"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-col gap-2 sm:w-full">
                                <h2 className="text-black text-sm flex gap-1 font-normal">Nova Senha</h2>
                                <input
                                    type="password"
                                    className="w-full text-lg p-2 bg-gray-100 rounded-xl outline-none"
                                    placeholder="******"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <div className="flex flex-col gap-2 sm:w-full">
                                <h2 className="text-black text-sm flex gap-1 font-normal">Confirmar Nova Senha</h2>
                                <input
                                    type="password"
                                    className="w-full text-lg p-2 bg-gray-100 rounded-xl outline-none"
                                    placeholder="******"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button
                            onClick={handlePasswordChange}
                            className="bg-primary text-white p-2 rounded-lg hover:scale-[1.02] ease-in-out duration-300"
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </Modal>

            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
