

## Cardápio Digital — Página e Integração

### O que será feito

Criar uma nova página `/cardapio-amana-hotel` com o cardápio digital completo extraído do PDF, organizado por categorias. Atualizar o botão "Ver cardápio" na página do Restaurante para redirecionar internamente.

### Estrutura da página

A página terá:
1. **Hero compacto** com fundo escuro (bg-chumbo) e título "Cardápio"
2. **Navegação por categorias** — barra horizontal fixa com scroll, permitindo pular para cada seção
3. **Seções do cardápio** — cada categoria com seus itens (nome, descrição, preço)
4. **CTA final** — botão para reservar mesa via WhatsApp

### Categorias (14 no total)
Entradas · Saladas · Sanduíches · Caldos · Pratos Principais · Adicionais · Sobremesas · Cafés e Chás · Licores · Bebidas sem Álcool · Sucos e Sodas · Cervejas · Drinks · Destilados

### Design
- Fundo `bg-branco` com seções alternando `bg-creme`
- Nome do prato em `font-serif` (Cormorant Garamond), preço alinhado à direita
- Descrição em `text-muted-foreground italic`
- Separadores sutis entre itens
- Sem fotos por enquanto (estrutura pronta para adicionar depois)
- Estética contemplativa alinhada ao design system existente

### Alterações técnicas

| Arquivo | Ação |
|---------|------|
| `src/pages/Cardapio.tsx` | **Criar** — página completa do cardápio digital |
| `src/pages/Restaurante.tsx` | **Editar** — botão "Ver cardápio" vira `Link` interno para `/cardapio-amana-hotel` |
| `src/App.tsx` | **Editar** — adicionar rota `/cardapio-amana-hotel` |

### Dados do cardápio
Todos os itens extraídos do PDF serão codificados como dados estáticos dentro do componente, organizados em um array tipado por categoria.

