
Atualizar o link "Reservas" no rodapé para direcionar ao sistema externo Hbook.

## Alteração

**Arquivo:** `src/components/layout/Footer.tsx`

No array `quickLinks`, substituir o item "Reservas" (atualmente `{ label: "Reservas", href: "/reservas-hotel-chapada-dos-veadeiros" }`) para que aponte para a URL externa do Hbook.

Como os demais links do rodapé usam o componente `<Link>` do React Router, será necessário ajustar a renderização para detectar links externos (começando com `http`) e renderizá-los como `<a>` com `target="_blank"` e `rel="noopener noreferrer"`, mantendo o estilo visual idêntico aos outros links.

## Resultado Esperado

O link "Reservas" no rodapé abrirá `https://hbook.hsystem.com.br/Booking?companyId=668e8f59ea1c96c25a39ce02` em uma nova aba, consistente com o botão "Reservas" da barra de navegação.
