export interface Education {
  course: string;
  institution: string;
  graduationYear: string;
}

export interface ExperienceArea {
  title: string;
  description: string;
  tag?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  areas: ExperienceArea[];
}

export interface CurrentProject {
  name: string;
  status: string;
}

export interface Profile {
  name: string;
  fullName: string;
  headline: string;
  summary: string;
  location: string;
  education: Education;
  experience: Experience;
  currentProject: CurrentProject;
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
  };
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
}

export interface SkillGroup {
  title: string;
  items: string[];
  usedIn: string;
}

export interface Project {
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  status?: string;
  note?: string;
  screenshot?: string;
  screenshotAlt?: string;
  screenshotCaption?: string;
  repository?: string;
  demo?: string;
  demoHint?: string;
  privacy?: string;
}

export const profile: Profile = {
  name: 'João Furtado',
  fullName: 'João Guilherme Pereira Furtado',
  headline: 'Desenvolvimento web com React, TypeScript e Laravel.',
  summary:
    'Sou estudante de Sistemas de Informação e estagiário de suporte de TI no Grupo Rio Mais, onde também desenvolvo o sistema interno de gestão de contratos da empresa. Busco um estágio em desenvolvimento web para seguir evoluindo com React, TypeScript e Laravel.',
  location: 'Cabo Frio',
  education: {
    course: 'Sistemas de Informação',
    institution: 'Estácio',
    graduationYear: '2029',
  },
  experience: {
    role: 'Estagiário de Suporte de TI',
    company: 'Grupo Rio Mais',
    period: 'Junho de 2026 — atual',
    summary:
      'Atuo no atendimento a usuários e na infraestrutura de TI da empresa, com suporte presencial e remoto, manutenção de rede, organização de racks e instalação de CFTV. A convite da empresa, também desenvolvo o sistema interno de gestão de contratos.',
    areas: [
      {
        title: 'Desenvolvimento do sistema interno',
        description:
          'A convite da empresa, e além das atribuições do cargo, desenvolvo o Contract Guardian: o sistema interno de gestão de contratos, do front-end ao back-end.',
        tag: 'Contract Guardian',
      },
      {
        title: 'Atendimento e diagnóstico',
        description:
          'Resolvo problemas de computadores, impressoras, rede, e-mail e acessos. Diagnostico a causa e explico a solução em linguagem simples, com registro e acompanhamento de chamados no Auvo.',
        tag: 'Chamados / Auvo',
      },
      {
        title: 'Rede e conectividade',
        description:
          'Atuo na manutenção da rede da empresa, com roteadores, switches e Wi-Fi.',
      },
      {
        title: 'Racks e cabeamento',
        description:
          'Organizei racks em diversas franquias, identificando cabos e equipamentos para facilitar a manutenção.',
      },
      {
        title: 'Câmeras e DVR',
        description:
          'Instalo e configuro câmeras e DVR, incluindo cabeamento, posicionamento, gravação e acesso remoto. Realizei cerca de 40 instalações de CFTV em clínicas e bases da empresa, além das manutenções.',
      },
    ],
  },
  currentProject: {
    name: 'Contract Guardian',
    status: 'Em desenvolvimento',
  },
  contact: {
    email: 'joaogpfurtado@gmail.com',
    phone: '+5522974024337',
    phoneDisplay: '+55 (22) 97402-4337',
  },
  links: {
    github: 'https://github.com/FurtadoRDS',
    linkedin: 'https://www.linkedin.com/in/joao-guilherme-pereira-furtado',
    resume: '/curriculo-joao-furtado.pdf',
  },
};

export const skillsSummary =
  'Uso React e TypeScript em todos os meus projetos. No Contract Guardian, levei esse trabalho ao back-end, com Laravel, PostgreSQL e Docker.';

export const skills: SkillGroup[] = [
  {
    title: 'Front-end',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
    usedIn: 'Contract Guardian, FechaFolha e este site',
  },
  {
    title: 'Back-end',
    items: ['PHP', 'Laravel', 'APIs REST'],
    usedIn: 'Contract Guardian',
  },
  {
    title: 'Banco de dados',
    items: ['PostgreSQL'],
    usedIn: 'Contract Guardian',
  },
  {
    title: 'Testes',
    items: ['Vitest', 'Testing Library', 'PHPUnit'],
    usedIn: 'Contract Guardian',
  },
  {
    title: 'Ferramentas e DevOps',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Vercel'],
    usedIn: 'Contract Guardian, FechaFolha e este site',
  },
  {
    title: 'Infraestrutura de TI',
    items: ['Redes', 'Cabeamento', 'CFTV', 'Help desk'],
    usedIn: 'Estágio no Grupo Rio Mais',
  },
];

export const projects: Project[] = [
  {
    title: 'Contract Guardian',
    status: 'Sistema interno · em desenvolvimento',
    summary:
      'Sistema web de gestão de contratos que desenvolvo para o Grupo Rio Mais. Reúne cadastro de contratos com anexo em PDF, dashboard de custos, calendário de vencimentos, relatórios, controle de acesso por perfis e avisos por e-mail. O projeto tem mais de 120 testes automatizados rodando em integração contínua.',
    role: 'Desenvolvimento do front-end e do back-end, a convite da empresa.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    screenshot: '/images/projects/contract-guardian-dashboard-wide.jpg',
    screenshotAlt: 'Dashboard do Contract Guardian com indicadores de contratos, custos e saúde da carteira, em uma conta ainda sem contratos cadastrados.',
    screenshotCaption: 'Dashboard · conta sem contratos cadastrados',
    privacy: 'Código privado · sistema interno da empresa',
  },
  {
    title: 'FechaFolha',
    status: 'Aplicação web · armazenamento local',
    summary:
      'Aplicação para organizar o fechamento de salários e comissões de múltiplas lojas. Permite cadastrar funcionários, calcular comissões fixas ou percentuais, consultar os totais da rede e exportar relatórios Excel em formatos para celular e computador.',
    role: 'Desenvolvimento da aplicação web.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'xlsx-js-style'],
    note:
      'A aplicação armazena os dados localmente no navegador, sem sincronização entre dispositivos. O escopo é o fechamento de salários base e comissões.',
    screenshot: '/images/projects/fechafolha-dashboard.jpg',
    screenshotAlt: 'Interface do FechaFolha com uma loja e funcionários fictícios, indicadores de vendas, salários e comissões.',
    screenshotCaption: 'Fechamento por loja · dados fictícios',
    repository: 'https://github.com/FurtadoRDS/fechafolha-agilizador-de-folha',
    demo: 'https://fechafolha-phi.vercel.app/',
  },
];
