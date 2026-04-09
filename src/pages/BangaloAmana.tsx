import BangaloTemplate from "@/components/BangaloTemplate";
import amanaHero from "@/assets/amana-hero.jpg";
import amana1 from "@/assets/amana-1.jpg";
import amana2 from "@/assets/amana-2.jpg";
import amana3 from "@/assets/amana-3.jpg";
import amana4 from "@/assets/amana-4.jpg";
import amana5 from "@/assets/amana-5.jpg";
import amana6 from "@/assets/amana-6.jpg";

const BangaloAmana = () => (
  <BangaloTemplate
    data={{
      name: "Bangalô Amaná",
      area: "85m²",
      title: "O mais espaçoso do hotel",
      h1: "Bangalô Amaná",
      seoTitle: "Bangalô Amaná — Suíte de Luxo 85m² | Amaná Hotel Chapada",
      seoDesc: "Bangalô Amaná: 85m² com hidromassagem dupla 1.8m, cama Super King, mini adega, Nespresso e vista panorâmica para o cerrado.",
      intro: "Com 85m² de pura contemplação, o Bangalô Amaná é o espaço mais amplo do hotel. A hidromassagem dupla de 1.80m, a mini adega e a vista panorâmica criam uma atmosfera de intimidade absoluta. Aqui, cada detalhe foi pensado para que o mundo lá fora possa esperar.",
      features: [
        "Hidromassagem dupla de 1.80m",
        "Cama Super King com enxoval Trousseau 600 fios",
        "Mini adega com rótulos selecionados",
        "Cafeteira Nespresso",
        "TV 60 polegadas",
        "Amenities premium orgânicos",
        "Vista panorâmica para o cerrado",
        "Ar-condicionado split silencioso",
        "Frigobar abastecido",
        "Deck privativo",
      ],
      heroImg: amana5,
      galleryImgs: [amana2, amana4, amana6, amana1, amana3],
    }}
  />
);

export default BangaloAmana;
