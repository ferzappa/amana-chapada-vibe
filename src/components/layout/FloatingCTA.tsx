import { Link } from "react-router-dom";

const FloatingCTA = () => (
  <Link
    to="/reservas-hotel-chapada-dos-veadeiros"
    className="fixed bottom-6 right-6 z-50 border border-primary bg-branco text-primary label-text text-[11px] px-5 py-3 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
  >
    Melhor tarifa aqui
  </Link>
);

export default FloatingCTA;
