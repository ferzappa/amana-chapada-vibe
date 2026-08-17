import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    if (window.fbq) {
      window.fbq("track", "Contact");
      window.fbq("trackCustom", "WhatsAppClick");
    }
  };

  return (
    <a
      href="https://wa.me/5561995080641?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Amaná%20Hotel."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-primary text-primary-foreground w-14 h-14 flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
      aria-label="WhatsApp"
      onClick={handleClick}
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
