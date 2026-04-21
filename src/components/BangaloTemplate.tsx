import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";

interface BangaloData {
  name: string;
  area: string;
  title: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  intro: string;
  features: string[];
  heroImg: string;
  galleryImgs: string[];
}

const BangaloTemplate = ({ data }: { data: BangaloData }) => (
  <Layout>
    <SEO title={data.seoTitle} description={data.seoDesc} />

    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <img
                loading="lazy" src={data.heroImg} alt={data.h1} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-chumbo/70 to-transparent" />
      <div className="relative z-10 container-narrow pb-16">
        <p className="label-text text-dourado mb-4">{data.area}</p>
        <h1 className="display-1 text-branco">{data.h1}</h1>
      </div>
    </section>

    <section className="section-padding bg-branco">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="display-2 text-foreground mb-6">{data.title}</h2>
              <p className="text-muted-foreground mb-8">{data.intro}</p>
              <a
                href="https://hbook.hsystem.com.br/Booking?companyId=668e8f59ea1c96c25a39ce02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block label-text text-[12px] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-500"
              >
                Reservar este bangalô
              </a>
            </div>
            <div>
              <h3 className="label-text text-accent mb-6">O que inclui</h3>
              <ul className="space-y-3">
                {data.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-creme">
      <div className="container-narrow">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.galleryImgs.map((img, i) => (
              <div key={i} className="img-hover aspect-[4/3]">
                <img src={img} alt={`${data.name} — detalhe ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="py-16 bg-branco text-center">
      <Link to="/bangalos-chapada-dos-veadeiros" className="cta-arrow">
        Ver todos os bangalôs
      </Link>
    </section>
  </Layout>
);

export default BangaloTemplate;
