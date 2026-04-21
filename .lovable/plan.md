
Substituir todos os botões/links internos que apontam para `/reservas-hotel-chapada-dos-veadeiros` por links externos para o sistema Hbook.

## Alterações

Em cada local abaixo, substituir o componente `<Link to="/reservas-hotel-chapada-dos-veadeiros">` por uma tag `<a>` com:
- `href="https://hbook.hsystem.com.br/Booking?companyId=668e8f59ea1c96c25a39ce02"`
- `target="_blank"`
- `rel="noopener noreferrer"`
- Mantendo as mesmas classes CSS e textos atuais.

**Arquivos:**
1. `src/components/layout/FloatingCTA.tsx` — botão flutuante "Melhor tarifa aqui".
2. `src/components/BangaloTemplate.tsx` (linha 40) — botão "Reservar este bangalô" usado em todas as páginas de bangalôs.
3. `src/pages/Index.tsx` (linha 75) — CTA principal do hero da home.
4. `src/pages/Index.tsx` (linha 272) — CTA secundário da home.

A rota `/reservas-hotel-chapada-dos-veadeiros` em `src/App.tsx` será mantida para que a página `Reservas.tsx` continue acessível diretamente, sem afetar a navegação atual.

## Resultado Esperado
Todos os botões de reserva no site (hero, CTA da home, botão flutuante e botões nas páginas de bangalôs) abrirão o sistema Hbook em uma nova aba, consistente com os botões "Reservas" do Navbar e do rodapé.
