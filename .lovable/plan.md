

## Otimização de imagens para performance

### Problema
73 MB de imagens não comprimidas. Várias com 2-5 MB cada. Isso causa carregamento lento, especialmente em conexões móveis.

### Plano

**1. Comprimir todas as imagens JPG/PNG**
- Usar sharp (Node.js) para redimensionar e comprimir todas as imagens
- Largura máxima: 1600px (suficiente para telas retina)
- Qualidade JPEG: 80% (bom equilíbrio qualidade/tamanho)
- Converter o PNG (fitness-center.png) para JPEG
- Meta: cada imagem abaixo de 300 KB

**2. Gerar versões WebP (opcional, maior ganho)**
- WebP oferece ~30% menos peso que JPEG na mesma qualidade
- Manter JPG como fallback

### Resultado esperado
- De ~73 MB para ~8-12 MB total
- Carregamento 5-8x mais rápido
- Sem perda visual perceptível

### Detalhes técnicos
- Script Node.js com `sharp` para processar todas as imagens em batch
- Substituição in-place dos arquivos em `src/assets/`
- Sem alteração de código nos componentes (mesmos nomes de arquivo)

