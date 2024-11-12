import { FaEdit, FaFilter, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import SideBar from "./components/SideBar";
import Modal from "react-modal";
import useUserStore from "../../../store/useUserStore";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

Modal.setAppElement("#root");


export default function TicketsAdm() {
    const { modalIsOpen, setModalIsOpen, addModalIsOpen, setAddModalIsOpen } = useUserStore();
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número

        if (value.length > 0) {
            value = `(${value.substring(0, 2)}) ` + value.substring(2);
        }
        if (value.length > 10) {
            value = value.substring(0, 10) + "-" + value.substring(10, 14);
        }

        setPhone(value);
    };

    function openModal(event: { preventDefault: () => void; }) {
        event.preventDefault();
        setModalIsOpen(true);
    }

    const data = [
        { id: 1, name: "John Michael", status: "Pendente", date: "23/04/18", birthday: "12/08/90", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 2, name: "Sarah Smith", status: "Aprovado", date: "15/05/20", birthday: "30/11/85", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 3, name: "Emma Brown", status: "Recusado", date: "02/03/19", birthday: "08/01/92", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 4, name: "Michael Green", status: "Pendente", date: "10/07/21", birthday: "15/09/88", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 5, name: "Olivia White", status: "Aprovado", date: "19/08/18", birthday: "03/04/93", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 6, name: "David Johnson", status: "Recusado", date: "28/11/19", birthday: "21/07/91", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 7, name: "Sophia Lee", status: "Pendente", date: "06/12/17", birthday: "09/05/94", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 8, name: "Chris Evans", status: "Aprovado", date: "12/02/22", birthday: "19/10/89", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 9, name: "Emily Clark", status: "Recusado", date: "04/09/18", birthday: "26/02/86", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 10, name: "Daniel Martinez", status: "Pendente", date: "29/10/20", birthday: "15/12/87", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 11, name: "Grace Adams", status: "Aprovado", date: "03/01/19", birthday: "05/08/90", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 12, name: "James Wilson", status: "Recusado", date: "08/05/21", birthday: "30/06/95", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 13, name: "Anna Roberts", status: "Pendente", date: "21/04/18", birthday: "28/11/88", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 14, name: "Lucas Brown", status: "Aprovado", date: "17/03/20", birthday: "17/03/84", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 15, name: "Lily Green", status: "Recusado", date: "23/06/19", birthday: "14/07/92", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 16, name: "Ethan Thomas", status: "Pendente", date: "15/09/21", birthday: "21/01/91", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 17, name: "Zoe White", status: "Aprovado", date: "18/10/18", birthday: "02/03/89", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 18, name: "Jack Davis", status: "Recusado", date: "07/11/20", birthday: "22/09/93", type: "Meia", idpgt:"MP234HD23",  value: 100 },
        { id: 19, name: "Ella King", status: "Pendente", date: "25/07/22", birthday: "19/12/87", type: "Inteira", idpgt:"MP234HD23",  value: 200 },
        { id: 20, name: "William Scott", status: "Aprovado", date: "14/08/19", birthday: "05/06/90", type: "Meia", idpgt:"MP234HD23",  value: 100 }
    ];


    function closeModal() {
        setModalIsOpen(false);
    }

    function openAddModal(event: { preventDefault: () => void; }) {
        event.preventDefault();
        setAddModalIsOpen(true);
    }

    function closeAddModal() {
        setAddModalIsOpen(false);
    }


    return (
        <div className="max-h-screen  bg-background">
            <SideBar>
                <div className="flex flex-col w-full h-full gap-4">
                    <div className="max-sm:flex-col  justify-between flex items-center max-sm:gap-2">
                        <h1 className="font-semibold text-xl max-sm:w-full max-sm:text-start">Inscrições</h1>
                        <div className="flex gap-2 flex-row max-sm: justify-between max-sm:w-full">
                            <div
                                className={`flex w-full items-center justify-between rounded-md bg-gray-50 border border-gray-200 p-1 px-2`}
                            >
                                <FaSearch
                                    className="text-purple-600 font-semibold hover:underline"
                                />
                                <input
                                    placeholder="Pesquisar..."
                                    className="flex-grow w-full rounded-md outline-none p-1 text-gray-500 bg-transparent placeholder:text-slate-400"
                                />
                            </div>
                            <button onClick={openModal} className="bg-primary text-white text-lg font-semibold p-1 px-3 rounded-md hover:bg-bghover hover:text-primary flex items-center gap-1">
                                <FaFilter />
                                Filtro
                            </button>
                            <button onClick={openAddModal} className="bg-primary text-white text-lg font-semibold p-1 px-3 rounded-md hover:bg-bghover hover:text-primary flex items-center gap-1">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-auto max-h-[600px] relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <table className="w-ful text-left table-auto">
                            <thead>
                                <tr>
                                    <th className="p-4 w-10 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            ID
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            Nome Completo
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            Tipo
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            Valor
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            Status
                                        </p>
                                    </th>

                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            Nascimento
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            Data
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            ID Pagamento
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            Ações
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">{item.id}</p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">{item.name}</p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">{item.type}</p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm font-semibold text-slate-800">R$ {item.value},00</p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p
                                                className={`block text-sm ${item.status === "Aprovado" ? "text-green-600" : item.status === "Pendente" ? "text-orange-600" : "text-red-600"
                                                    }`}
                                            >
                                                {item.status}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">{item.date}</p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">{item.birthday}</p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">{item.idpgt}</p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <div className="flex gap-3 items-center">
                                                <FaEdit className="cursor-pointer text-blue-600" />
                                                <FaTrash className="cursor-pointer text-red-600" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </SideBar>
            <Modal
                isOpen={addModalIsOpen}
                onRequestClose={closeAddModal}
                className="flex items-center justify-center h-screen"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-20"
            >
                <div className="bg-white font-lexend p-8 rounded-lg shadow-md w-[90%] max-w-md">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold mb-4">Adicionar Participante</h2>
                        <IoCloseOutline className="cursor-pointer" onClick={closeAddModal} size={20} />
                    </div>
                    <div className="flex flex-col space-y-4">
                        {/* Filtro por Status */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Nome<h3 className="text-red-500">*</h3>
                                </h2>
                                <input
                                    required
                                    type="text"
                                    className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Sobrenome<h3 className="text-red-500">*</h3>
                                </h2>
                                <input
                                    required
                                    type="text"
                                    className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Telefone<h3 className="text-red-500">*</h3>
                                </h2>
                                <input
                                    required
                                    type="text"
                                    className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                                    placeholder="(34) 9xxxx-xxxx"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Data de Nascimento<h3 className="text-red-500">*</h3>
                                </h2>
                                <input
                                    required
                                    type="date"
                                    className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Status<h3 className="text-red-500">*</h3>
                                </h2>
                                <select
                                    required
                                    className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                                >
                                    <option value="volvo">Aprovado</option>
                                    <option value="saab">Pedente</option>
                                    <option value="mercedes">Recusado</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-sm:flex-col justify-end mt-6 gap-2">
                        <button onClick={closeAddModal} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-300">
                            Cancelar
                        </button>
                        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-purple-300">
                            Adicionar
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="flex items-center justify-center h-screen"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-20"
            >
                <div className="bg-white font-lexend p-8 rounded-lg shadow-md w-[90%] max-w-md">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold mb-4">Filtros</h2>
                        <IoCloseOutline className="cursor-pointer" onClick={closeModal} size={20} />
                    </div>
                    <div className="flex flex-col space-y-4">
                        {/* Filtro por Status */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">Status</h3>
                            <div className="flex flex-col space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Pendente
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Aprovado
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Recusado
                                </label>
                            </div>
                        </div>

                        {/* Filtro por Data */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">Data</h3>
                            <div className="flex flex-col space-y-2">
                                <label className="flex items-center">
                                    <input type="date" className="mr-2 p-2 border rounded" />
                                </label>
                            </div>
                        </div>

                        {/* Filtro por Tipo */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">Tipo</h3>
                            <div className="flex flex-col space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Inteira
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Meia
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-sm:flex-col justify-end mt-6 gap-2">
                        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-300">
                            Remover Filtros
                        </button>
                        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-purple-300">
                            Aplicar Filtros
                        </button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}