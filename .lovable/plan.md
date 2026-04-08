

# Substituir imagem hero da página Bangalôs

## O que será feito
Substituir a imagem de fundo do hero da página de listagem de bangalôs (elemento selecionado na linha 50 de `BangalosListagem.tsx`) pela foto real do hotel enviada (`VIN04214.jpg`).

## Passos

1. **Copiar a imagem** para `src/assets/bangalos-hero.jpg`
2. **Editar `src/pages/BangalosListagem.tsx`**:
   - Importar a imagem: `import bangalosHero from "@/assets/bangalos-hero.jpg"`
   - Substituir a URL Unsplash do hero (linha 50) pelo import `bangalosHero`

