

# Corrigir imagens quebradas na página Sobre

## Problema
Três imagens na página **Sobre** (`Sobre.tsx`) apontam para arquivos em `/lovable-uploads/` que não existem no diretório `public/lovable-uploads/`:

| Seção | Caminho referenciado | Existe? |
|---|---|---|
| Piscina | `/lovable-uploads/d5316166-...jpg` | Não |
| Academia | `/lovable-uploads/35ed9e0f-...png` | Não |
| Cachoeira Privativa | `/lovable-uploads/cachoeira-privativa.jpg` | Sim |
| Beach Tennis | `/lovable-uploads/88fe57b0-...jpg` | Não |

## Solução

Copiar os 3 arquivos originais (que foram enviados pelo usuário em mensagens anteriores) para `public/lovable-uploads/` com os nomes corretos:

1. `user-uploads://d5316166-2663-466e-b5be-970bbdcde9ba.jpg` → `public/lovable-uploads/d5316166-2663-466e-b5be-970bbdcde9ba.jpg` (Piscina)
2. `user-uploads://35ed9e0f-135f-477d-9291-f84a6d42d062.png` → `public/lovable-uploads/35ed9e0f-135f-477d-9291-f84a6d42d062.png` (Academia)
3. `user-uploads://88fe57b0-a5c1-4904-97a9-c6904a5d6323.jpg` → `public/lovable-uploads/88fe57b0-a5c1-4904-97a9-c6904a5d6323.jpg` (Beach Tennis)

Nenhuma alteração de código necessária — apenas copiar os arquivos para o local correto.

