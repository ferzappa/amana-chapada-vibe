
Atualizar o botão "Reservas" na barra de navegação para direcionar para o link externo do Hbook.

## Alterações

**Arquivo:** `src/components/layout/Navbar.tsx`

1. **Versão Desktop (linhas 64-69):** Substituir o componente `<Link to="/reservas-hotel-chapada-dos-veadeiros">` por uma tag `<a>` com:
   - `href="https://hbook.hsystem.com.br/Booking?companyId=668e8f59ea1c96c25a39ce02"`
   - `target="_blank"`
   - `rel="noopener noreferrer"`

2. **Versão Mobile (linhas 103-108):** Aplicar a mesma alteração no menu mobile, substituindo o `<Link>` por `<a>` com os mesmos atributos.

## Resultado Esperado
O botão "Reservas" na barra superior (tanto desktop quanto mobile) abrirá o sistema de reservas Hbook em uma nova aba.
