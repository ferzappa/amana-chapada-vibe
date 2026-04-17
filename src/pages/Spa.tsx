import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import spaHero from "@/assets/spa-hero.jpg";

const tratamentos = [
  { name: "Massagem Relaxante", description: "Técnicas suaves e contínuas que libertam as tensões acumuladas. Toque fluido e pressão equilibrada — ideal para quem busca desacelerar e reencontrar o próprio ritmo." },
  { name: "Thai Massagem Avançada", description: "Combina alongamentos passivos, pressão em meridianos energéticos e mobilizações articulares. Promove abertura profunda do corpo e sensação imediata de leveza." },
  { name: "Manipulação e Liberação Miofascial", description: "Manobras lentas e precisas sobre as fáscias que desfazem restrições, aliviam dores crônicas e devolvem amplitude de movimento ao corpo." },
  { name: "Massagem Terapêutica", description: "Protocolo direcionado ao alívio de tensões musculares específicas e dores localizadas, adaptado às necessidades individuais de cada hóspede." },
  { name: "Harmonização dos Chakras / Reiki", description: "Equilíbrio energético profundo por meio da imposição de mãos. Promove paz interior, alinhamento emocional e reconexão com o momento presente." },
  { name: "Massagem Integrativa", description: "Síntese de técnicas corporais e energéticas, conduzida de forma personalizada para integrar o físico, o emocional e o energético em uma experiência única." },
  { name: "Spa dos Pés", description: "Ritual completo com imersão, esfoliação, hidratação profunda e reflexologia podal. Alivia o cansaço, estimula a circulação e revitaliza o corpo todo." },
  { name: "Shiatsu", description: "Pressão nos meridianos de energia da tradição japonesa que restabelece o fluxo vital do corpo, trazendo equilíbrio físico e mental." },
  { name: "Pedras Quentes", description: "O calor das pedras basálticas penetra profundamente na musculatura, dissolvendo tensões com uma suavidade sensorial única — calorosa e profundamente relaxante." },
  { name: "Massagem Desportiva", description: "Ideal para recuperação muscular pós-trilhas e atividades na Chapada. Melhora a circulação e prepara o corpo com manobras de maior profundidade." },
  { name: "Massagens Ayurvédicas", description: "Óleos vegetais aquecidos e movimentos rítmicos adaptados ao seu biotipo, promovendo desintoxicação, vitalidade e profundo bem-estar." },
  { name: "Ventosaterapia", description: "Sucção controlada que estimula a circulação, libera aderências e alivia tensões musculares profundas. Revitalizante e poderosa." },
  { name: "Drenagem Linfática", description: "Manobras suaves que estimulam o sistema linfático, eliminam toxinas e reduzem o inchaço — com sensação imediata de leveza." },
  { name: "Magnified Healing", description: "Técnica de alta frequência que trabalha com campos de energia sutis, promovendo purificação energética e reconexão com estados elevados de bem-estar." },
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
        <p className="label-text text-dourado mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Wellness & Spa</p>
        <h1 className="display-1 text-branco" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>SPA Amaná</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl">
        <SectionReveal>
          <p className="text-lg text-foreground text-center mb-6">
            No SPA Amaná, o cuidado nasce da terra. Cada tratamento utiliza ingredientes nativos do cerrado,
            colhidos com respeito ao bioma, e é conduzido por profissionais que compreendem que o verdadeiro
            bem-estar começa quando o corpo encontra o silêncio.
          </p>
          <p className="text-muted-foreground text-center">
            Cada experiência é pensada para proporcionar uma pausa profunda, onde o tempo desacelera 
            e o equilíbrio se restabelece de forma natural e acolhedora.
          </p>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <p className="label-text text-accent text-center mb-4">Nossos Tratamentos</p>
          <h2 className="display-2 text-foreground text-center mb-4">Corpo, Energia & Silêncio</h2>
          <p className="text-muted-foreground text-center mb-16">Cada tratamento tem duração de 60 minutos.</p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tratamentos.map((t, i) => (
            <SectionReveal key={i}>
              <div className="bg-branco p-8 h-full flex flex-col border border-border">
                <h3 className="font-serif text-xl text-foreground mb-3">{t.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.description}</p>
                <p className="label-text text-[11px] text-accent mt-6">60 min</p>
              </div>
            </SectionReveal>
          ))}
        </div>
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
