

# Carrossel de imagens no card do Bangalô Amaná (Listagem)

## O que será feito
Substituir a imagem estática do Bangalô Amaná na página de listagem por um carrossel com as 6 fotos reais enviadas. Autoplay a cada 5 segundos, setas laterais discretas, dots indicadores.

## Passos

1. **Copiar as 6 imagens** para `src/assets/`:
   - `amana-1.jpg` (DSC04368 — interior/bar)
   - `amana-2.jpg` (VIN03075 — cama)
   - `amana-3.jpg` (DSC04411 — exterior noturno com fogueira)
   - `amana-4.jpg` (VIN03114 — cama frontal)
   - `amana-5.jpg` (VIN03164 — deck/fachada dia)
   - `amana-6.jpg` (VIN03181 — hidromassagem)

2. **Criar componente `BangaloCarousel.tsx`**:
   - Usa Embla Carousel (já instalado via shadcn carousel)
   - Props: `images: string[]`, `alt: string`
   - Autoplay a cada 5 segundos com plugin `embla-carousel-autoplay`
   - Setas semitransparentes nas laterais (aparecem no hover)
   - Dots indicadores na parte inferior
   - Transição suave
   - `onClick` não propaga para o `<Link>` pai (para permitir interação com setas sem navegar)

3. **Editar `BangalosListagem.tsx`**:
   - Alterar o modelo de dados do Bangalô Amaná para incluir array de imagens locais
   - Renderizar `BangaloCarousel` no lugar do `<img>` quando há múltiplas imagens
   - Manter `<img>` simples para os outros bangalôs (ainda com Unsplash)

4. **Instalar `embla-carousel-autoplay`** (plugin de autoplay para Embla)

## Detalhes técnicos
- O carrossel fica dentro do `<Link>`, então as setas e dots precisam de `e.preventDefault()` e `e.stopPropagation()` para não acionar a navegação
- Aspect ratio mantido em 4/3 para consistência com os outros cards
- Autoplay pausa no hover para permitir navegação manual

