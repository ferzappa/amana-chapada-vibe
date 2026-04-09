import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import restauranteHero from "@/assets/restaurante-hero.jpg";
import restaurantePrato from "@/assets/restaurante-prato.jpg";

const Restaurante = () => (
  <Layout>
    <SEO
      title="Restaurante Chapada dos Veadeiros — Gastronomia Amaná Hotel"
      description="Restaurante Amaná: gastronomia autoral com ingredientes da horta e do cerrado. Aberto ao público mediante reserva prévia."
    />

    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <img
        src={restauranteHero}
        alt="Restaurante Amaná Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Gastronomia</p>
        <h1 className="display-1 text-branco" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Restaurante Amaná</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="display-2 text-foreground mb-6">Da horta à mesa, com alma do cerrado</h2>
              <p className="text-muted-foreground mb-6">
                Nossa cozinha é guiada pela sazonalidade e pela riqueza do bioma. Ingredientes colhidos diariamente
                da horta do hotel e do cerrado ao redor compõem pratos que celebram o território com sofisticação
                e autenticidade.
              </p>
              <p className="text-muted-foreground mb-8">
                O cardápio muda com as estações. Cada refeição é uma experiência sensorial que conecta
                o sabor à paisagem, o aroma à memória.
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-accent italic">
                  Aberto ao público mediante reserva prévia. Venha conhecer mesmo sem estar hospedado.
                </p>
              </div>
            </div>
            <div className="img-hover">
              <img
                src={restaurantePrato}
                alt="Prato do restaurante Amaná com ingredientes do cerrado"
                className="w-full h-[500px] object-cover"
                style={{ objectPosition: 'center 60%' }}
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-creme text-center">
      <SectionReveal>
        <p className="label-text text-accent mb-4">Reservas</p>
        <p className="font-serif text-2xl text-foreground mb-8 max-w-lg mx-auto">
          A mesa está posta. O cerrado serve de cenário.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Restaurante%20Amaná."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block label-text text-[12px] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-500"
          >
            Reservar mesa
          </a>
          <a
            href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20ver%20o%20cardápio%20do%20Restaurante%20Amaná."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block label-text text-[12px] border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Ver cardápio
          </a>
        </div>
      </SectionReveal>
    </section>
  </Layout>
);

export default Restaurante;
