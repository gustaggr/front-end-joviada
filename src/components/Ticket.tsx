import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoRemoveCircle } from "react-icons/io5";

interface TicketProps {
  name: string;
  allotment: string;
  value: number; // Agora o valor é numérico
  onChange: (amount: number, value: number) => void; // Callback para enviar mudanças ao pai
}

export default function Ticket({ name, allotment, value, onChange }: TicketProps) {
  const [quantity, setQuantity] = useState<number>(0);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(1, value); // Envia mudança para o pai
  };

  const decrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(-1, value); // Envia mudança para o pai
    }
  };

  return (
    <>
      <div className="justify-between w-full flex ">
        <div className="justify-start flex flex-col p-6 w-full">
          <h1 className="text-black font-semibold text-lg">{name}</h1>
          <h1 className="text-slate-400 font-light">{allotment}</h1>
          <h1 className="text-black mt-2 font-light">R$ {value.toFixed(2)}</h1>
        </div>
        <div className="justify-center flex p-6 gap-2 items-center">
          <div className="text-primary text-2xl cursor-pointer" onClick={decrement}>
            <IoRemoveCircle />
          </div>
          <h1 className="text-black text-2xl">{quantity}</h1>
          <div className="text-primary text-2xl cursor-pointer" onClick={increment}>
            <IoIosAddCircle />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-dashed border-slate-300 w-full"></div>
    </>
  );
}
