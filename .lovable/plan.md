

# Enquadrar melhor a foto do prato no Restaurante

**Arquivo**: `src/pages/Restaurante.tsx` (linha 51)

Ajustar o `object-position` da imagem para mostrar o prato completo e parte da taça. Atualmente usa `object-cover` com posição padrão (center), que pode estar cortando partes importantes.

**Alteração**: Adicionar `object-position: center 60%` (ou similar) para deslocar o enquadramento levemente para baixo, revelando mais do prato e a taça. Também aumentar a altura de `h-[450px]` para `h-[500px]` se necessário para dar mais espaço vertical.

Pode ser necessário ajustar o valor exato do `object-position` após visualizar o resultado.

