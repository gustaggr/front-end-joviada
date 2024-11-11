import { FaCalendarWeek, FaRegMoneyBillAlt } from "react-icons/fa";
import SideBar from "./components/SideBar";
import { IoTicketOutline } from "react-icons/io5";
import { useEffect } from "react";
import useUserStore from "../../../store/useUserStore";

export default function HomeAdmn() {

    const { nameuser, setFaltam, faltam } = useUserStore();
    const total = "10.350,00";
    const tickets = "96";
    const pending = "7";
    const targetDate = new Date('2024-12-14T23:59:59');

    useEffect(() => {
        const interval = setInterval(() => {
            const timeRemaining = targetDate.getTime() - new Date().getTime();
            if (timeRemaining <= 0) {
                clearInterval(interval);
                setFaltam(0);
            } else {
                setFaltam(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen min-w-screen bg-background">
            <SideBar>
                <div className="w-full h-full flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="font-semibold text-xl">
                            Olá, {nameuser}
                        </div>
                    </div>
                    {/* Ajustando para grid responsivo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="w-full bg-white h-full p-3 rounded-xl gap-1 flex">
                            <div className="flex flex-col gap-3">
                                <div className="flex p-2 items-center justify-center rounded-xl w-16 h-16 bg-green-100">
                                    <FaRegMoneyBillAlt className="text-green-600" size={35} />
                                </div>
                                <div className="flex flex-col">
                                    <h1>Faturamento Total</h1>
                                    <h1 className="text-2xl text-green-600 font-semibold">R$ {total}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white h-full p-3 rounded-xl gap-1 flex">
                            <div className="flex flex-col gap-3">
                                <div className="flex p-2 items-center justify-center rounded-xl w-16 h-16 bg-purple-100">
                                    <IoTicketOutline className="text-primary" size={35} />
                                </div>
                                <div className="flex flex-col">
                                    <h1>Inscrições</h1>
                                    <h1 className="text-2xl text-primary font-semibold">{tickets}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white h-full p-3 rounded-xl gap-1 flex">
                            <div className="flex flex-col gap-3">
                                <div className="flex p-2 items-center justify-center rounded-xl w-16 h-16 bg-orange-100">
                                    <div className="text-orange-600 text-4xl">? </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1>Inscrições Pendentes</h1>
                                    <h1 className="text-2xl text-orange-600 font-semibold">{pending}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white h-full p-3 rounded-xl gap-1 flex">
                            <div className="flex flex-col gap-3">
                                <div className="flex p-2 items-center justify-center rounded-xl w-16 h-16 bg-blue-100">
                                    <FaCalendarWeek className="text-blue-600" size={35} />
                                </div>
                                <div className="flex flex-col">
                                    <h1>Virada de lote em</h1>
                                    <div className="flex items-end gap-1">
                                    <h1 className="text-2xl text-blue-600 font-semibold">{faltam}</h1>
                                    dias
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
                        <div className="bg-white w-full p-3 flex-col flex rounded-xl gap-2">
                            <h1>Incrições</h1>
                            <div className="overflow-auto max-h-[350px] relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                                <table className="w-full text-left table-auto min-w-max">
                                    <thead>
                                        <tr>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Nome Completo
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Status
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Data
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-orange-600">
                                                    Pendente
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-green-600">
                                                    Aprovado
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-red-600">
                                                    Recusado
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-red-600">
                                                    Recusado
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white w-full p-3 flex-col flex rounded-xl gap-2">
                            <h1>Incrições Aprovadas</h1>
                            <div className="overflow-auto max-h-[350px] relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                                <table className="w-full text-left table-auto min-w-max">
                                    <thead>
                                        <tr>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Nome Completo
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Status
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Data
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-green-600">
                                                    Aprovado
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-green-600">
                                                    Aprovado
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-green-600">
                                                    Aprovado
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-green-600">
                                                    Aprovado
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white w-full p-3 flex-col flex rounded-xl gap-2">
                            <h1>Incrições Pendentes</h1>
                            <div className="overflow-auto max-h-[350px] relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                                <table className="w-full text-left table-auto min-w-max">
                                    <thead>
                                        <tr>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Nome Completo
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Status
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                <p className="block text-sm font-normal leading-none text-slate-500">
                                                    Data
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-orange-600">
                                                    Pendente
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-orange-600">
                                                    Pendente
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-orange-600">
                                                    Pendente
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover:bg-slate-50">
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    John Michael
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-orange-600">
                                                    Pendente
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="block text-sm text-slate-800">
                                                    23/04/18
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-white w-full p-3 flex-col flex rounded-xl gap-2">
                            <h1>Incrições Recusadas</h1>
                            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                                <div className="overflow-auto max-h-[350px]">
                                    <table className="w-full text-left table-auto min-w-max">
                                        <thead>
                                            <tr>
                                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                                        Nome Completo
                                                    </p>
                                                </th>
                                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                                        Status
                                                    </p>
                                                </th>
                                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                                        Data
                                                    </p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-slate-50">
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">John Michael</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-red-600">Recusado</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">23/04/18</p>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50">
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">John Michael</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-red-600">Recusado</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">23/04/18</p>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50">
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">John Michael</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-red-600">Recusado</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">23/04/18</p>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50">
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">John Michael</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-red-600">Recusado</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">23/04/18</p>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50">
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">John Michael</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-red-600">Recusado</p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="block text-sm text-slate-800">23/04/18</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </div>
    );
}
