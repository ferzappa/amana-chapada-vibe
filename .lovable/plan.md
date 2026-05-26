## Diagnóstico

Consultei o DNS real do `amanahotelchapada.com` agora e confirmei:

- **DNS gerenciado pelo Wix** (nameservers `ns10.wixdns.net` / `ns11.wixdns.net`) — não pelo Registro.br nem pelo Lovable.
- **Registro A** apontando corretamente para o Lovable (`185.158.133.1`). O site está OK.
- **Registros MX (e-mail) vazios.** É a causa direta da queda dos e-mails.
- **SPF (TXT) também vazio**, o que afetará entrega assim que o MX voltar.

Suas caixas postais são **Google Workspace contratado dentro do Wix** ("Mailbox by Google" / "Professional Email by Google"). As mensagens e contas **não foram apagadas** — continuam nos servidores do Google. O que sumiu foi apenas o "endereço" (MX) que diz ao mundo para entregar e-mails do seu domínio no Google.

A correção é recriar os registros MX e SPF do Google no painel de DNS do Wix. Ao restaurar, o fluxo volta sozinho (entregas pendentes em servidores remotos costumam reentregar nas próximas horas).

## Importante: o Lovable não causou e não resolve isso

O domínio nunca foi "trazido para o Lovable" no sentido de DNS — ele continua no **Wix**, que apenas aponta o site para o Lovable via registro A. Toda a correção é feita no **painel do Wix**, não no Registro.br nem no Lovable. Não há nada para mudar no código do site.

## Plano de restauração (passo a passo, no painel do Wix)

### 1. Confirmar que as caixas postais do Google ainda existem
- Entrar em `admin.google.com` com o e-mail de administrador (provavelmente o seu principal `@amanahotelchapada.com` ou o e-mail pessoal usado na contratação via Wix).
- Se conseguir entrar e ver os usuários listados, as caixas e o histórico estão intactos. Só falta DNS.
- Se não souber a senha de admin, acessar o painel do Wix → **Configurações → Caixas de e-mail** (ou "Mailbox by Google") → opção "Gerenciar no Google Admin", que loga direto.

### 2. Recriar os registros MX do Google no DNS do Wix
No Wix: **Configurações do site → Domínios → amanahotelchapada.com → Avançado → Editar registros DNS → MX**.

Adicionar exatamente estes 5 registros (valores oficiais do Google Workspace):

```text
Host  Prioridade  Aponta para
@     1           ASPMX.L.GOOGLE.COM
@     5           ALT1.ASPMX.L.GOOGLE.COM
@     5           ALT2.ASPMX.L.GOOGLE.COM
@     10          ALT3.ASPMX.L.GOOGLE.COM
@     10          ALT4.ASPMX.L.GOOGLE.COM
```

TTL: deixar o padrão (1 hora).

### 3. Recriar o SPF (registro TXT) para entrega não cair em spam
Adicionar um registro **TXT** no host `@`:

```text
v=spf1 include:_spf.google.com ~all
```

### 4. (Recomendado) Recriar DKIM
- Em `admin.google.com` → **Apps → Google Workspace → Gmail → Autenticar e-mail**, gerar a chave DKIM.
- Copiar o registro TXT mostrado (host tipo `google._domainkey`) e adicionar no DNS do Wix.
- Voltar ao Google Admin e clicar em **Iniciar autenticação**.

### 5. Aguardar propagação e validar
- Propagação típica: 15 min a 2 h (pode chegar a 24 h em casos raros).
- Validar em `https://mxtoolbox.com/SuperTool.aspx` digitando `amanahotelchapada.com` e rodando **MX Lookup** e **SPF Lookup**.
- Enviar um teste de um Gmail externo para um endereço `@amanahotelchapada.com` e responder de volta.

## Sobre o segundo domínio (`amanahotel.com.br`)

Você indicou que só o `.com` perdeu o e-mail, mas vale conferir: se quiser, eu rodo o mesmo diagnóstico no `.com.br` (esse sim está no Registro.br) para garantir que MX/SPF estão íntegros lá. Posso fazer isso na etapa de execução, se autorizar.

## O que eu posso e o que eu não posso fazer

- **Posso**: diagnosticar DNS, confirmar propagação depois que você editar, te orientar parafuso a parafuso no painel do Wix e do Google Admin, e validar o SPF/MX/DKIM final.
- **Não posso**: editar o DNS dentro do Wix nem o Google Admin por você — esses painéis exigem o seu login. Também não preciso (nem devo) mexer no código do site para isso.

Confirma este plano que eu sigo para a fase de execução: rodar o diagnóstico do `.com.br`, te guiar nos cliques exatos do Wix e do Google Admin, e validar o resultado.