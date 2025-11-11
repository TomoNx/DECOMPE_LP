import { useTranslations } from "next-intl";

const generalWinners = [
  { name: "Tim Pemenang Umum 1", logo: "/images/placeholder.png" },
  { name: "Tim Pemenang Umum 2", logo: "/images/placeholder.png" },
  { name: "Tim Pemenang Umum 3", logo: "/images/placeholder.png" },
];

const favoriteWinner = [
  { name: "Tim Pemenang Favorit", logo: "/images/placeholder.png" },
];

const finalists = [
  { name: "Tim Finalis 1", logo: "/images/placeholder.png" },
  { name: "Tim Finalis 2", logo: "/images/placeholder.png" },
];

import Image from "next/image";

const WinnerCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="bg-gray-800 rounded-lg p-6 text-center">
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
      <Image src={logo} alt={name} width={128} height={128} className="object-cover" />
    </div>
    <h3 className="text-xl font-semibold text-white">{name}</h3>
  </div>
);

export default function HallOfFamePage() {
  const t = useTranslations("HallOfFamePage");

  return (
    <main className="container mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>
      <p className="text-center mb-12">{t("description")}</p>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("generalWinners")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {generalWinners.map((winner, index) => (
            <WinnerCard key={index} name={winner.name} logo={winner.logo} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("favoriteWinner")}</h2>
        <div className="flex justify-center">
          {favoriteWinner.map((winner, index) => (
            <WinnerCard key={index} name={winner.name} logo={winner.logo} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("finalists")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {finalists.map((winner, index) => (
            <WinnerCard key={index} name={winner.name} logo={winner.logo} />
          ))}
        </div>
      </section>
    </main>
  );
}
