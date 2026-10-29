# Adicionar projetos

A seção está preparada em `src/components/Projects.tsx`. O array exportado `projects`, em `src/content/profile.ts`, permanece vazio até que existam informações confirmadas para publicação.

Enquanto o array estiver vazio, a página mostra apenas o nome **Contract Guardian** e o status **Em desenvolvimento**, sem presumir funcionalidades, tecnologias, clientes ou resultados.

## Campos do modelo

| Campo | Obrigatório | Conteúdo |
| --- | --- | --- |
| `title` | Sim | Nome real do projeto. |
| `summary` | Sim | Problema que resolve e o que funciona atualmente. |
| `role` | Sim | Participação individual de João no trabalho. |
| `technologies` | Sim | Tecnologias realmente utilizadas. |
| `screenshot` | Não | Caminho de uma captura real, preferencialmente em `public/images/`. |
| `repository` | Não | URL do repositório do próprio projeto, quando disponível. |
| `demo` | Não | URL de uma demonstração funcional, quando disponível. |

O componente só exibe imagem e links quando esses campos estão preenchidos. Um perfil genérico do GitHub não deve substituir o link de um projeto. Use capturas e descrições que possam ser compartilhadas publicamente.

Após atualizar os dados e incluir os materiais necessários, execute `npm run build` e confira a apresentação em telas largas e estreitas.
