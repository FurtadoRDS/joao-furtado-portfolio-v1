# Adicionar projetos

A seção está em `src/components/Projects.tsx`. O array exportado `projects`, em `src/content/profile.ts`, contém os projetos com informações confirmadas para publicação, incluindo o front-end do Contract Guardian.

O Contract Guardian usa uma captura real da dashboard, descreve as funcionalidades da interface e informa a ausência de integração com o backend. Não presuma funcionalidades adicionais, clientes ou resultados.

## Campos do modelo

| Campo | Obrigatório | Conteúdo |
| --- | --- | --- |
| `title` | Sim | Nome real do projeto. |
| `summary` | Sim | Problema que resolve e o que funciona atualmente. |
| `role` | Sim | Participação individual de João no trabalho. |
| `technologies` | Sim | Tecnologias realmente utilizadas. |
| `status` | Não | Estado atual da entrega, distinguindo front-end e sistema completo. |
| `note` | Não | Limitações relevantes da demonstração. |
| `screenshot` | Não | Caminho de uma captura real, preferencialmente em `public/images/`. |
| `screenshotAlt` | Não | Descrição acessível da tela capturada. |
| `repository` | Não | URL do repositório do próprio projeto, quando disponível. |
| `demo` | Não | URL de uma demonstração funcional, quando disponível. |
| `demoHint` | Não | Instrução breve para explorar a demonstração. |

O componente só exibe imagem e links quando esses campos estão preenchidos. Um perfil genérico do GitHub não deve substituir o link de um projeto. Use capturas e descrições que possam ser compartilhadas publicamente.

Após atualizar os dados e incluir os materiais necessários, execute `npm run build` e confira a apresentação em telas largas e estreitas.
