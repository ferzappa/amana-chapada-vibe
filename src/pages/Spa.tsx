import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import spaHero from "@/assets/spa-hero.jpg";

const servicos = [
  {
    cat: "Massagens",
    items: ["Massagem relaxante com óleos do cerrado", "Massagem desportiva", "Massagem com pedras quentes", "Reflexologia podal"],
  },
  {
    cat: "Terapias Corporais",
    items: ["Banho de ervas do cerrado", "Esfoliação corporal com ingredientes nativos", "Drenagem linfática", "Aromaterapia"],
  },
  {
    cat: "Experiências para Casal",
    items: ["Ritual de imersão a dois", "Massagem sincronizada", "Banho de ofurô com pétalas e essências"],
  },
];

const Spa = () => (
  <Layout>
    <SEO
      title="Spa Chapada dos Veadeiros — SPA Amaná | Wellness & Bem-estar"
      description="SPA Amaná: massagens, terapias corporais e rituais de bem-estar com ingredientes do cerrado. Wellness de luxo na Chapada dos Veadeiros."
    />

    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <img
        src={spaHero}
        alt="SPA Amaná Hotel Chapada dos Veadeiros"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4">Wellness & Spa</p>
        <h1 className="display-1 text-branco">SPA Amaná</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl">
        <SectionReveal>
          <p className="text-lg text-foreground text-center mb-6">
            No SPA Amaná, o cuidado nasce da terra. Cada tratamento utiliza ingredientes nativos do cerrado,
            colhidos com respeito ao bioma, e é conduzido por profissionais que entendem que o verdadeiro
            bem-estar começa quando o corpo finalmente silencia.
          </p>
          <p className="text-muted-foreground text-center">
            A sauna a lenha, a piscina natural e os rituais holísticos completam uma jornada de reconexão
            que é, ao mesmo tempo, ancestral e profundamente pessoal.
          </p>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {servicos.map((s, i) => (
              <div key={i}>
                <h2 className="font-serif text-2xl text-foreground mb-6">{s.cat}</h2>
                <ul className="space-y-3">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-branco text-center">
      <SectionReveal>
        <p className="label-text text-accent mb-4">Agendamento</p>
        <p className="font-serif text-2xl text-foreground mb-8 max-w-lg mx-auto">
          Os tratamentos são agendados de acordo com o seu ritmo. Sem pressa.
        </p>
        <a
          href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20agendar%20um%20tratamento%20no%20SPA%20Amaná."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block label-text text-[12px] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-500"
        >
          Agendar via WhatsApp
        </a>
      </SectionReveal>
    </section>
  </Layout>
);

export default Spa;
