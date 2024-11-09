import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; // Importar Link

interface CardProps {
    date: {
        day: string;
        month: string;
        weekday: string;
        time: string;
    };
    title: string;
    location: string;
    image: string;
}

export default function Card({
    date,
    title,
    location,
    image,
}: CardProps) {
    return (
        <Link 
            to="/event" 
            className="w-[320px] h-full bg-backgroundClear max-mb:w-full flex flex-col rounded-2xl shadow-slate-400 shadow-md backdrop-blur-sm"
        >
            <img
                src={image}
                alt="Logo"
                className="rounded-2xl w-full h-44"
            />
            <div className="flex">
                <div className="flex flex-col justify-center items-center w-1/3 px-4 py-4">
                    <h2 className="text-slate-400 text-sm font-medium">
                        {date.weekday}
                    </h2>
                    <h2 className="text-primary text-3xl font-semibold">
                        {date.day}
                    </h2>
                    <h2 className="text-slate-400 text-sm font-medium">
                        {date.month}
                    </h2>
                    <h2 className="text-slate-400 text-base font-normal">
                        {date.time}
                    </h2>
                </div>
                <div className="flex flex-col w-full items-start justify-start gap-1 pr-4 py-4">
                    <h1 className="font-medium text-2xl text-black">{title}</h1>
                    <div className="flex justify-start items-center gap-1 text-primary">
                        <IoLocationOutline /> {location}
                    </div>
                </div>
            </div>
        </Link>
    );
}
