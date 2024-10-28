import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { IoCalendarClearOutline, IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Order: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(2 * 60); // 15 minutos em segundos

    useEffect(() => {
        if (timeLeft <= 0) return; // Interrompe o cronômetro ao chegar a 0

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-hidden">
            <NavBar />
            <div className="relative flex flex-col justify-center items-center p-4 max-sm:mb-20">
                <div className="w-full justify-center max-w-[900px] flex items-start flex-col gap-3 ">
                    <h1 className="text-black font-bold text-3xl flex justify-start w-full items-start text-start">
                        Retiro de Jovens
                    </h1>
                    <div>
                        <div className="text-black font-light mt-2 items-center text-base flex gap-2 uppercase ">
                            <IoCalendarClearOutline size={25} />
                            <div className="max-sm:flex-col flex items-center max-sm:gap-0 gap-2">
                                <span>1 de março de 2024, 16:00</span>
                                <div className="w-5 h-[2px] max-sm:hidden bg-primary"></div>
                                <span>4 de março de 2024, 12:00</span>
                            </div>
                        </div>
                        <div className="text-black font-light mt-2 items-center text-base flex gap-2 uppercase">
                            <IoLocationOutline size={25} />
                            <span>clube campestre</span>
                        </div>
                    </div>
                    <div className="w-full max-w-[900px] bg-backgroundClear p-4 rounded-xl flex flex-col justify-center pb-6 gap-3 shadow-slate-300 shadow-md backdrop-blur-sm">
                        <div className="flex gap-2 items-center">
                            <hr className="h-6 border bg-primary border-primary w-1" />
                            <h1 className="text-black font-bold text-xl">Dados para recebimento</h1>
                        </div>
                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col gap-2 md:w-1/2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    E-mail
                                </h2>
                                <input
                                    disabled
                                    type="text"
                                    className="w-full text-lg p-2 bg-gray-300 rounded-xl outline-none placeholder:text-black text-black"
                                    placeholder="gustavo@gmail.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:w-1/2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Confirmação de e-mail
                                </h2>
                                <input
                                    disabled
                                    type="text"
                                    className="w-full text-lg p-2 bg-gray-300 rounded-xl outline-none placeholder:text-black text-black"
                                    placeholder="gustavo@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 max-sm:flex-col ">
                            <div className="flex flex-col gap-2 sm:w-1/2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Nome
                                </h2>
                                <input
                                    disabled
                                    type="text"
                                    className="w-full text-lg p-2 bg-gray-300 rounded-xl outline-none placeholder:text-black text-black"
                                    placeholder="John"
                                />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-1/2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Sobrenome
                                </h2>
                                <input
                                    type="text"
                                    className="w-full text-lg p-2 bg-gray-300 rounded-xl outline-none placeholder:text-black text-black"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[900px] p-4 rounded-xl flex flex-col items-center justify-center pb-6 gap-3">
                        <div className="bg-[#EBD6FF] border-primary rounded-md items-center h-full text-black border-2 flex gap-3 p-4 w-full max-w-[500px]">
                            <h1 className="font-bold text-3xl">{formatTime(timeLeft)}</h1>
                            <h1>
                                Conclua sua compra dentro do prazo, após o prazo, sua reserva expirará e o pedido
                                será cancelado.
                            </h1>
                        </div>
                    </div>

                    <div className="w-full max-w-[900px] bg-backgroundClear p-4 rounded-xl flex flex-col justify-center pb-6 gap-3 shadow-slate-300 shadow-md backdrop-blur-sm">
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 items-center">
                                <hr className="h-6 border bg-primary border-primary w-1" />
                                <h1 className="text-black font-bold text-xl">Dados dos participantes</h1>
                            </div>
                            <div className='text-slate-400 '>
                                <h2>Ingresso nº 1</h2>
                                <h2>Inscrição Geral - Inteira</h2>
                            </div>
                        </div>
                        <div className="flex gap-4 max-sm:flex-col">
                            <div className="flex flex-col gap-2 sm:w-1/2">
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
                            <div className="flex flex-col gap-2 sm:w-1/2">
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
                        </div>
                        <div className="flex gap-4 max-sm:flex-col">
                            <div className="flex flex-col gap-2 sm:w-1/2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Telefone<h3 className="text-red-500">*</h3>
                                </h2>
                                <input
                                    required
                                    type="text"
                                    className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                                    placeholder="(34) 9xxxx-xxxx"
                                />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-1/2">
                                <h2 className="text-black text-sm flex gap-1 font-normal">
                                    Data de Nascimento<h3 className="text-red-500">*</h3>
                                </h2>
                                <input
                                    required
                                    type="date"
                                    className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[900px] bg-backgroundClear p-4 rounded-xl flex flex-col justify-center pb-6 gap-3 shadow-slate-300 shadow-md backdrop-blur-sm">
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 items-center">
                                <hr className="h-6 border bg-primary border-primary w-1" />
                                <h1 className="text-black font-bold text-xl">Resumo da compra</h1>
                            </div>
                            <div className='text-black text-xs justify-between flex mt-3'>
                                <h2 className='w-1/2'>INGRESSOS</h2>
                                <h2>QTDE.</h2>
                                <h2>PREÇO UNITÁRIO</h2>
                            </div>
                            <div className='text-black text-base justify-between flex '>
                                <h2 className='w-1/2'>Inscrição Geral</h2>
                                <h2>1</h2>
                                <h2>R$ 125,00</h2>
                            </div>
                        </div>
                        <hr />

                        <h1 className='text-gray-500'>Obs: Compras parceladas terão taxas adicionais aplicadas pela plataforma de cobrança. Verifique o valor total antes de finalizar a compra na página a seguir.</h1>
                        <div className="flex gap-4 justify-between">
                            <h2 className='text-lg font-bold'>Preço Total</h2>
                            <h2 className='text-lg font-bold'>R$ 125,00</h2>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Link
                            to={'/order'}
                            className={`items-center flex justify-center rounded-md text-xl w-1/2 max-sm:w-full py-2 p-1 bg-primary text-white`}
                        >
                            Continuar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
