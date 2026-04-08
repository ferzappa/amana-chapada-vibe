

# Amaná Hotel — Site Completo

## Visão Geral
Site institucional do Amaná Hotel Chapada dos Veadeiros — hotel boutique de luxo com 12 bangalôs em 40 hectares de cerrado. O site deve **criar desejo pela experiência**, não vender quartos. Estética contemplativa, inspirada no Kenoa Resort e Bará Resort.

---

## 1. Design System & CSS Global
- **Fontes**: Cormorant Garamond (títulos/display) + Jost (corpo/UI) via Google Fonts
- **Paleta**: Verde Floresta `#0A4400`, Dourado `#C9A96E`, Creme `#F5EFE4`, Chumbo `#2C2820`, Branco Orgânico `#FAF8F4`, Areia `#E0D3BC`
- **Escala tipográfica**: Display 1 (hero, clamp 48-80px), Display 2 (seções, clamp 36-56px), H1 (32px), H2 (24px), Body (15px, lh 1.75), Labels (13px, uppercase, ls 0.2em)
- **Botões**: Primário (verde, sem border-radius, texto dourado/branco, uppercase), Ghost (transparente, borda verde/dourado), CTA textual (→ seta, dourado escuro #9A7840)
- **Animações**: Transições ≥ 0.5s ease-out, hover em imagens scale(1.03), entrada de seções com fade+translateY(20px)
- **Grid**: max-width 1200px, padding generoso (80-120px entre seções), mínimo 40% espaço negativo

## 2. Componentes Globais

### Navbar
- Transparente sobre o hero → fundo creme ao scrollar (sticky)
- Links: Amaná, Bangalôs, Wellness/Spa, Restaurante, Experiências, Localização, Wedding, **Reservas** (CTA destacado)
- Menu hamburger no mobile

### Rodapé
- Fundo verde escuro ou chumbo
- Logo Amaná (versão dourada/branca), links rápidos, endereço (Vila de São Jorge), telefone
- Grid Instagram: 6 fotos placeholder 1:1 com hover overlay verde + ícone Instagram
- Créditos

### Botão Flutuante WhatsApp
- Inferior esquerdo, fixo, ícone cor `#0A4400` (não verde WhatsApp)
- Link: `wa.me/5561995080641` com mensagem pré-definida

### Botão Flutuante "Melhor tarifa aqui"
- Inferior direito, fixo, discreto (borda verde, fundo creme, texto verde)
- Link para /reservas

## 3. Páginas (13 no total)

### Home (`/`)
- **Hero**: Área de vídeo/imagem full-screen com overlay escuro, copy contemplativo centralizado, CTA "Reservas"
- **Seção Bangalôs**: Imagem forte + texto (60/40), CTA "Conheça os Bangalôs"
- **Seção Wellness**: Copy sensorial + CTA "SPA Amaná"
- **Seção Gastronomia**: Copy "da horta à mesa" + CTA "Restaurante Amaná"
- **Carousel Experiências**: 6 slides com transição suave (Cachoeira, Trilha, Piscina, Sauna, Academia, Beach Tennis) com copy sobreposta
- **Seção Chapada**: Copy + CTA "Experiências"
- **Encerramento**: "Alguns lugares você visita. Outros permanecem." + CTA Reservas

### Amaná - Sobre (`/amana-hotel-chapada-dos-veadeiros`)
- Texto de abertura + texto SEO complementar
- 5 diferenciais em blocos visuais (12 bangalôs, 40 hectares, Trousseau 600 fios, design minimalista, serviço íntimo)
- Blocos imagem/texto alternados: Piscina, Academia, Cachoeira privativa, Trilha, Sauna, Beach Tennis

### Bangalôs - Listagem (`/bangalos-chapada-dos-veadeiros`)
- Copy de abertura
- Grid 2×2 (desktop) / 1 coluna (mobile) com 4 cards: Amaná, Angaturama, Arandu, Aneci — foto + copy sensorial + CTA "→ Ver Bangalô"

### 4 Páginas Individuais de Bangalô
- **Amaná** (`/bangalo-amana`): 85m², hidromassagem dupla 1.8m, cama Super King, mini adega, Nespresso, TV 60", amenities premium
- **Angaturama** (`/bangalo-angaturama`): 68m², hidromassagem, cama Super King
- **Arandu** (`/bangalo-arandu`): 68m², ofurô aquecido, cama Super King
- **Aneci** (`/bangalo-aneci`): 62m² + varanda, vista natureza, cama Super King
- Cada um com galeria de imagens placeholder, lista de itens, copy sensorial, CTA "Reservar"

### Reservas (`/reservas-hotel-chapada-dos-veadeiros`)
- Copy de abertura elegante
- Área placeholder para embed do widget Hbook, com wrapper estilizado (fundo claro, padding generoso)

### Spa Amaná (`/spa-chapada-dos-veadeiros`)
- Copy sensorial, serviços (Massagens, Terapias corporais, Experiências para casal)
- CTA "Agendar via WhatsApp"

### Restaurante Amaná (`/restaurante-chapada-dos-veadeiros`)
- Filosofia gastronômica, ingredientes da horta/cerrado
- Nota "aberto ao público mediante reserva prévia" (elegante, sem barreiras)
- CTAs: Ver cardápio, Reservar

### Experiências (`/experiencias-chapada-dos-veadeiros`)
- Organização em "jornadas" (não lista simples): Trilhas guiadas, Cachoeiras, Passeios personalizados, Imersão na natureza

### Localização (`/localizacao-amana-hotel`)
- Copy poético + placeholder para Google Maps embed
- "Entre o Vale da Lua e a Vila de São Jorge"

### Wedding Destination (`/wedding-chapada-dos-veadeiros`)
- Copy "exclusividade total"
- Diferenciais: hotel inteiro reservado, experiência completa, natureza como cenário, equipe dedicada
- CTA "Fale conosco" (WhatsApp)

## 4. SEO
- Meta title e description únicos por página (conforme especificado)
- Schema JSON-LD na Home (Hotel + LodgingBusiness)
- Open Graph tags em todas as páginas
- Um H1 por página (conforme definido)
- Imagens com alt text descritivo

## 5. Notas Técnicas
- Imagens placeholder de alta qualidade (Unsplash/gradients) até o cliente fornecer as reais
- Vídeo do hero: placeholder com poster image estática
- Alternância de fundos entre seções (#FAF8F4 e #F5EFE4) para criar ritmo visual
- Seções com alternância imagem esquerda/direita
- Todas as transições suaves, nada urgente ou agressivo

