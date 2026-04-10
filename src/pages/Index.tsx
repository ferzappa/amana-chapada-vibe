import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import cachoeirasExclusivasImg from "@/assets/cachoeiras-exclusivas.jpg";
import bangaloAmanaImg from "@/assets/bangalo-amana.jpg";
import wellnessSpaImg from "@/assets/wellness-spa.jpg";
import piscinaImg from "@/assets/piscina.jpg";
import beachTennisImg from "@/assets/beach-tennis.jpg";
import saunaImg from "@/assets/sauna.jpg";

import heroImage from "@/assets/hero-poster.jpg";

const experiencias = [
  { title: "Cachoeiras Exclusivas", img: cachoeirasExclusivasImg, isLocal: true, desc: "Trilhas privativas até cachoeiras em meio ao cerrado preservado" },
  { title: "Trilhas Guiadas", img: "photo-1551632811-561732d1e306", desc: "Caminhos ancestrais com guias especializados na região" },
  { title: "Piscina", img: piscinaImg, isLocal: true, desc: "Águas cristalinas cercadas pelo paisagismo exclusivo" },
  { title: "Sauna & Bem-estar", img: saunaImg, isLocal: true, desc: "Rituais de relaxamento inspirados na tradição local" },
  { title: "Fitness Center", img: fitnessCenterImg, isLocal: true, desc: "Exercícios com vista para o cerrado infinito" },
  { title: "Beach Tennis", img: beachTennisImg, isLocal: true, desc: "Quadra de areia em meio à natureza" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Amaná Hotel",
  description: "Hotel boutique de luxo na Chapada dos Veadeiros",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vila de São Jorge",
    addressLocality: "Alto Paraíso de Goiás",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  telephone: "+5561995080641",
  starRating: { "@type": "Rating", ratingValue: "5" },
  numberOfRooms: 12,
};

const Index = () => (
  <Layout>
    <SEO
      title="Amaná Hotel — Chapada dos Veadeiros | Hotel Boutique de Luxo"
      description="Hotel boutique de luxo na Chapada dos Veadeiros. 12 bangalôs exclusivos em 40 hectares de cerrado preservado, com spa, gastronomia e experiências únicas."
      jsonLd={jsonLd}
    />

    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 text-center text-branco px-6 max-w-3xl">
        <p className="label-text text-dourado mb-6 animate-fade-in-up">Chapada dos Veadeiros</p>
        <h1 className="display-1 text-branco mb-8" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          Onde o silêncio é o maior luxo
        </h1>
        <Link
          to="/reservas-hotel-chapada-dos-veadeiros"
          className="inline-block label-text text-[12px] bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-500 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Reservas
        </Link>
      </div>
    </section>

    {/* Bangalôs */}
    <section className="section-padding bg-branco">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-3 img-hover">
              <img
                src={bangaloAmanaImg}
                alt="Bangalô de luxo Amaná Hotel"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-2">
              <p className="label-text text-accent mb-4">Bangalôs</p>
              <h2 className="display-2 text-foreground mb-6">12 refúgios em meio ao cerrado</h2>
              <p className="text-muted-foreground mb-8">
                Cada bangalô foi desenhado para dissolver a fronteira entre o interior e a paisagem.
                Hidromassagem, cama Super King, amenities premium — tudo pensado para uma estadia sem pressa.
              </p>
              <Link to="/bangalos-chapada-dos-veadeiros" className="cta-arrow">
                Conheça os Bangalôs
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Wellness */}
    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <p className="label-text text-accent mb-4">Wellness & Spa</p>
              <h2 className="display-2 text-foreground mb-6">Rituais que reconectam</h2>
              <p className="text-muted-foreground mb-8">
                Massagens com óleos do cerrado, sauna a lenha, terapias holísticas.
                No SPA Amaná, o tempo se curva ao seu ritmo.
              </p>
              <Link to="/spa-chapada-dos-veadeiros" className="cta-arrow">
                SPA Amaná
              </Link>
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2 img-hover">
              <img
                src={wellnessSpaImg}
                alt="Spa de luxo Amaná Hotel"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Gastronomia */}
    <section className="section-padding bg-branco">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-3 img-hover">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=600&fit=crop"
                alt="Gastronomia do cerrado no restaurante Amaná"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-2">
              <p className="label-text text-accent mb-4">Gastronomia</p>
              <h2 className="display-2 text-foreground mb-6">Da horta à mesa, com alma do cerrado</h2>
              <p className="text-muted-foreground mb-8">
                Ingredientes colhidos da nossa horta e do bioma ao redor.
                Uma cozinha que celebra o território com sofisticação e simplicidade.
              </p>
              <Link to="/restaurante-chapada-dos-veadeiros" className="cta-arrow">
                Restaurante Amaná
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Experiências Carousel */}
    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="label-text text-accent mb-4">Experiências</p>
            <h2 className="display-2 text-foreground">Viva a Chapada de dentro</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiencias.map((exp, i) => (
              <div key={i} className="group relative overflow-hidden aspect-[4/5]">
                <img
                  src={exp.isLocal ? exp.img : `https://images.unsplash.com/${exp.img}?w=600&h=750&fit=crop`}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chumbo/80 via-chumbo/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-branco mb-2">{exp.title}</h3>
                  <p className="text-sm text-branco/70">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/experiencias-chapada-dos-veadeiros" className="cta-arrow">
              Todas as experiências
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Chapada */}
    <section className="section-padding bg-branco">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <p className="label-text text-accent mb-4">Chapada dos Veadeiros</p>
              <h2 className="display-2 text-foreground mb-6">Entre o Vale da Lua e a Vila de São Jorge</h2>
              <p className="text-muted-foreground mb-8">
                Um dos destinos mais preservados do Brasil, com cachoeiras cristalinas,
                formações rochosas milenares e o céu estrelado mais limpo do país.
              </p>
              <Link to="/localizacao-amana-hotel" className="cta-arrow">
                Como chegar
              </Link>
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2 img-hover">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop"
                alt="Paisagem da Chapada dos Veadeiros"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Encerramento */}
    <section className="section-padding bg-chumbo text-center">
      <div className="container-narrow max-w-2xl">
        <SectionReveal>
          <p className="label-text text-dourado mb-6">Amaná Hotel</p>
          <h2 className="display-2 text-branco mb-8">
            Alguns lugares você visita.<br />Outros permanecem.
          </h2>
          <Link
            to="/reservas-hotel-chapada-dos-veadeiros"
            className="inline-block label-text text-[12px] border border-dourado text-dourado px-10 py-4 hover:bg-dourado hover:text-chumbo transition-all duration-500"
          >
            Reserve sua estadia
          </Link>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
