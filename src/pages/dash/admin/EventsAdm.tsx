import { FaEdit, FaEye, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import SideBar from "./components/SideBar";
import Modal from "react-modal";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';

export default function EventsAdm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Estado para armazenar a imagem
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    onDrop: (acceptedFiles) => {
      // Gerar URL da imagem para exibição
      if (acceptedFiles && acceptedFiles[0]) {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);
        setImagePreview(fileUrl); // Definir a imagem para visualização
      }
    }
  });

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  const data = [
    { id: 1, abrevent: "RTRJC", name: "Retiro"},
    { id: 2, abrevent: "ECN", name: "Encotro"},
  ];

  return (
    <div className="min-h-screen min-w-screen bg-background">
      <SideBar>
        <div className="flex flex-col w-full h-full gap-4">
          <div className="max-sm:flex-col justify-between flex items-center max-sm:gap-2">
            <h1 className="font-semibold text-xl max-sm:w-full max-sm:text-start">Eventos</h1>
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
                      Nome do Evento
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-sm font-normal leading-none text-slate-500">
                      Abreviatura
                    </p>
                  </th>
                  <th className="p-4 border-b justify-end flex border-slate-300 bg-slate-50">
                    <p className="block text-sm w-20 items-center justify-center font-normal leading-none text-slate-500">
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
                      <p className="block text-sm text-slate-800">{item.abrevent}</p>
                    </td>
                    <td className="p-4 border-b pr-10 border-slate-200 justify-end flex">
                      <div className="flex  gap-3 justify-center items-center">
                        <FaEye className="cursor-pointer text-green-600" />
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
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-20"
      >
        <div className="bg-white font-lexend p-8 rounded-lg shadow-md w-[90%] max-w-md max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Adicionar Evento</h2>
            <IoCloseOutline className="cursor-pointer" onClick={closeModal} size={20} />
          </div>
          <div className="flex flex-col space-y-4">
            {/* Filtro por Status */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h2 className="text-black text-sm flex gap-1 font-normal">
                  Nome do Evento<h3 className="text-red-500">*</h3>
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
                  Local<h3 className="text-red-500">*</h3>
                </h2>
                <input
                  required
                  type="text"
                  className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-black text-sm flex gap-1 font-normal">
                  Data de Inicio<h3 className="text-red-500">*</h3>
                </h2>
                <input
                  required
                  type="datetime-local"
                  className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-black text-sm flex gap-1 font-normal">
                  Data de Finalização<h3 className="text-red-500">*</h3>
                </h2>
                <input
                  required
                  type="datetime-local"
                  className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-black text-sm flex gap-1 font-normal">
                  Descrição<h3 className="text-red-500">*</h3>
                </h2>
                <textarea
                  className="w-full text-lg p-2 bg-background rounded-xl outline-none placeholder:text-slate-600 text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-black text-sm flex gap-1 font-normal">
                  Imagem do Evento<h3 className="text-red-500">*</h3>
                </h2>
                <div
                  {...getRootProps()}
                  className="w-full p-6 bg-gradient-to-r bg-primary rounded-xl text-white cursor-pointer hover:bg-purple-900 focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
                >
                  <input {...getInputProps()} />
                  <p className="text-center text-lg">Arraste ou clique para selecionar um arquivo</p>
                </div>
                {/* Exibindo a imagem selecionada */}
                {imagePreview && (
                  <div className="mt-4">
                    <img src={imagePreview} alt="Prévia" className="w-full h-auto rounded-lg" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex max-sm:flex-col justify-end mt-6 gap-2">
            <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-300">
              Cancelar
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-purple-300">
              Adicionar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
