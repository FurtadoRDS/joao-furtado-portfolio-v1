# João Furtado — Portfólio v1

Portfólio pessoal de João Furtado, com foco em oportunidades de desenvolvimento e web como ponto de partida. Implementação original em **React, TypeScript e Tailwind CSS**, com Vite.

## Nesta versão

- Identidade visual em preto e vermelho, com tipografia em destaque.
- Apresentação, formação e experiência profissional com informações reais.
- Animações de entrada e interações que respeitam a preferência de reduzir movimento.
- Navegação para desktop e celular, acordeão de experiência e suporte a teclado.
- Seção preparada para receber projetos posteriormente.
- Contato pelo perfil público do GitHub.

O **Contract Guardian** aparece somente como projeto em desenvolvimento. Seus detalhes serão adicionados em outra etapa. A composição “CG” é uma arte tipográfica, não uma captura da aplicação.

## Executar localmente

Requisitos: Node.js **22.12+** ou uma versão LTS posterior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço local exibido pelo Vite.

## Verificar e gerar a versão de produção

```sh
npm run typecheck
npm run build
npm run preview
```

O comando de build já executa a verificação de tipos e gera os arquivos estáticos em `dist/`. A aplicação não exige variáveis de ambiente ou servidor de API. O campo `private` do `package.json` impede publicação acidental no registro npm; ele não define a visibilidade deste repositório no GitHub.

## Organização

```text
public/
  favicon.svg
  images/joao-furtado.png
src/
  components/
    Icons.tsx
    Projects.tsx
  content/profile.ts
  hooks/useReveal.ts
  App.tsx
  main.tsx
  styles.css
```

O conteúdo confirmado fica em `src/content/profile.ts`. A seção de projetos usa os tipos e o array `projects` desse arquivo. Veja [como adicionar projetos](docs/PROJETOS.md).

## Conteúdo e materiais

O texto apresenta a formação de João em Sistemas de Informação e sua experiência em suporte de TI no Grupo Rio Mais, incluindo acompanhamento de chamados no Auvo. Não atribui experiência profissional em desenvolvimento a esse trabalho de suporte.

O retrato é uma foto real de João, usada provisoriamente nesta primeira composição. As fontes Bebas Neue, DM Sans e IBM Plex Mono são servidas localmente por meio dos pacotes Fontsource; suas licenças acompanham os respectivos pacotes.

Não há formulário com envio simulado. Outros canais de contato, currículo e projetos serão adicionados quando seus dados e materiais estiverem definidos.
