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
  links: {
    github: string;
  };
}

export interface Project {
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  screenshot?: string;
  repository?: string;
  demo?: string;
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
    status: 'Em desenvolvimento',
  },
  links: {
    github: 'https://github.com/FurtadoRDS',
  },
};

export const projects: Project[] = [];
