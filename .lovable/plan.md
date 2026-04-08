

# Vídeo do Hero na Home

## O que será feito
Substituir a imagem estática do hero da Home pelo vídeo `Telas_Amaná.mp4` enviado, criando um background de vídeo em loop, mudo e autoplay — padrão para sites de hotelaria de luxo.

## Passos

1. **Copiar o vídeo** para `public/videos/hero.mp4` (pasta public, pois vídeos grandes não devem passar pelo bundler Vite)

2. **Editar `src/pages/Index.tsx`** — substituir o `<img>` do hero por um `<video>` com:
   - `autoPlay`, `muted`, `loop`, `playsInline` (essencial para mobile)
   - `poster` com a imagem Unsplash atual como fallback enquanto carrega
   - Classes `absolute inset-0 w-full h-full object-cover`
   - Remover a constante `heroImage` (ou mantê-la apenas como poster)

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  poster="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop&q=80"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

