import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import BangaloCarousel from "@/components/BangaloCarousel";
import bangalosHero from "@/assets/bangalos-hero.jpg";

import amana1 from "@/assets/amana-1.jpg";
import amana2 from "@/assets/amana-2.jpg";
import amana3 from "@/assets/amana-3.jpg";
import amana4 from "@/assets/amana-4.jpg";
import amana5 from "@/assets/amana-5.jpg";
import amana6 from "@/assets/amana-6.jpg";

import aneci1 from "@/assets/aneci-1.jpg";
import aneci2 from "@/assets/aneci-2.jpg";
import aneci3 from "@/assets/aneci-3.jpg";
import aneci4 from "@/assets/aneci-4.jpg";
import aneci5 from "@/assets/aneci-5.jpg";
import aneci6 from "@/assets/aneci-6.jpg";

import angaturama1 from "@/assets/angaturama-1.jpg";
import angaturama2 from "@/assets/angaturama-2.jpg";
import angaturama3 from "@/assets/angaturama-3.jpg";
import angaturama4 from "@/assets/angaturama-4.jpg";
import angaturama5 from "@/assets/angaturama-5.jpg";
import angaturama6 from "@/assets/angaturama-6.jpg";
import angaturama7 from "@/assets/angaturama-7.jpg";
import angaturama8 from "@/assets/angaturama-8.jpg";

import arandu1 from "@/assets/arandu-1.jpg";
import arandu2 from "@/assets/arandu-2.jpg";
import arandu3 from "@/assets/arandu-3.jpg";
import arandu4 from "@/assets/arandu-4.jpg";
import arandu5 from "@/assets/arandu-5.jpg";
import arandu6 from "@/assets/arandu-6.jpg";
import arandu7 from "@/assets/arandu-7.jpg";
import arandu8 from "@/assets/arandu-8.jpg";
import arandu9 from "@/assets/arandu-9.jpg";

const amanaImages = [amana1, amana2, amana3, amana4, amana5, amana6];
const aneciImages = [aneci1, aneci2, aneci3, aneci4, aneci5, aneci6];
const angaturamImages = [angaturama1, angaturama2, angaturama3, angaturama4, angaturama5, angaturama6, angaturama7, angaturama8];
const aranduImages = [arandu1, arandu2, arandu3, arandu4, arandu5, arandu6, arandu7, arandu8, arandu9];

const bangalos = [
  {
    name: "Bangalô Amaná",
    slug: "/bangalo-amana",
    area: "85m²",
    desc: "O mais espaçoso. Hidromassagem dupla, mini adega e vista panorâmica para o cerrado.",
    img: "",
    localImages: amanaImages,
  },
  {
    name: "Bangalô Angaturama",
    slug: "/bangalo-angaturama",
    area: "68m²",
    desc: "Elegância discreta com hidromassagem privativa e deck integrado à natureza.",
    img: "",
    localImages: angaturamImages,
  },
  {
    name: "Bangalô Arandu",
    slug: "/bangalo-arandu",
    area: "68m²",
    desc: "Ofurô aquecido ao ar livre, em perfeita harmonia com os sons do cerrado.",
    img: "",
    localImages: aranduImages,
  },
  {
    name: "Bangalô Aneci",
    slug: "/bangalo-aneci",
    area: "62m² + varanda",
    desc: "Varanda ampla com vista para a vegetação nativa. Simplicidade sofisticada.",
    img: "",
    localImages: aneciImages,
  },
];

const BangalosListagem = () => (
  <Layout>
    <SEO
      title="Bangalôs Chapada dos Veadeiros — Amaná Hotel | Suítes de Luxo"
      description="Conheça os 4 modelos de bangalôs do Amaná Hotel na Chapada dos Veadeiros. Suítes com hidromassagem, ofurô, cama Super King e vista para o cerrado."
    />

    <section className="relative h-[60vh] flex items-end overflow-hidden">
      <img
        src={bangalosHero}
        alt="Bangalôs de luxo Amaná Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Acomodações</p>
        <h1 className="display-1 text-branco" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Bangalôs</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl mb-16">
        <SectionReveal>
          <p className="text-lg text-foreground text-center whitespace-pre-line">
            Quatro tipologias, uma mesma filosofia: integrar você à paisagem. Cada bangalô é um universo à parte, onde materiais naturais, silêncio e conforto se encontram em perfeita harmonia.
            {"\n\n"}
            Espaços pensados para acolher com elegância, proporcionando uma experiência autêntica, onde o essencial ganha protagonismo e o bem-estar acontece de forma natural.
          </p>
        </SectionReveal>
      </div>

      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bangalos.map((b, i) => (
            <SectionReveal key={i}>
              <Link to={b.slug} className="group block">
                <div className="img-hover mb-6">
                  {b.localImages ? (
                    <BangaloCarousel images={b.localImages} alt={b.name} />
                  ) : (
                    <div className="aspect-[4/3]">
                      <img
                        src={`https://images.unsplash.com/${b.img}?w=700&h=525&fit=crop`}
                        alt={b.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors duration-300">{b.name}</h2>
                  <span className="label-text text-[11px] text-muted-foreground whitespace-nowrap mt-2">{b.area}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{b.desc}</p>
                <span className="cta-arrow text-[11px]">Ver Bangalô</span>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BangalosListagem;
