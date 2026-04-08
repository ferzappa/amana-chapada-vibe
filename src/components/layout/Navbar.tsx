import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { label: "Amaná", href: "/amana-hotel-chapada-dos-veadeiros" },
  { label: "Bangalôs", href: "/bangalos-chapada-dos-veadeiros" },
  { label: "Wellness & Spa", href: "/spa-chapada-dos-veadeiros" },
  { label: "Restaurante", href: "/restaurante-chapada-dos-veadeiros" },
  { label: "Experiências", href: "/experiencias-chapada-dos-veadeiros" },
  { label: "Localização", href: "/localizacao-amana-hotel" },
  { label: "Wedding", href: "/wedding-chapada-dos-veadeiros" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-branco/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-wide text-primary">
          Amaná
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`label-text text-[11px] transition-colors duration-300 hover:text-accent ${
                location.pathname === link.href ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/amanahotelchapada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <Link
            to="/reservas-hotel-chapada-dos-veadeiros"
            className="label-text text-[11px] bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors duration-300"
          >
            Reservas
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-branco/98 backdrop-blur-md border-t border-border animate-fade-in-up">
          <div className="container-narrow py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="label-text text-sm text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/amanahotelchapada/"
              target="_blank"
              rel="noopener noreferrer"
              className="label-text text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2"
            >
              <Instagram size={18} /> Instagram
            </a>
            <Link
              to="/reservas-hotel-chapada-dos-veadeiros"
              className="label-text text-sm bg-primary text-primary-foreground px-6 py-3 text-center hover:bg-primary/90 transition-colors"
            >
              Reservas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
