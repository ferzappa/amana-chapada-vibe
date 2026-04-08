import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import bangalosHero from "@/assets/bangalos-hero.jpg";

const bangalos = [
  {
    name: "Bangalô Amaná",
    slug: "/bangalo-amana",
    area: "85m²",
    desc: "O mais espaçoso. Hidromassagem dupla, mini adega e vista panorâmica para o cerrado.",
    img: "photo-1582719478250-c89cae4dc85b",
  },
  {
    name: "Bangalô Angaturama",
    slug: "/bangalo-angaturama",
    area: "68m²",
    desc: "Elegância discreta com hidromassagem privativa e deck integrado à natureza.",
    img: "photo-1566073771259-6a8506099945",
  },
  {
    name: "Bangalô Arandu",
    slug: "/bangalo-arandu",
    area: "68m²",
    desc: "Ofurô aquecido ao ar livre, em perfeita harmonia com os sons do cerrado.",
    img: "photo-1551882547-ff40c63fe5fa",
  },
  {
    name: "Bangalô Aneci",
    slug: "/bangalo-aneci",
    area: "62m² + varanda",
    desc: "Varanda ampla com vista para a vegetação nativa. Simplicidade sofisticada.",
    img: "photo-1542314831-068cd1dbfeeb",
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
      <div className="absolute inset-0 bg-gradient-to-t from-chumbo/70 to-transparent" />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4">Acomodações</p>
        <h1 className="display-1 text-branco">Bangalôs</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl mb-16">
        <SectionReveal>
          <p className="text-lg text-foreground text-center">
            Quatro tipologias, uma mesma filosofia: dissolver a fronteira entre você e a paisagem.
            Cada bangalô é um universo à parte, com materiais naturais, silêncio absoluto e conforto sem concessões.
          </p>
        </SectionReveal>
      </div>

      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bangalos.map((b, i) => (
            <SectionReveal key={i}>
              <Link to={b.slug} className="group block">
                <div className="img-hover aspect-[4/3] mb-6">
                  <img
                    src={`https://images.unsplash.com/${b.img}?w=700&h=525&fit=crop`}
                    alt={b.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
