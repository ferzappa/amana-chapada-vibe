

## Corrigir logo com fundo preto

### Problema
A compressão com `sharp` converteu o `logo.png` para modo palette, removendo a transparência. O fundo transparente virou preto.

### Solução
Reprocessar o `logo.png` preservando o canal alpha (RGBA):

1. Usar `sharp` para recomprimir o logo mantendo transparência PNG
2. Redimensionar para largura máxima de 800px (suficiente para o uso no navbar)
3. Usar compressão PNG com `palette: false` para preservar RGBA

```js
sharp('src/assets/logo.png')
  .resize({ width: 800, withoutEnlargement: true })
  .png({ quality: 80, palette: false })
  .toFile(output)
```

### Resultado
Logo volta a ter fundo transparente, mantendo tamanho otimizado.

