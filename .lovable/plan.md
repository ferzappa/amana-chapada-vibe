

## Atualizar seção de serviços do SPA Amaná

### O que será feito

Substituir a lista atual de serviços (3 categorias genéricas) pelos 14 tratamentos reais fornecidos, cada um com nome, descrição e duração de 60 minutos.

### Estrutura

A seção `bg-creme` será redesenhada com um layout de cards em grid (1 coluna mobile, 2 colunas tablet, 3 colunas desktop). Cada card exibirá:
- Nome do serviço (título serif)
- Descrição contemplativa (texto muted)
- Duração: 60 min (label discreto)

Um subtítulo "Todos os tratamentos têm duração de 60 minutos" será exibido acima do grid para evitar repetição.

### Alterações técnicas

| Arquivo | Ação |
|---------|------|
| `src/pages/Spa.tsx` | Substituir o array `servicos` por um array de 14 objetos `{ name, description }`. Redesenhar a seção de serviços com grid de cards elegantes. |

### Dados dos serviços

Os 14 tratamentos serão codificados como dados estáticos:
1. Massagem Relaxante
2. Thai Massagem Avançada
3. Manipulação e Liberação Miofascial
4. Massagem Terapêutica
5. Harmonização dos Chakras / Reiki
6. Massagem Integrativa
7. Spa dos Pés
8. Shiatsu
9. Pedras Quentes
10. Massagem Desportiva
11. Massagens Ayurvédicas
12. Ventosaterapia
13. Drenagem Linfática
14. Magnified Healing (Cura Energética)

### Visual

Cards com fundo branco sobre a seção creme, sem border-radius (seguindo o design system), com espaçamento generoso e animação de reveal ao scroll. Tom contemplativo mantido nas descrições.

