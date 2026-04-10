import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import reservasHero from "@/assets/reservas-hero.jpg";

const Reservas = () => (
  <Layout>
    <SEO
      title="Reservas Hotel Chapada dos Veadeiros — Amaná Hotel"
      description="Reserve seu bangalô no Amaná Hotel. Melhor tarifa garantida para sua estadia na Chapada dos Veadeiros."
    />

    <section className="relative h-[50vh] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=800&fit=crop&q=80"
        alt="Reserve no Amaná Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Melhor tarifa garantida</p>
        <h1 className="display-1 text-branco" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Reservas</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl text-center mb-16">
        <SectionReveal>
          <p className="text-lg text-foreground">
            Reserve diretamente conosco e garanta as melhores condições para sua estadia.
            Cada bangalô é um universo à parte — escolha o seu e deixe o cerrado fazer o resto.
          </p>
        </SectionReveal>
      </div>

      <div className="container-narrow">
        <SectionReveal>
          <div className="bg-creme border border-border p-8 md:p-16 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <p className="label-text text-muted-foreground mb-4">Motor de Reservas</p>
              <p className="text-muted-foreground text-sm max-w-md">
                O widget de reservas Hbook será integrado neste espaço.
                Enquanto isso, entre em contato diretamente pelo WhatsApp para reservar.
              </p>
              <a
                href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Amaná%20Hotel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 label-text text-[12px] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-500"
              >
                Reservar via WhatsApp
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Reservas;
