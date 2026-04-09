

# Comprimir hero.mp4

## Diagnóstico atual
| Propriedade | Valor |
|---|---|
| Tamanho | **62 MB** (muito pesado para web) |
| Duração | 1min 07s |
| Resolução | 1920×1080 |
| Codec | HEVC (H.265) |
| Bitrate | ~7.5 Mbps |
| FPS | 30 |

**Problemas**: 62 MB é excessivo para um hero video — o ideal para web é 5-10 MB. Além disso, HEVC não tem suporte universal em navegadores (Safari OK, mas Chrome/Firefox parcial).

## O que será feito

1. **Recodificar para H.264** (compatibilidade universal) com bitrate reduzido (~1.5 Mbps)
2. **Reduzir duração** para ~15-20s (hero videos longos não agregam valor e pesam muito)
3. **Remover faixa de áudio** (já usa `muted`)
4. **Meta estimada**: arquivo final entre 4-8 MB

Comando de compressão:
```
ffmpeg -i hero.mp4 -t 20 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart hero-compressed.mp4
```

Se preferir manter a duração completa (67s), o arquivo ficará ~15 MB — ainda uma melhoria de 75%.

