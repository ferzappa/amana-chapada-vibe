import BangaloTemplate from "@/components/BangaloTemplate";
import aranduHero from "@/assets/arandu-hero.jpg";
import arandu1 from "@/assets/arandu-1.jpg";
import arandu2 from "@/assets/arandu-2.jpg";
import arandu3 from "@/assets/arandu-3.jpg";
import arandu4 from "@/assets/arandu-4.jpg";
import arandu5 from "@/assets/arandu-5.jpg";
import arandu6 from "@/assets/arandu-6.jpg";
import arandu7 from "@/assets/arandu-7.jpg";
import arandu8 from "@/assets/arandu-8.jpg";
import arandu9 from "@/assets/arandu-9.jpg";

const BangaloArandu = () => (
  <BangaloTemplate
    data={{
      name: "Bangalô Arandu",
      area: "68m²",
      title: "Ofurô sob as estrelas",
      h1: "Bangalô Arandu",
      seoTitle: "Bangalô Arandu — Suíte com Ofurô 68m² | Amaná Hotel Chapada",
      seoDesc: "Bangalô Arandu: 68m² com ofurô aquecido ao ar livre, cama Super King e imersão total no cerrado da Chapada dos Veadeiros.",
      intro: "O Arandu convida a um banho sob as estrelas. Seu ofurô aquecido ao ar livre, emoldurado pela vegetação do cerrado, transforma cada noite em uma experiência de reconexão com os elementos.",
      features: [
        "Ofurô aquecido ao ar livre",
        "Cama Super King com enxoval Trousseau 600 fios",
        "Cafeteira Nespresso",
        "TV de tela plana",
        "Amenities premium orgânicos",
        "Deck privativo",
        "Ar-condicionado split silencioso",
        "Frigobar abastecido",
        "Vista para o cerrado",
      ],
      heroImg: aranduHero,
      galleryImgs: [arandu4, arandu6, arandu2, arandu8, arandu3, arandu9, arandu5, arandu7, arandu1],
    }}
  />
);

export default BangaloArandu;
