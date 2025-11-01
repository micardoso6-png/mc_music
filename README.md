# MC Music — Site estático básico

Este pacote contém um site simples em HTML/CSS/JS, pronto para publicar.
Os textos estão em PT-PT e o design é escuro, com carrossel de 5 imagens.

## Estrutura
- `index.html`
- `styles.css`
- `script.js`
- `assets/slide1.svg ... slide5.svg` (placeholders)
- `assets/favicon.svg`

## Como trocar as fotos
Substitua `assets/slide1.svg` ... `slide5.svg` por JPG/PNG reais (1600×900 recomendado).
Mantenha os nomes para não alterar o código, ou edite os `src` no `index.html`.

## Formulário de orçamento (sem backend)
Por omissão o `form` **não** envia email. Opções rápidas:
1) **FormSubmit**: defina `action="https://formsubmit.co/SEU_EMAIL"` e adicione
   `<input type="hidden" name="_captcha" value="false">`.
2) **Formspree**: crie um endpoint e use em `action="https://formspree.io/f/SEU_ID"`.
3) **Netlify Forms** (se hospedar no Netlify): adicione `name="orcamento"` ao `<form>` e o atributo `data-netlify="true"`.
4) **mailto:** como fallback (abre o cliente de email do visitante):
   `action="mailto:booking@mcmusic.pt"` e `enctype="text/plain"`.

Campos incluídos: nome, email, contacto, data, localidade, mensagem + consentimento e honeypot anti-spam.

## Publicar com o seu domínio Google
Tem várias hipóteses (todas grátis ou quase):
- **GitHub Pages**
  1. Crie um repositório `mcmusic-site`.
  2. Faça upload destes ficheiros para a branch `main`.
  3. Em *Settings → Pages*, escolha `Deploy from a branch` → `main / root`.
  4. Em Google Domains aponte o seu domínio para `username.github.io` (CNAME) ou use o assistente.
- **Netlify** ou **Cloudflare Pages**: arraste a pasta para o painel. Depois, em Google Domains, use a opção "Usar com Netlify/Cloudflare".
- **Google Firebase Hosting**: `firebase init hosting` e `firebase deploy` (requer conta Google Cloud).

### DNS no Google Domains
- Se usar **GitHub Pages** com domínio personalizado: crie um registo **CNAME** `www` → `seu-username.github.io`.
- Opcionalmente crie/ajuste **A/AAAA** para apex (sem `www`) seguindo a doc. do alojamento.
- Ative HTTPS no painel do fornecedor (Pages/Netlify/Cloudflare).

## Personalização rápida
- Título/descrição: `<title>` e meta tags no `<head>`.
- Contactos e redes: secção **Contactos & Redes** no `index.html`.
- Cores: ajuste variáveis CSS no topo de `styles.css`.
- Logotipo: troque `assets/favicon.svg` e adicione um `<img>` no header se quiser.

## Acessibilidade & performance
- Carrossel com botões, dots e `aria-live`.
- Navegação mobile com hambúrguer.
- Efeitos leves; sem dependências externas.

Qualquer dúvida, edite os ficheiros e recarregue a página. Boa música! 🎶
