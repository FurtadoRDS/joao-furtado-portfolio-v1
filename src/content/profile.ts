export interface Education {
  course: string;
  institution: string;
  period: string;
}

export interface ExperienceArea {
  title: string;
  description: string;
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
  };
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
  repository?: string;
  demo?: string;
  demoHint?: string;
}

export const profile: Profile = {
  name: 'João Furtado',
  fullName: 'João Guilherme Pereira Furtado',
  headline: 'Meu foco é desenvolver.',
  summary:
    'Sou estudante de Sistemas de Informação e atuo com suporte de TI. Busco uma oportunidade para desenvolver software, com web como meu ponto forte e vontade de aprender em outras áreas.',
  location: 'Cabo Frio',
  education: {
    course: 'Sistemas de Informação',
    institution: 'Estácio',
    period: '3º período',
  },
  experience: {
    role: 'Suporte de TI',
    company: 'Grupo Rio Mais',
    period: 'Junho de 2026 — atual',
    summary:
      'Atuo no atendimento a usuários e na infraestrutura de TI da empresa, com suporte presencial e remoto, manutenção de rede, organização de racks e instalação de CFTV.',
    areas: [
      {
        title: 'Atendimento e diagnóstico',
        description:
          'Resolvo problemas de computadores, impressoras, rede, e-mail e acessos. Diagnostico a causa e explico a solução em linguagem simples, com registro e acompanhamento de chamados no Auvo.',
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
    status: 'Front-end concluído',
  },
  contact: {
    email: 'joaogpfurtado@gmail.com',
    phone: '+5522974024337',
    phoneDisplay: '+55 (22) 97402-4337',
  },
  links: {
    github: 'https://github.com/FurtadoRDS',
  },
};

export const projects: Project[] = [
  {
    title: 'Contract Guardian',
    status: 'Front-end concluído',
    summary:
      'Interface para organizar e acompanhar contratos corporativos. Reúne uma dashboard com indicadores da carteira, cadastro e edição de contratos, busca e filtros, calendário de vencimentos, relatórios e exportação em CSV.',
    role: 'Desenvolvimento do front-end.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    note:
      'Esta entrega contempla somente o front-end. A demonstração usa dados locais no navegador; backend, autenticação real e análise automática de documentos ainda não estão integrados.',
    screenshot: '/images/projects/contract-guardian-dashboard.jpg',
    screenshotAlt: 'Dashboard do Contract Guardian com indicadores, custos e saúde dos contratos, na prévia sem contratos cadastrados.',
    repository: 'https://github.com/FurtadoRDS/contract-guardian',
    demo: 'https://contract-guardian-frontend.vercel.app/',
    demoHint: 'Na tela inicial da demonstração, escolha “Visualizar como master” ou “Visualizar como reader”.',
  },
];
