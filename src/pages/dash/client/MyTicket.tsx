import { IoDownloadOutline } from "react-icons/io5";
import NavBar from "../../../components/NavBar";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "qrcode"; // Biblioteca qrcode
import React from "react";

export default function MyTicket() {
    const nameticket = "John Doe";
    const idticket = "13UIID23D"
    const qrCodeURL = `http://localhost/ticket/${idticket}`;

    const generateQRCode = async () => {
        try {
            const qrCodeCanvas = document.getElementById("qrcode-canvas");
            if (qrCodeCanvas) {
                await QRCode.toCanvas(qrCodeCanvas, qrCodeURL, {
                    width: 160,
                });
            }
        } catch (err) {
            console.error("Erro ao gerar QR Code:", err);
        }
    };

    const downloadPDF = () => {
        const ticketElement = document.getElementById("ticket");
        if (ticketElement) {
            html2canvas(ticketElement, { scale: 2 }).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("p", "mm", "a4");

                // Definindo margens
                const margin = 10;
                const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

                // Adicionando a imagem com proporção correta e margem
                pdf.addImage(imgData, "PNG", margin, margin, pdfWidth, pdfHeight);
                pdf.save(`Ingresso - ${nameticket}.pdf`);
            });
        }
    };

    // Gera o QR Code após renderizar o componente
    React.useEffect(() => {
        generateQRCode();
    }, []);

    return (
        <div className="bg-background w-screen min-h-screen">
            <NavBar />
            <div className="justify-center items-center flex flex-col h-sc max-wi:p-3">
                <div className="flex flex-col justify-start max-w-[1200px] items-start w-full py-5">
                    <div className="flex max-w-[1200px] max-wi:px-4 text-lg w-full gap-1">
                        Meu Perfil / <h1 className="font-semibold">Meus Ingressos</h1>
                    </div>
                </div>
                {/* Ingresso */}
                <div id="ticket" className="w-full justify-center items-center flex flex-col max-w-[1200px] rounded-md bg-white p-3">
                    <div className="flex justify-between w-full min-sm:px-20 mb-3">
                        <img className="w-60 max-sm:w-24 object-contain" src="/namelogo.svg" alt="Logo" />
                        <div className="flex flex-col w-full items-center">
                            <h1>EVENTO:</h1>
                            <h2>Retiro Espiritual 2024</h2>
                        </div>
                    </div>
                    <div className="border-t-2 border-black w-full"></div>
                    <div className="flex justify-between w-full min-sm:px-20">
                        <div className="flex flex-col w-1/3 items-start text-sm p-3">
                            <h1>Data de Inicio:</h1>
                            <h2 className="font-light">1 de março de 2024 às 16h</h2>
                            <h1>Data de Finalização:</h1>
                            <h2 className="font-light">4 de março de 2024 às 12h</h2>
                        </div>
                        <div className="border-r-2 border-black"></div>
                        <div className="flex flex-col w-full items-start text-sm p-3">
                            <h1>Local:</h1>
                            <h2 className="font-light">Clube Campestre (Grupo Cunha)</h2>
                            <h1>Endereço:</h1>
                            <h2 className="font-light">BR-352 - Coromandel, MG, 38550-000</h2>
                        </div>
                    </div>
                    <div className="border-t-2 border-black w-full"></div>
                    <div className="flex justify-between w-full min-sm:px-20">
                        <div className="flex flex-col w-full items-center py-8 justify-center text-sm p-3">
                            <h1>Inscrição:</h1>
                            <h2 className="font-light">Inscrição Geral - Meia</h2>
                        </div>
                        <div className="border-r-2 border-black"></div>
                        <div className="flex flex-col w-full items-center py-8 justify-center text-sm p-3">
                            <h1>Valor:</h1>
                            <h2 className="font-light">R$ 125,00</h2>
                        </div>
                    </div>
                    <div className="border-t-2 border-black w-full"></div>
                    <div className="flex justify-between w-full min-sm:px-8">
                        <div className="flex flex-col items-start justify-center text-sm">
                            {/* Canvas para QR Code */}
                            <canvas id="qrcode-canvas"></canvas>
                        </div>
                        <div className="flex flex-col w-full items-start py-8 justify-center text-sm p-3">
                            <h1>Pedido:</h1>
                            <h2 className="font-light">{idticket}</h2>
                            <h1>Portador:</h1>
                            <h2 className="font-light">{nameticket}</h2>
                        </div>
                    </div>
                </div>
                {/* Fim Ingresso */}
                <div className="flex w-full max-w-[1200px] py-3 items-end justify-end mb-20">
                    <button onClick={downloadPDF} className="text-white gap-2 bg-primary flex items-center p-2 rounded-lg">
                        <IoDownloadOutline /> Baixar Ingresso
                    </button>
                </div>
            </div>
        </div>
    );
}
