import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { IoCalendarClearOutline, IoLocationOutline } from 'react-icons/io5';
import Ticket from '../components/Ticket';
import { Link } from 'react-router-dom';

interface Coupon {
  code: string;
  discount: number; // Porcentagem de desconto
}

const coupons: Coupon[] = [
  { code: '50OFF', discount: 50 },
  { code: 'CARECA', discount: 40 },
  { code: '10OFF', discount: 10 }, // Exemplo adicional
];

const bannerEvent = '/banner.svg';

const Event: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const [discountedTotal, setDiscountedTotal] = useState<number>(0);
  const [ticketCount, setTicketCount] = useState<number>(0); // Novo estado para quantidade de ingressos
  const [couponInput, setCouponInput] = useState<string>(''); // Cupom inserido pelo usuário
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null); // Cupom aplicado

  const handleTicketChange = (amount: number, value: number) => {
    const newTotal = total + amount * value;
    setTotal(newTotal);
    setTicketCount(ticketCount + amount); // Atualiza a contagem de ingressos
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

  useEffect(() => {
    if (appliedCoupon) {
      setDiscountedTotal(total * (1 - appliedCoupon.discount / 100));
    } else {
      setDiscountedTotal(total);
    }
  }, [total, appliedCoupon]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <NavBar />
      <div className="relative flex flex-col items-center">
        <div className="max-lg:hidden relative h-[30rem] w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute h-72 z-0 inset-0 bg-cover bg-center filter blur-sm scale-110 opacity-100"
            style={{ backgroundImage: `url(${bannerEvent})` }}
          ></div>
          <div className="relative w-screen items-center justify-center flex">
            <img
              src={bannerEvent}
              alt="Retiro"
              className="rounded-lg w-3/4 h-80 object-cover"
            />
          </div>
        </div>

        <div className="relative w-screen items-center justify-center lg:hidden flex">
          <img
            src={bannerEvent}
            alt="Retiro"
            className="w-screen max-h-64 h-full rounded-b-lg object-cover"
          />
        </div>

        <div className="w-3/4 max-lg:py-6 gap-5 flex max-lg:flex-col h-full lg:px-6 mb-20">
          <div className="lg:w-2/3 flex flex-col">
            <h1 className="text-black font-bold text-3xl">Retiro de Jovens</h1>
            <div className="text-black font-light mt-2 items-center text-base flex gap-2 uppercase">
              <IoCalendarClearOutline />
              <span>1 de março de 2024, 16:00</span>
              <div className="w-5 h-[2px] bg-black"></div>
              <span>4 de março de 2024, 12:00</span>
            </div>
            <div className="text-black font-light mt-2 items-center text-base flex gap-2 uppercase">
              <IoLocationOutline />
              <span>clube campestre</span>
            </div>
            <div className="flex flex-col text-black mt-4 overflow-hidden">
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

          <div className="lg:w-1/3 mt-10 max-lg:ml-0 w-full lg:ml-0 ml-4 bg-backgroundClear rounded-xl flex flex-col shadow-slate-400 shadow-md backdrop-blur-sm">
            <Ticket
              name="Inscrição Geral - Meia"
              allotment="1º Lote"
              value={125}
              onChange={handleTicketChange}
            />
            <Ticket
              name="Inscrição Geral - Inteira"
              allotment="1º Lote"
              value={250}
              onChange={handleTicketChange}
            />
            <div className="flex items-center justify-between p-6 gap-2">
              <div>
                <h1 className="font-semibold text-xl">Total</h1>
                <h2 className="font-thin">{ticketCount} ingressos</h2> {/* Exibe a quantidade de ingressos */}
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-black font-light text-xl">
                  R$ {discountedTotal.toFixed(2)}
                </h1>

                {appliedCoupon && (
                  <h1 className="text-primary text-center font-semibold">
                    {appliedCoupon.discount}%
                  </h1>
                )}
              </div>
            </div>

            <div className="border-t-2 border-dashed mt-2 border-slate-300 w-full"></div>

            <div className="flex flex-col px-6 py-4 gap-4">
              <h1 className="text-black">Possui um cupom de desconto?</h1>
              <div
                className={`flex w-full items-center p-2 justify-between rounded-md bg-gray-50 border border-gray-200 ${isFocused ? 'ring-2 ring-purple-500' : ''}`}
              >
                <input
                  placeholder="Insira o cupom"
                  className="flex-grow w-full rounded-md outline-none p-1 text-gray-500 bg-transparent placeholder:text-slate-400"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <button
                  className="text-purple-600 font-semibold hover:underline"
                  onClick={applyCoupon}
                >
                  Aplicar
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-6">
              <Link
                to={'/order'}
                className={`items-center flex justify-center rounded-md text-xl w-full py-2 p-1 ${ticketCount === 0 ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-primary text-white'}`}
                style={{ pointerEvents: ticketCount === 0 ? 'none' : 'auto' }}
              >
                Comprar ingressos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
