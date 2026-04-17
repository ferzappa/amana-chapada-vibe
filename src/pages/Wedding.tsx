import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import weddingHero from "@/assets/wedding-hero.jpg";

const diferenciais = [
  { title: "Hotel inteiro reservado", desc: "Exclusividade total — todo o Amaná é seu e dos seus convidados." },
  { title: "Experiência completa", desc: "Hospedagem, gastronomia, spa e atividades integrados à celebração." },
  { title: "Natureza como cenário", desc: "40 hectares de cerrado preservado como palco para o seu momento." },
  { title: "Equipe dedicada", desc: "Planejamento personalizado do início ao fim, com atenção a cada detalhe." },
];

const Wedding = () => (
  <Layout>
    <SEO
      title="Wedding Destination Chapada dos Veadeiros — Casamento no Amaná Hotel"
      description="Celebre seu casamento na Chapada dos Veadeiros com exclusividade total. O Amaná Hotel é o cenário perfeito para um wedding destination inesquecível."
    />

    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <img
        src={weddingHero}
        alt="Wedding destination na Chapada dos Veadeiros"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Destination Wedding</p>
        <h1 className="display-1 text-branco" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Casamentos</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl text-center">
        <SectionReveal>
          <h2 className="display-2 text-foreground mb-6">Para celebrar o amor em um cenário único</h2>
          <p className="text-lg text-foreground mb-6">
            Imagine um casamento onde o hotel inteiro é exclusivamente seu. Onde cada convidado
            acorda com vista para o cerrado, e a celebração se funde com a natureza mais preservada do Brasil.
          </p>
          <p className="text-muted-foreground">
            No Amaná, o wedding destination não é um evento — é uma experiência imersiva de vários dias
            que transforma a celebração do amor em memória inesquecível.
          </p>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diferenciais.map((d, i) => (
              <div key={i} className="border border-border bg-branco p-8">
                <h3 className="font-serif text-xl text-foreground mb-3">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-branco text-center">
      <SectionReveal>
        <p className="label-text text-accent mb-4">Vamos conversar</p>
        <p className="font-serif text-2xl text-foreground mb-8 max-w-lg mx-auto">
          Cada casamento é único. Conte-nos sobre o seu sonho.
        </p>
        <a
          href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20wedding%20destination%20no%20Amaná%20Hotel."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block label-text text-[12px] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-500"
        >
          Fale conosco
        </a>
      </SectionReveal>
    </section>
  </Layout>
);

export default Wedding;
