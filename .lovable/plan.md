

## Adicionar seção Wedding na Home

### O que será feito

Incluir uma nova seção na home (`src/pages/Index.tsx`) direcionando para a página `/wedding-chapada-dos-veadeiros`, seguindo o padrão visual das demais seções (grid 5 colunas, label + título + descrição + CTA), porém com um **carrossel de fotos com setas de navegação** no lugar da imagem estática.

### Estrutura da seção

- **Posição**: após a seção "Gastronomia" e antes da seção "Experiências"
- **Background**: `bg-creme` (alternando com a seção anterior `bg-branco`)
- **Layout**: grid `lg:grid-cols-5`
  - Coluna de texto (2/5) — ordem invertida (texto à esquerda, imagem à direita)
  - Coluna do carrossel (3/5)
- **Conteúdo textual**:
  - Label: "Casamentos"
  - Título: "Celebrações no coração do cerrado"
  - Descrição: tom contemplativo sobre casamentos íntimos com o cerrado como cenário natural
  - CTA: "Wedding Amaná" → `/wedding-chapada-dos-veadeiros`

### Carrossel

Reutilizar o componente existente `src/components/BangaloCarousel.tsx`, que já implementa:
- Setas de navegação (ChevronLeft / ChevronRight) que aparecem no hover
- Dots indicadores
- Autoplay com pausa no hover
- Loop infinito

Ajuste mínimo: usar o componente como está, passando 4-5 fotos de wedding.

### Imagens

Como ainda não há fotos específicas de wedding no projeto, usarei como **placeholders** imagens já existentes no projeto que evocam o ambiente (paisagem, gastronomia, bangalô). O usuário poderá substituir depois enviando fotos reais de casamentos.

Imagens placeholder a usar:
- `chapada-veadeiros.jpg`
- `gastronomia.jpg`
- `bangalo-amana.jpg`
- `wellness-spa.jpg`

### Alterações técnicas

| Arquivo | Ação |
|---------|------|
| `src/pages/Index.tsx` | Importar `BangaloCarousel` + 4 imagens placeholder. Adicionar nova `<section>` Wedding entre Gastronomia e Experiências. |

### Observação
Após a implementação, recomendo ao usuário enviar fotos reais de casamentos para substituir os placeholders.

