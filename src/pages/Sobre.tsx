import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";

const diferenciais = [
  { num: "12", label: "Bangalôs exclusivos", desc: "Privacidade total em meio ao cerrado" },
  { num: "40", label: "Hectares preservados", desc: "Natureza intocada como quintal" },
  { num: "600", label: "Fios Trousseau", desc: "Enxoval premium em todas as suítes" },
  { num: "∅", label: "Design minimalista", desc: "Arquitetura que reverencia a paisagem" },
  { num: "12:1", label: "Hóspedes por funcionário", desc: "Serviço íntimo e personalizado" },
];

const blocos = [
  { title: "Piscina", desc: "Piscina de borda infinita com vista para o cerrado. Um convite à contemplação que se estende até o horizonte.", img: "photo-1575429198097-0414ec08e8cd" },
  { title: "Academia", desc: "Equipamentos modernos em ambiente integrado à natureza. Treine com vista para a paisagem do cerrado.", img: "photo-1534438327276-14e5300c3a48" },
  { title: "Cachoeira Privativa", desc: "Uma cachoeira exclusiva para hóspedes, acessível por trilha suave em meio à mata nativa.", img: "photo-1432405972618-c6b0cfba81f0" },
  { title: "Trilhas", desc: "Caminhos sinalizados por entre a vegetação do cerrado, com guias especializados disponíveis.", img: "photo-1551632811-561732d1e306" },
  { title: "Sauna a Lenha", desc: "Sauna tradicional a lenha, perfeita para rituais de descompressão após um dia de aventuras.", img: "photo-1540555700478-4be289fbec6e" },
  { title: "Beach Tennis", desc: "Quadra de areia em meio à natureza para momentos de lazer e atividade ao ar livre.", img: "photo-1554068865-24cecd4e34b8" },
];

const Sobre = () => (
  <Layout>
    <SEO
      title="Amaná Hotel Chapada dos Veadeiros — Sobre | Hotel Boutique de Luxo"
      description="Conheça o Amaná Hotel: 12 bangalôs exclusivos em 40 hectares de cerrado preservado na Chapada dos Veadeiros. Design, conforto e natureza."
    />

    {/* Hero */}
    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop&q=80"
        alt="Amaná Hotel visto de cima"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-chumbo/70 to-transparent" />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4">Sobre</p>
        <h1 className="display-1 text-branco max-w-2xl">Amaná Hotel</h1>
      </div>
    </section>

    {/* Texto */}
    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl">
        <SectionReveal>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            O Amaná nasceu da crença de que o verdadeiro luxo não se mede em estrelas, mas em silêncio.
            Em 40 hectares de cerrado preservado, entre a Vila de São Jorge e o Parque Nacional da Chapada dos Veadeiros,
            criamos um refúgio onde a arquitetura se curva à paisagem e o tempo se ajusta ao seu ritmo.
          </p>
          <p className="text-muted-foreground">
            São 12 bangalôs desenhados com materiais naturais, todos com vista para a imensidão do cerrado goiano.
            Cada detalhe — dos lençóis Trousseau 600 fios às amenities orgânicas — foi pensado para criar
            uma experiência de hospedagem que permanece na memória muito depois do check-out.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Diferenciais */}
    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {diferenciais.map((d, i) => (
              <div key={i} className="text-center">
                <span className="font-serif text-4xl md:text-5xl text-primary block mb-2">{d.num}</span>
                <span className="label-text text-[11px] text-accent block mb-2">{d.label}</span>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Blocos alternados */}
    {blocos.map((bloco, i) => (
      <section key={i} className={`section-padding ${i % 2 === 0 ? "bg-branco" : "bg-creme"}`}>
        <div className="container-narrow">
          <SectionReveal>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? "direction-rtl" : ""}`}>
              <div className={`img-hover ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <img
                  src={`https://images.unsplash.com/${bloco.img}?w=800&h=600&fit=crop`}
                  alt={`${bloco.title} no Amaná Hotel`}
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="display-2 text-foreground mb-6">{bloco.title}</h2>
                <p className="text-muted-foreground">{bloco.desc}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    ))}
  </Layout>
);

export default Sobre;
