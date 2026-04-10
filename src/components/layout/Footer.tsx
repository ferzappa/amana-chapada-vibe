import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Bangalôs", href: "/bangalos-chapada-dos-veadeiros" },
  { label: "Spa & Wellness", href: "/spa-chapada-dos-veadeiros" },
  { label: "Restaurante", href: "/restaurante-chapada-dos-veadeiros" },
  { label: "Experiências", href: "/experiencias-chapada-dos-veadeiros" },
  { label: "Wedding", href: "/wedding-chapada-dos-veadeiros" },
  { label: "Reservas", href: "/reservas-hotel-chapada-dos-veadeiros" },
];

const instagramImages = [
  "/lovable-uploads/insta-27-02.png",
  "/lovable-uploads/insta-12-01.png",
  "/lovable-uploads/insta-08-01.png",
  "/lovable-uploads/insta-26-12.png",
  "/lovable-uploads/insta-09-11.png",
  "/lovable-uploads/insta-28-11.png",
];

const Footer = () => (
  <footer className="bg-chumbo text-creme">
    <div className="container-narrow py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-3xl text-dourado mb-6">Amaná</h3>
          <p className="text-sm text-creme/70 mb-6 max-w-xs">
            Hotel boutique de luxo em 40 hectares de cerrado preservado na Chapada dos Veadeiros.
          </p>
          <div className="flex flex-col gap-3 text-sm text-creme/70">
            <a href="tel:+5561995080641" className="flex items-center gap-2 hover:text-dourado transition-colors duration-300">
              <Phone size={14} /> +55 61 99508-0641
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Vila de São Jorge, Alto Paraíso — GO
            </span>
            <a href="mailto:contato@amanahotel.com.br" className="flex items-center gap-2 hover:text-dourado transition-colors duration-300">
              <Mail size={14} /> contato@amanahotel.com.br
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="label-text text-dourado mb-6">Navegação</h4>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-creme/70 hover:text-dourado transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Instagram Grid */}
        <div>
          <a
            href="https://www.instagram.com/amanahotelchapada/"
            target="_blank"
            rel="noopener noreferrer"
            className="label-text text-dourado mb-6 flex items-center gap-2 hover:text-dourado/80 transition-colors"
          >
            <Instagram size={14} /> @amanahotelchapada
          </a>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {instagramPlaceholders.map((id, i) => (
              <a
                key={i}
                href="https://www.instagram.com/amanahotelchapada/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden group relative"
              >
                <img
                  src={`https://images.unsplash.com/${id}?w=200&h=200&fit=crop`}
                  alt="Amaná Hotel Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram size={20} className="text-creme" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-creme/10 mt-16 pt-8 text-center text-xs text-creme/40">
        © {new Date().getFullYear()} Amaná Hotel — Chapada dos Veadeiros. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
