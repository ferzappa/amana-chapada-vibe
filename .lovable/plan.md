

## Correção: Navegação por categorias no Cardápio Digital

### Problema
A barra de categorias (`sticky top-0`) fica por trás da navbar fixa (`fixed top-0, z-50, h-20/h-24`), e o offset de scroll (120px) não compensa a altura combinada dos dois elementos. Resultado: ao clicar numa categoria, a página rola para uma posição errada.

### Solução

**Arquivo: `src/pages/Cardapio.tsx`**

1. **Ajustar posição sticky da barra de categorias** — mudar de `top-0` para `top-20 md:top-24` para que fique abaixo da navbar fixa
2. **Aumentar o offset de scroll** — de 120px para ~160px (navbar ~96px + barra de categorias ~48px + margem)
3. **Ajustar rootMargin do IntersectionObserver** — sincronizar com a nova posição para que o destaque da categoria ativa funcione corretamente

Alteração pontual em um único arquivo, sem impacto em outros componentes.

