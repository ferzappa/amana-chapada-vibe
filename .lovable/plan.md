## Alterações na página Sobre (`src/pages/Sobre.tsx`)

### 1. Remover a seção de diferenciais
Remover completamente o bloco mostrado na captura de tela (números 12, 40, 600, ∅, 12:1):
- Remover a `<section>` "Diferenciais" (com fundo `bg-creme`) que renderiza o array `diferenciais`.
- Remover também a constante `diferenciais` no topo do arquivo, já que não será mais utilizada.

### 2. Foto da piscina
Aguardar o upload da nova imagem da piscina pela usuária. Quando ela enviar na próxima mensagem, a imagem será copiada para `public/lovable-uploads/` (ou `src/assets/`) e o caminho no bloco "Piscina" do array `blocos` será atualizado, substituindo o arquivo inexistente `cdd1d6d2-cb54-4f7a-a8dd-25f1a1d40141.jpg`.

## Resultado esperado
- A faixa horizontal com os 5 diferenciais (12 bangalôs, 40 hectares, 600 fios, ∅ design, 12:1 hóspedes/funcionário) desaparece da página Sobre.
- A foto quebrada da piscina será corrigida assim que a nova imagem for enviada.