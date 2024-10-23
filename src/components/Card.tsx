import { IoLocationOutline } from "react-icons/io5";

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
        <a href="event" className="w-[284px] h-full bg-backgroundClear flex flex-col rounded-2xl shadow-black shadow-md backdrop-blur-xl">
            <img
                src={image}
                alt="Logo"
                className="rounded-2xl w-[284px] h-44"
            />
            <div className="flex py-3">
                <div className="flex flex-col justify-center items-center gap-1 w-1/3 px-4 py-4">
                    <h2 className="text-slate-400 text-sm font-medium">
                        {date.weekday}
                    </h2>
                    <h2 className="text-white text-3xl font-semibold">
                        {date.day}
                    </h2>
                    <h2 className="text-slate-400 text-sm font-medium">
                        {date.month}
                    </h2>
                    <h2 className="text-slate-400 text-sm font-light">
                        {date.time}
                    </h2>
                </div>
                <div className="flex flex-col w-full items-start justify-start gap-1 pr-4 py-4">
                    <h1 className="font-medium text-xl text-white">{title}</h1>
                    <div className="flex justify-start items-center gap-1 text-slate-400">
                        <IoLocationOutline /> {location}
                    </div>
                </div>
            </div>
        </a>
    );
}
