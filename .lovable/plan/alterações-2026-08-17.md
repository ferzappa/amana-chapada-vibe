Instalação do Meta Pixel 2870923963297829 no site Amaná Hotel.

## Alterações

**Arquivo:** `index.html`

1. **Script do Meta Pixel no `<head>`:**
   - Adicionar o código base do Facebook Pixel (`fbevents.js`) imediatamente antes do fechamento `</head>`.
   - Incluir a chamada `fbq('init', '2870923963297829')` e `fbq('track', 'PageView')`.

2. **Fallback `<noscript>` no `<body>`:**
   - Adicionar a tag `<noscript><img ... /></noscript>` com o pixel de 1×1, posicionada dentro do `<body>` (após o `<div id="root">` ou antes do fechamento `</body>`).
   - Isso atende à regra HTML5 de que `<noscript>` no `<head>` só pode conter metadados; o fallback de pixel deve estar no `<body>`.

## Resultado Esperado

O Meta Pixel estará ativo em todas as páginas do site, permitindo rastreamento de PageView e preparação para eventos personalizados futuros no Facebook Ads / Meta Events Manager.
