import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";

const Localizacao = () => (
  <Layout>
    <SEO
      title="Localização Amaná Hotel — Como Chegar à Chapada dos Veadeiros"
      description="O Amaná Hotel fica entre a Vila de São Jorge e o Parque Nacional da Chapada dos Veadeiros. Saiba como chegar ao nosso refúgio em Alto Paraíso, Goiás."
    />

    <section className="relative h-[60vh] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
        alt="Localização do Amaná Hotel na Chapada dos Veadeiros"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-chumbo/70 to-transparent" />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4">Como Chegar</p>
        <h1 className="display-1 text-branco">Localização</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow max-w-3xl text-center">
        <SectionReveal>
          <p className="text-lg text-foreground mb-6">
            Entre o Vale da Lua e a Vila de São Jorge, em 40 hectares de cerrado preservado,
            o Amaná Hotel ocupa um dos pontos mais privilegiados da Chapada dos Veadeiros.
          </p>
          <p className="text-muted-foreground mb-4">
            A 230km de Brasília, com acesso pela GO-118. O aeroporto mais próximo é o de Brasília (BSB).
            Oferecemos transfer sob consulta.
          </p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p>Vila de São Jorge, Alto Paraíso de Goiás — GO</p>
            <p>CEP 73770-000</p>
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <div className="w-full aspect-video">
            <iframe
              src="https://maps.google.com/maps?q=Aman%C3%A1+Hotel+Chapada+dos+Veadeiros+S%C3%A3o+Jorge&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Amaná Hotel na Chapada dos Veadeiros"
              className="w-full h-full"
            />
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="py-16 bg-branco text-center">
      <a
        href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20informações%20sobre%20como%20chegar%20ao%20Amaná%20Hotel."
        target="_blank"
        rel="noopener noreferrer"
        className="cta-arrow"
      >
        Fale conosco sobre transfer
      </a>
    </section>
  </Layout>
);

export default Localizacao;
