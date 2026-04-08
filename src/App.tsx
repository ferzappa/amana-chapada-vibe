import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import BangalosListagem from "./pages/BangalosListagem";
import BangaloAmana from "./pages/BangaloAmana";
import BangaloAngaturama from "./pages/BangaloAngaturama";
import BangaloArandu from "./pages/BangaloArandu";
import BangaloAneci from "./pages/BangaloAneci";
import Reservas from "./pages/Reservas";
import Spa from "./pages/Spa";
import Restaurante from "./pages/Restaurante";
import Experiencias from "./pages/Experiencias";
import Localizacao from "./pages/Localizacao";
import Wedding from "./pages/Wedding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/amana-hotel-chapada-dos-veadeiros" element={<Sobre />} />
          <Route path="/bangalos-chapada-dos-veadeiros" element={<BangalosListagem />} />
          <Route path="/bangalo-amana" element={<BangaloAmana />} />
          <Route path="/bangalo-angaturama" element={<BangaloAngaturama />} />
          <Route path="/bangalo-arandu" element={<BangaloArandu />} />
          <Route path="/bangalo-aneci" element={<BangaloAneci />} />
          <Route path="/reservas-hotel-chapada-dos-veadeiros" element={<Reservas />} />
          <Route path="/spa-chapada-dos-veadeiros" element={<Spa />} />
          <Route path="/restaurante-chapada-dos-veadeiros" element={<Restaurante />} />
          <Route path="/experiencias-chapada-dos-veadeiros" element={<Experiencias />} />
          <Route path="/localizacao-amana-hotel" element={<Localizacao />} />
          <Route path="/wedding-chapada-dos-veadeiros" element={<Wedding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
