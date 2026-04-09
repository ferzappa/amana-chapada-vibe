import BangaloTemplate from "@/components/BangaloTemplate";
import aneci1 from "@/assets/aneci-1.jpg";
import aneci2 from "@/assets/aneci-2.jpg";
import aneci3 from "@/assets/aneci-3.jpg";
import aneci4 from "@/assets/aneci-4.jpg";
import aneci5 from "@/assets/aneci-5.jpg";
import aneci6 from "@/assets/aneci-6.jpg";

const BangaloAneci = () => (
  <BangaloTemplate
    data={{
      name: "Bangalô Aneci",
      area: "62m² + varanda",
      title: "Simplicidade sofisticada",
      h1: "Bangalô Aneci",
      seoTitle: "Bangalô Aneci — Suíte com Varanda 62m² | Amaná Hotel Chapada",
      seoDesc: "Bangalô Aneci: 62m² + varanda com vista para a natureza, cama Super King e design contemplativo no Amaná Hotel.",
      intro: "O Aneci é a expressão mais pura da filosofia Amaná: menos é mais. Com sua varanda ampla e vista desobstruída para a vegetação nativa, este bangalô transforma a simplicidade em uma forma de luxo.",
      features: [
        "Varanda ampla com vista para a natureza",
        "Cama Super King com enxoval Trousseau 600 fios",
        "Cafeteira Nespresso",
        "TV de tela plana",
        "Amenities premium orgânicos",
        "Ar-condicionado split silencioso",
        "Frigobar abastecido",
        "Vista para a vegetação nativa",
      ],
      heroImg: aneci1,
      galleryImgs: [aneci2, aneci3, aneci4, aneci5, aneci6],
    }}
  />
);

export default BangaloAneci;
