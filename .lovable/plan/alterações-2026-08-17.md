Implementar evento do Meta Pixel para rastrear cliques no botão flutuante do WhatsApp.

## Alterações

**Arquivo:** `src/components/layout/WhatsAppButton.tsx`

1. **Adicionar handler de clique ao link do WhatsApp:**
   - Incluir `onClick` no `<a>` existente.
   - Disparar o evento padrão do Meta Pixel: `fbq('track', 'Contact')` — adequado para ações de contato.
   - Disparar também um evento personalizado: `fbq('trackCustom', 'WhatsAppClick')` — para segmentação específica de cliques no WhatsApp.

2. **Proteção contra ausência do Pixel:**
   - Verificar se `window.fbq` está definido antes de chamá-lo, para evitar erros em ambientes onde o script não carregou.

## Resultado Esperado

Todo clique no botão de WhatsApp dispara dois eventos no Meta Pixel: o padrão `Contact` e o custom `WhatsAppClick`. Esses eventos aparecerão no Events Manager para criação de audiences e otimização de campanhas.
