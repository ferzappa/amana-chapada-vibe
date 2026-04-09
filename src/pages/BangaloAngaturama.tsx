import BangaloTemplate from "@/components/BangaloTemplate";
import angaturamHero from "@/assets/angaturama-hero.jpg";
import angaturama2 from "@/assets/angaturama-2.jpg";
import angaturama3 from "@/assets/angaturama-3.jpg";
import angaturama4 from "@/assets/angaturama-4.jpg";
import angaturama5 from "@/assets/angaturama-5.jpg";
import angaturama6 from "@/assets/angaturama-6.jpg";
import angaturama7 from "@/assets/angaturama-7.jpg";
import angaturama8 from "@/assets/angaturama-8.jpg";

const BangaloAngaturama = () => (
  <BangaloTemplate
    data={{
      name: "Bangalô Angaturama",
      area: "68m²",
      title: "Elegância em meio ao cerrado",
      h1: "Bangalô Angaturama",
      seoTitle: "Bangalô Angaturama — Suíte 68m² | Amaná Hotel Chapada",
      seoDesc: "Bangalô Angaturama: 68m² com hidromassagem, cama Super King e deck privativo no Amaná Hotel, Chapada dos Veadeiros.",
      intro: "O Angaturama combina elegância discreta com a imersão total na natureza. Sua hidromassagem privativa e o deck integrado ao cerrado criam o cenário perfeito para dias sem hora marcada.",
      features: [
        "Hidromassagem privativa",
        "Cama Super King com enxoval Trousseau 600 fios",
        "Cafeteira Nespresso",
        "TV de tela plana",
        "Amenities premium orgânicos",
        "Deck privativo",
        "Ar-condicionado split silencioso",
        "Frigobar abastecido",
        "Vista para a vegetação nativa",
      ],
      heroImg: angaturama1,
      galleryImgs: [angaturama2, angaturama3, angaturama4, angaturama5, angaturama6, angaturama7, angaturama8],
    }}
  />
);

export default BangaloAngaturama;
