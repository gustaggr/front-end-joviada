import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { IoCalendarClearOutline, IoLocationOutline } from 'react-icons/io5';
import Ticket from '../components/Ticket';
import { CiShoppingCart } from 'react-icons/ci';

interface Coupon {
  code: string;
  discount: number; // Porcentagem de desconto
}

const coupons: Coupon[] = [
  { code: '50OFF', discount: 50 },
  { code: 'CARECA', discount: 40 },
  { code: '10OFF', discount: 10 }, // Exemplo adicional
];

const Event: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [discountedTotal, setDiscountedTotal] = useState<number>(0);
  const [couponInput, setCouponInput] = useState<string>(''); // Cupom inserido pelo usuário
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null); // Cupom aplicado

  const handleTicketChange = (amount: number, value: number) => {
    const newTotal = total + amount * value;
    setTotal(newTotal);
    setDiscountedTotal(
      appliedCoupon ? newTotal * (1 - appliedCoupon.discount / 100) : newTotal
    );
  };

  const applyCoupon = () => {
    const foundCoupon = coupons.find(
      (coupon) => coupon.code.toUpperCase() === couponInput.toUpperCase()
    );

    if (foundCoupon) {
      setAppliedCoupon(foundCoupon);
      setDiscountedTotal(total * (1 - foundCoupon.discount / 100));
    } else {
      alert('Cupom inválido!');
      setAppliedCoupon(null);
      setDiscountedTotal(total); // Restaura o total original
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <NavBar />
      <div className="relative flex flex-col items-center">
        <div className="max-lg:hidden relative h-[30rem] w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute h-72 z-0 inset-0 bg-cover bg-center filter blur-sm scale-110 opacity-100"
            style={{ backgroundImage: `url('/public/Frame 1.png')` }}
          ></div>
          <div className="relative w-screen items-center justify-center flex">
            <img
              src="/public/Frame 1.png"
              alt="Retiro"
              className="rounded-lg w-3/4 h-80 object-cover"
            />
          </div>
        </div>

        <div className="relative w-screen items-center justify-center lg:hidden flex">
          <img
            src="/public/Frame 1.png"
            alt="Retiro"
            className="w-screen max-h-64 h-full rounded-b-lg object-cover"
          />
        </div>

        <div className="w-3/4 max-lg:py-6 flex max-lg:flex-col h-full lg:px-6 mb-20">
          <div className="lg:w-2/3 flex flex-col">
            <h1 className="text-white font-bold text-3xl">Retiro de Jovens</h1>
            <div className="text-white font-light mt-2 items-center text-base flex gap-2 uppercase">
              <IoCalendarClearOutline />
              <span>1 de março de 2024, 16:00</span>
              <div className="w-5 h-[2px] bg-white"></div>
              <span>4 de março de 2024, 12:00</span>
            </div>
            <div className="text-white font-light mt-2 items-center text-base flex gap-2 uppercase">
              <IoLocationOutline />
              <span>clube campestre</span>
            </div>
            <div className="flex flex-col text-white mt-4 overflow-hidden">
              <p>
                Prepare-se para um encontro transformador com Deus e uma experiência inesquecível!
                O Retiro de Jovens 2024 será um tempo de renovação espiritual, comunhão, e momentos
                marcantes na presença do Senhor. Durante quatro dias, teremos adoração intensa,
                ministrações impactantes e palestras inspiradoras que vão fortalecer a sua fé e
                renovar a esperança.
              </p>
              <p className="mt-4">
                Este será um espaço para refletir, se desconectar das preocupações do dia a dia e se
                conectar mais profundamente com Deus. Além das atividades espirituais, haverá
                momentos de lazer e dinâmicas em grupo para promover novas amizades e fortalecer os
                laços da nossa juventude.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 mt-10 lg:mt-0 w-full ml-4 bg-backgroundClear rounded-xl flex flex-col">
            <Ticket
              name="Inscrição Geral - Meia (PIX)"
              allotment="1º Lote"
              value={125}
              onChange={handleTicketChange}
            />
            <Ticket
              name="Inscrição Geral - Meia (CARTÃO)"
              allotment="1º Lote"
              value={140}
              onChange={handleTicketChange}
            />
            <Ticket
              name="Inscrição Geral - Inteira (PIX)"
              allotment="1º Lote"
              value={250}
              onChange={handleTicketChange}
            />
            <Ticket
              name="Inscrição Geral - Inteira (CARTÃO)"
              allotment="1º Lote"
              value={270}
              onChange={handleTicketChange}
            />

            <div className="flex flex-col p-4 gap-2">
              <h1 className="text-white">Código Promocional</h1>
              <div className="flex gap-4 w-full">
                <input
                  placeholder="Insira o cupom"
                  className="w-3/4 rounded-md outline-none p-1 text-white bg-transparent border placeholder:text-slate-400 border-primary"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                />
                <button
                  className="bg-primary w-1/4 rounded-md p-1 text-white font-semibold"
                  onClick={applyCoupon}
                >
                  Aplicar
                </button>
              </div>
            </div>

            {appliedCoupon && (
              <h1 className="text-green-400 text-center font-semibold">
                {appliedCoupon.code} - {appliedCoupon.discount}% de desconto
              </h1>
            )}

            <div className="border-t-2 border-dashed border-white w-full"></div>
            <div className="flex flex-col items-center gap-2 justify-center p-4">
              <div className="flex items-center justify-center gap-2">
                <CiShoppingCart className="text-green-600 " size={40} />
                <h1 className="text-white font-light text-xl">
                  R$ {discountedTotal.toFixed(2)}
                </h1>
              </div>
              <button className="bg-green-600 text-white rounded-md text-xl p-1">Finalizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
