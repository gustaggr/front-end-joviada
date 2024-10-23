import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Home() {
    const cardQuantity: number = 1; // Altere esse valor conforme necessário

    return (
        <div className="min-h-screen w-screen bg-background flex flex-col">
            <NavBar />
            <div className="flex flex-col items-center px-5 py-10">
                {cardQuantity === 0 ? (
                    <h1 className="text-xl text-slate-500 font-bold">Nenhum evento encontrado</h1>
                ) : (
                    <div className="flex flex-wrap justify-start gap-5">
                        {Array.from({ length: cardQuantity }).map((_, index) => (
                            <Card
                                key={index}
                                date={{ day: "01", month: "MAR", weekday: "SÁB", time: "16:00" }}
                                title="RETIRO ESPIRITUAL"
                                location="Clube Campestre"
                                image="https://i.imgur.com/Od4ARmZ.jpeg"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
