# João Furtado — Portfólio

Meu portfólio pessoal: quem eu sou, o que eu sei, onde trabalho e o que estou construindo.

**No ar:** [joao-furtado-portfolio-v1.vercel.app](https://joao-furtado-portfolio-v1.vercel.app/) · **LinkedIn:** [joao-guilherme-pereira-furtado](https://www.linkedin.com/in/joao-guilherme-pereira-furtado)

## O site

- Feito com React, TypeScript e Tailwind CSS, usando Vite.
- Seções: Sobre, Conhecimentos, Experiência, Projetos e Contato.
- Carrossel de projetos com setas, contador e navegação por teclado.
- Acessibilidade: link para pular ao conteúdo, suporte a leitores de tela e respeito à preferência de reduzir movimento.
- Currículo em PDF para baixar, e e-mail e telefone com botão de copiar.
- Prévia com foto quando o link é compartilhado no WhatsApp ou no LinkedIn.

## Como rodar

Requisitos: Node.js 22.12 ou mais recente.

```sh
npm ci
npm run dev
```

Para gerar e testar a versão de produção:

```sh
npm run build
npm run preview
```

O `build` já roda a checagem de tipos do TypeScript antes de gerar os arquivos em `dist/`.

## Onde fica o conteúdo

Todo o texto do site está em `src/content/profile.ts`: perfil, experiência, conhecimentos e projetos. Para adicionar um projeto, incluo um item no array `projects`, e a ordem do array é a ordem do carrossel. As capturas de tela ficam em `public/images/projects/` e usam sempre dados fictícios.

## Estrutura

```text
public/
  curriculo-joao-furtado.pdf
  og-image.jpg          imagem da prévia de link
  images/
src/
  components/           Projects, Skills, ContactChannels, Icons
  content/profile.ts    textos e dados do site
  hooks/useReveal.ts    animação de entrada das seções
  App.tsx
  styles.css
```

As fontes Bebas Neue, DM Sans e IBM Plex Mono são servidas localmente pelos pacotes Fontsource.
