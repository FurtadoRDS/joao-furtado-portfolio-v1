# João Furtado — Portfólio v1

Portfólio pessoal de João Furtado, com foco em oportunidades de desenvolvimento e web como ponto de partida. Implementação original em **React, TypeScript e Tailwind CSS**, com Vite.

## Nesta versão

- Identidade visual em preto e vermelho, com tipografia em destaque.
- Apresentação, formação e experiência profissional com informações reais.
- Animações de entrada e interações que respeitam a preferência de reduzir movimento.
- Navegação para desktop e celular, acordeão de experiência e suporte a teclado.
- Carrossel de projetos com setas, contador, transição suave e navegação por teclado, preservando o layout de destaque de cada projeto.
- Contato por e-mail, telefone, WhatsApp e GitHub, com cópia dos dados.

O **FechaFolha** apresenta uma aplicação para fechamento de salários base e comissões de múltiplas lojas, com armazenamento local e exportação Excel para celular e computador. A captura usa dados fictícios e acompanha o link para o código.

O **Contract Guardian** apresenta o front-end concluído de uma interface para gestão de contratos, com captura real da dashboard e links para o repositório e a demonstração. A prévia usa dados locais no navegador; backend, autenticação real e análise automática de documentos ainda não estão integrados.

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
  images/joao-furtado-profile.webp
src/
  components/
    ContactChannels.tsx
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

O retrato usa a nova foto fornecida por João, com edição do fundo e tratamento leve de nitidez. A versão em cores acompanha a identidade visual do portfólio com um degradê preto e vermelho. As fontes Bebas Neue, DM Sans e IBM Plex Mono são servidas localmente por meio dos pacotes Fontsource; suas licenças acompanham os respectivos pacotes.

O link de e-mail usa `mailto:` para abrir o aplicativo de e-mail do visitante; a pessoa revisa e envia a mensagem por lá. Os links de telefone e WhatsApp abrem os aplicativos correspondentes. Esses contatos não exigem backend. O feedback de cópia só aparece depois de a área de transferência confirmar a operação; se o navegador bloquear a cópia, os dados continuam disponíveis para seleção manual.

Currículo e novos projetos serão adicionados quando seus dados e materiais estiverem definidos.
