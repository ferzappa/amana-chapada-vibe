import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import trilhasImg from "@/assets/trilhas-hero-new.jpg";
import cachoeirasImg from "@/assets/cachoeiras.jpg";
import experienciasHeroImg from "@/assets/experiencias-hero.jpg";
import passeiosImg from "@/assets/passeios-personalizados.jpg";
import imersaoImg from "@/assets/imersao-natureza.jpg";

const jornadas = [
  {
    title: "Trilhas Guiadas",
    desc: "Percorra caminhos do cerrado com o acompanhamento de guias credenciados da Chapada dos Veadeiros, com ampla experiência nas trilhas da região.\nSão percursos para diferentes níveis, do contemplativo ao desafiador, conduzidos com segurança, conhecimento e conexão com a paisagem.",
    img: trilhasImg,
    isLocal: true,
  },
  {
    title: "Cachoeiras",
    desc: "A Chapada dos Veadeiros abriga algumas das cachoeiras mais impressionantes do Brasil, com quedas imponentes, águas cristalinas e cenários que surpreendem a cada visita.\nExperiências únicas em meio à natureza, onde força e beleza se encontram de forma inesquecível.",
    img: cachoeirasImg,
    isLocal: true,
  },
  {
    title: "Passeios Personalizados",
    desc: "Roteiros desenhados sob medida para o seu ritmo: observação de estrelas, nascer do sol em mirantes, piqueniques gourmet em meio à natureza e visitas a aldeias indígenas.\nExperiências pensadas para tornar cada momento único, com autenticidade e significado.",
    img: passeiosImg,
    isLocal: true,
  },
  {
    title: "Imersão na Natureza",
    desc: "Meditação ao ar livre e yoga ao amanhecer conduzem a momentos de presença e equilíbrio. Práticas que utilizam a natureza como cenário e essência para uma reconexão profunda.",
    img: imersaoImg,
    isLocal: true,
  },
];

const Experiencias = () => (
  <Layout>
    <SEO
      title="Experiências Chapada dos Veadeiros — Amaná Hotel | Trilhas e Cachoeiras"
      description="Experiências exclusivas na Chapada dos Veadeiros: trilhas guiadas, cachoeiras privativas, passeios personalizados e imersão na natureza."
    />

    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <img
        src={experienciasHeroImg}
        alt="Experiências na Chapada dos Veadeiros"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Jornadas</p>
        <h1 className="display-1 text-branco" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Experiências</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl text-center mb-16">
        <SectionReveal>
          <p className="text-lg text-foreground">
            Não oferecemos passeios. Oferecemos jornadas. Cada experiência foi desenhada para criar uma conexão
            genuína com o território, respeitando seu tempo, sua curiosidade e sua necessidade de silêncio.
          </p>
        </SectionReveal>
      </div>
    </section>

    {jornadas.map((j, i) => (
      <section key={i} className={`section-padding ${i % 2 === 0 ? "bg-creme" : "bg-branco"}`}>
        <div className="container-narrow">
          <SectionReveal>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
              <div className={`img-hover ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <img
                  src={j.isLocal ? j.img : `https://images.unsplash.com/${j.img}?w=800&h=600&fit=crop`}
                  alt={j.title}
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="display-2 text-foreground mb-6">{j.title}</h2>
                <p className="text-muted-foreground whitespace-pre-line">{j.desc}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    ))}
  </Layout>
);

export default Experiencias;
