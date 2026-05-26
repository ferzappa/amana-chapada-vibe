## Diagnóstico confirmado

- Domínio afetado: **amanahotel.com.br** (não o `.com`).
- DNS gerenciado pelo **Registro.br** (nameservers `b.sec.dns.br` / `c.sec.dns.br`).
- Registro **A** → `185.158.133.1` (site OK, apontando para o Lovable).
- Registros **MX vazios** e **SPF (TXT) vazio** → causa direta da queda dos e-mails.
- Caixas hospedadas em **Google Workspace**. As mensagens e contas continuam intactas nos servidores do Google; só falta o DNS dizer ao mundo para entregar as mensagens lá.

O Lovable não causou e não resolve isso — toda a correção é feita no painel do **Registro.br**, sem mexer no código do site.

## Plano de restauração (painel do Registro.br)

### 1. Acessar o DNS no Registro.br
- Entrar em `registro.br` com a conta titular do domínio.
- Abrir **amanahotel.com.br → DNS → Editar zona** (ou "Configurar DNS").

### 2. Recriar os 5 registros MX do Google Workspace

```text
Nome  Tipo  Prioridade  Dados
@     MX    1           ASPMX.L.GOOGLE.COM.
@     MX    5           ALT1.ASPMX.L.GOOGLE.COM.
@     MX    5           ALT2.ASPMX.L.GOOGLE.COM.
@     MX    10          ALT3.ASPMX.L.GOOGLE.COM.
@     MX    10          ALT4.ASPMX.L.GOOGLE.COM.
```

Manter o ponto final no fim de cada destino (padrão do Registro.br).

### 3. Recriar o SPF como registro TXT no host `@`

```text
v=spf1 include:_spf.google.com ~all
```

### 4. Recriar o DKIM (recomendado, evita cair em spam)
- Em `admin.google.com` → **Apps → Google Workspace → Gmail → Autenticar e-mail**, selecionar o domínio `amanahotel.com.br` e **gerar nova chave (2048 bits)**.
- O Google mostrará um registro TXT com host parecido com `google._domainkey` e um valor longo.
- No Registro.br, adicionar esse TXT exatamente como mostrado.
- Voltar ao Google Admin e clicar em **Iniciar autenticação**.

### 5. (Opcional, mas recomendado) DMARC
TXT no host `_dmarc`:

```text
v=DMARC1; p=none; rua=mailto:postmaster@amanahotel.com.br
```

### 6. Aguardar propagação e validar
- Propagação típica: 15 min a 2 h.
- Validar em `https://mxtoolbox.com/SuperTool.aspx` com `amanahotel.com.br` → **MX Lookup**, **SPF Lookup**, **DKIM Lookup** (seletor `google`).
- Testar enviando de um Gmail externo para uma caixa `@amanahotel.com.br` e respondendo de volta.

## Sobre acesso ao Google Admin

Se não souber a senha de admin do Workspace:
- Tentar `admin.google.com` com o e-mail principal do domínio.
- Se perdido, usar **"Esqueci a senha"** ou o fluxo de recuperação por DNS do próprio Google (eles pedem para adicionar um TXT temporário para provar posse do domínio — também via Registro.br).

## O que eu posso e o que eu não posso fazer

- **Posso**: te guiar clique a clique no Registro.br e no Google Admin, validar MX/SPF/DKIM por DNS depois que você salvar, e diagnosticar qualquer registro que ficar errado.
- **Não posso**: editar o Registro.br nem o Google Admin por você — esses painéis exigem o seu login. Nada disso passa por código do site.

Confirma este plano para eu seguir te orientando passo a passo na execução.
