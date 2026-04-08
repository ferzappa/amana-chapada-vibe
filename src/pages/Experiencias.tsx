import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import trilhasImg from "@/assets/trilhas-hero.jpg";
import cachoeirasImg from "@/assets/cachoeiras.jpg";

const jornadas = [
  {
    title: "Trilhas Guiadas",
    desc: "Percorra caminhos ancestrais com guias especializados que conhecem cada segredo do cerrado. Trilhas para todos os níveis, do contemplativo ao desafiador.",
    img: trilhasImg,
    isLocal: true,
  },
  {
    title: "Cachoeiras",
    desc: "A Chapada guarda algumas das cachoeiras mais impressionantes do Brasil. Nossas trilhas privativas levam a quedas d'água exclusivas, longe do fluxo turístico.",
    img: cachoeirasImg,
    isLocal: true,
  },
  {
    title: "Passeios Personalizados",
    desc: "Roteiros desenhados sob medida: observação de estrelas, nascer do sol no mirante, piquenique gourmet em meio à natureza. Tudo ao seu tempo.",
    img: "photo-1506905925346-21bda4d32df4",
  },
  {
    title: "Imersão na Natureza",
    desc: "Banhos de floresta, meditação ao ar livre, yoga ao amanhecer. Práticas que usam a natureza como instrumento de reconexão e presença.",
    img: "photo-1575429198097-0414ec08e8cd",
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
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
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
            genuína com o território — respeitando seu tempo, sua curiosidade e sua necessidade de silêncio.
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
                <p className="text-muted-foreground">{j.desc}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    ))}
  </Layout>
);

export default Experiencias;
