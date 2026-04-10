import { useRef, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import { menuData } from "@/data/cardapioData";

const Cardapio = () => {
  const [activeCategory, setActiveCategory] = useState("entradas");
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    menuData.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(`[data-cat="${activeCategory}"]`);
    if (activeBtn) {
      (activeBtn as HTMLElement).scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <Layout>
      <SEO
        title="Cardápio Digital — Restaurante Amaná Hotel Chapada dos Veadeiros"
        description="Cardápio completo do Restaurante Amaná: entradas, pratos principais, sobremesas, drinks e mais. Gastronomia autoral com ingredientes do cerrado."
      />

      {/* Hero compacto */}
      <section className="bg-chumbo flex items-end pt-32 pb-16">
        <div className="container-narrow">
          <p className="label-text text-dourado mb-4">Restaurante</p>
          <h1 className="display-1 text-branco">Cardápio</h1>
        </div>
      </section>

      {/* Nav sticky de categorias */}
      <nav className="sticky top-0 z-40 bg-branco border-b border-border shadow-sm">
        <div
          ref={navRef}
          className="container-narrow flex gap-1 overflow-x-auto py-3 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {menuData.map((cat) => (
            <button
              key={cat.id}
              data-cat={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-sans font-medium uppercase tracking-widest transition-all duration-300 shrink-0 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-creme"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Seções do cardápio */}
      {menuData.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.id}
          ref={(el) => { sectionRefs.current[cat.id] = el; }}
          className={`section-padding ${catIdx % 2 === 0 ? "bg-branco" : "bg-creme"}`}
        >
          <div className="container-narrow">
            <SectionReveal>
              <h2 className="display-2 text-foreground mb-10">{cat.title}</h2>
              <div className="space-y-0">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className={`py-5 ${i < cat.items.length - 1 ? "border-b border-border/50" : ""}`}
                  >
                    <div className={`${item.image ? "flex flex-col sm:flex-row gap-5" : ""}`}>
                      {item.image && (
                        <div className="w-full sm:w-32 md:w-40 shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full aspect-square object-cover rounded-sm"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline gap-4">
                          <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                            {item.name}
                          </h3>
                          <span className="font-sans text-sm font-medium text-accent whitespace-nowrap">
                            R$ {typeof item.price === "number" ? item.price.toFixed(0) : item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-muted-foreground italic text-sm mt-1 max-w-2xl">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      ))}

      {/* CTA final */}
      <section className="section-padding bg-chumbo text-center">
        <SectionReveal>
          <p className="label-text text-dourado mb-4">Reservas</p>
          <p className="font-serif text-2xl text-branco mb-8 max-w-lg mx-auto">
            A mesa está posta. O cerrado serve de cenário.
          </p>
          <a
            href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Restaurante%20Amaná."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block label-text text-[12px] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-500"
          >
            Reservar mesa
          </a>
        </SectionReveal>
      </section>
    </Layout>
  );
};

export default Cardapio;
