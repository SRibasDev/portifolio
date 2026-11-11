const screen = (file, title, caption, source, mobile = false) => ({
  src: `/screenshots/${file}.webp`,
  title,
  caption,
  source,
  mobile,
});
const pet = "https://sistema-controle-pets.vercel.app";
const tetra = "https://tetradev.com.br";
const mundo = "https://mundoparticaolar.com.br";
const vet = "https://vetmais-site-qa.vercel.app";
const connect = "https://tetradev-sistema-gerenciamento-nfc.vercel.app";
const gestao = "https://gestao-tetra.vercel.app";
const inocents = "https://inocents-puce.vercel.app";

export const projects = [
  {
    id: "pet",
    name: "Tetra Pet",
    category: "SAAS · GESTÃO PET",
    kind: "Sistema",
    theme: "pet",
    featured: true,
    desc: "Da reserva ao check-out. A rotina da creche em um só sistema.",
    tags: ["Next.js", "Fastify", "PostgreSQL"],
    url: pet,
    demo: `${pet}/demo`,
    status: "Demo pública",
    idea: "Reunir a operação de creches, hotéis e banho e tosa em um único lugar. Em vez de procurar reservas, vacinas e pagamentos em planilhas diferentes, a equipe acompanha o cuidado de cada pet e o movimento da empresa no mesmo sistema.",
    audience: "Creches, hotéis e equipes de cuidados para cães.",
    features: [
      [
        "Agenda e presença",
        "Reservas por modalidade, controle de capacidade e conflito de horários, check-in, check-out e operação do dia.",
      ],
      [
        "Histórico de cuidado",
        "Cadastro de pets e tutores, vacinas, exames, antiparasitários e diário interno da equipe.",
      ],
      [
        "Gestão da empresa",
        "Financeiro manual, indicadores, relatórios e perfis de acesso para responsável, equipe e tutor.",
      ],
    ],
    steps: [
      [
        "Prepare a operação",
        "Cadastre tutores e pets e configure os serviços e a capacidade de atendimento.",
      ],
      [
        "Organize o dia",
        "Crie a reserva, confira a disponibilidade e registre a chegada e a saída do pet.",
      ],
      [
        "Acompanhe o cuidado",
        "Atualize saúde e diário; confira os lançamentos financeiros e os indicadores.",
      ],
    ],
    architecture: [
      [
        "Interface",
        "Next.js + React",
        "App Router, componentes reutilizáveis e interface responsiva.",
      ],
      [
        "API",
        "Fastify + Zod",
        "Regras de negócio, validação e autenticação com sessões.",
      ],
      [
        "Dados",
        "PostgreSQL",
        "Consultas parametrizadas, migrações e isolamento entre empresas por RLS.",
      ],
    ],
    technical:
      "Monorepo com apps/web e apps/api. O frontend na Vercel encaminha as chamadas de API pela mesma origem; API e PostgreSQL são configurados separadamente no Render. O código usa Argon2id para senhas e permissões por perfil.",
    note: "Prints capturados na demonstração pública. Os dados são fictícios e as alterações da demo ficam apenas em memória. A plataforma está em pré-lançamento.",
    evidence:
      "Arquitetura conferida no README e no código do projeto. Telas capturadas na versão publicada.",
    screenshots: [
      screen(
        "pet-overview",
        "Visão geral",
        "Indicadores, reservas e atalhos para acompanhar a rotina. A demo usa uma empresa e pets fictícios.",
        `${pet}/demo`,
      ),
      screen(
        "pet-agenda",
        "Agenda e disponibilidade",
        "Calendário de reservas para visualizar a ocupação e organizar chegadas e saídas.",
        `${pet}/demo?secao=agenda`,
      ),
      screen(
        "pet-pets",
        "Cadastro de pets",
        "Os pets ficam ligados aos seus tutores, com os dados necessários para o atendimento.",
        `${pet}/demo?secao=pets`,
      ),
      screen(
        "pet-health",
        "Saúde e cuidados",
        "Acompanhamento de vacinas, exames e cuidados registrados para cada pet.",
        `${pet}/demo?secao=saude`,
      ),
      screen(
        "pet-finance",
        "Financeiro",
        "Receitas e despesas manuais reunidas para acompanhar o movimento da operação.",
        `${pet}/demo?secao=financeiro`,
      ),
      screen(
        "pet-mobile",
        "O sistema no celular",
        "A mesma demonstração pública em uma tela de celular.",
        `${pet}/demo`,
        true,
      ),
    ],
  },
  {
    id: "tetra",
    name: "Tetra",
    category: "WEB · SERVIÇOS DIGITAIS",
    kind: "Website",
    theme: "tetra",
    featured: true,
    desc: "Do primeiro pedido ao projeto no ar. Tecnologia que aproxima negócios.",
    tags: ["Next.js", "React", "Turso"],
    url: tetra,
    status: "No ar",
    idea: "Transformar uma necessidade de negócio em um pedido claro de serviço. O site apresenta os caminhos de desenvolvimento da Tetra, mostra trabalhos publicados e ajuda o visitante a explicar o que precisa construir.",
    audience:
      "Negócios que procuram sites, sistemas, integrações e automações.",
    features: [
      [
        "Catálogo de serviços",
        "Páginas para sites, sistemas, aplicações web, agentes de IA, integrações e consultoria.",
      ],
      [
        "Trabalhos publicados",
        "Projetos e exemplos ajudam a entender o tipo de entrega de cada serviço.",
      ],
      [
        "Entrada de pedidos",
        "Formulário de contato e área de conta, com processamento no servidor.",
      ],
    ],
    steps: [
      [
        "Encontre um serviço",
        "Use a busca ou navegue pelas categorias do catálogo.",
      ],
      [
        "Entenda a entrega",
        "Veja exemplos e o processo de definição do escopo.",
      ],
      [
        "Conte sua necessidade",
        "Preencha o pedido para iniciar a conversa com a equipe.",
      ],
    ],
    architecture: [
      [
        "Interface",
        "Next.js + React",
        "Rotas institucionais e de serviços, componentes e animações.",
      ],
      [
        "Servidor",
        "API do Next.js",
        "Contas, sessões e recebimento de pedidos no servidor.",
      ],
      [
        "Persistência",
        "libSQL / Turso",
        "SQLite local no desenvolvimento e Turso previsto para produção.",
      ],
    ],
    technical:
      "O repositório utiliza Next.js, TypeScript, GSAP e Three.js. O backend do próprio Next.js atende os fluxos atuais. A configuração de produção prevê Turso, envio de e-mail e Cloudflare Turnstile para o formulário.",
    note: "Capturas de páginas públicas. Os serviços de banco, e-mail e proteção do formulário dependem da configuração do ambiente; a arquitetura foi conferida no repositório.",
    evidence:
      "Interface conferida no domínio público e arquitetura no código e README do site Tetra.",
    screenshots: [
      screen(
        "tetra-home",
        "Página inicial",
        "Busca e categorias orientam o visitante até o serviço adequado.",
        tetra,
      ),
      screen(
        "tetra-services",
        "Catálogo de serviços",
        "As categorias ajudam a escolher o tipo de solução para o negócio.",
        `${tetra}/#servicos`,
      ),
      screen(
        "tetra-contact",
        "Novo pedido",
        "O visitante descreve o problema e informa como a equipe pode retornar.",
        `${tetra}/#contato`,
      ),
      screen(
        "tetra-mobile",
        "Navegação no celular",
        "A apresentação e o catálogo também se adaptam à tela de celular.",
        tetra,
        true,
      ),
    ],
  },
  {
    id: "mundo",
    name: "Mundo PartiCãoLar",
    category: "WEB · CRECHE E HOTEL PET",
    kind: "Website",
    theme: "mundo",
    featured: true,
    desc: "A casa, os serviços e o cuidado com os cães apresentados na web.",
    tags: ["React", "Vite", "Tailwind CSS"],
    url: mundo,
    status: "No ar",
    idea: "Dar ao tutor a confiança necessária para conhecer uma creche e hotel para cães. O site apresenta a rotina, a estrutura e os serviços do espaço, com um caminho direto para agendar uma visita pelo WhatsApp.",
    audience: "Tutores de cães na Zona Norte de São Paulo.",
    features: [
      [
        "Serviços bem explicados",
        "Creche, hospedagem e banho e tosa com informações para planejar o atendimento.",
      ],
      [
        "Estrutura e galeria",
        "Fotos do espaço e das atividades aproximam o visitante da experiência presencial.",
      ],
      [
        "Contato direto",
        "Links para WhatsApp e localização facilitam o agendamento de uma visita.",
      ],
    ],
    steps: [
      [
        "Conheça a casa",
        "Explore as fotos, a apresentação e os diferenciais do espaço.",
      ],
      [
        "Escolha o cuidado",
        "Consulte os serviços e veja como funciona o atendimento.",
      ],
      [
        "Agende uma visita",
        "Continue a conversa pelo WhatsApp para combinar a avaliação do pet.",
      ],
    ],
    architecture: [
      [
        "Interface",
        "React + React Router",
        "SPA com páginas de serviços, estrutura, sobre e galeria.",
      ],
      [
        "Construção",
        "Vite + Tailwind CSS",
        "Componentes reutilizáveis, imagens otimizadas e build estático.",
      ],
      [
        "Publicação",
        "Vercel",
        "Arquivos estáticos com links externos para WhatsApp e Maps.",
      ],
    ],
    technical:
      "Organizado em monorepo com o site em apps/web. Utiliza componentes shadcn/ui, carrossel Embla e Framer Motion. O site institucional apresenta e encaminha o atendimento; a gestão da creche é um projeto separado.",
    note: "Prints das páginas públicas no domínio oficial.",
    evidence: "Tecnologias e estrutura conferidas no README e em apps/web.",
    screenshots: [
      screen(
        "mundo-home",
        "Boas-vindas",
        "Apresentação da creche e acesso ao agendamento de visita.",
        mundo,
      ),
      screen(
        "mundo-services",
        "Serviços",
        "Informações para entender as modalidades de cuidado e hospedagem.",
        `${mundo}/servicos`,
      ),
      screen(
        "mundo-space",
        "Estrutura",
        "A casa e os ambientes apresentados aos tutores.",
        `${mundo}/estrutura`,
      ),
      screen(
        "mundo-gallery",
        "Galeria",
        "Fotografias aproximam o visitante da rotina dos cães no espaço.",
        `${mundo}/galeria`,
      ),
    ],
  },
  {
    id: "vet",
    name: "Vet Mais",
    category: "WEB · DIAGNÓSTICO VETERINÁRIO",
    kind: "Website",
    theme: "vet",
    featured: true,
    desc: "Um catálogo de exames que aproxima o laboratório de quem cuida.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: vet,
    status: "Versão publicada",
    idea: "Organizar informações técnicas de um laboratório veterinário em uma navegação simples. Clínicas e profissionais encontram exames, orientações de coleta, estrutura e canais de parceria e contato.",
    audience: "Médicos veterinários, clínicas e parceiros do laboratório.",
    features: [
      [
        "Catálogo de exames",
        "Categorias e páginas dedicadas para localizar informações de diagnóstico.",
      ],
      [
        "Coleta e logística",
        "Orientações sobre o caminho da amostra até o laboratório.",
      ],
      [
        "Serviços e parceria",
        "Banco de sangue felino, apresentação da equipe e contato para clínicas.",
      ],
    ],
    steps: [
      [
        "Encontre o exame",
        "Navegue pelas categorias e consulte a informação necessária.",
      ],
      [
        "Confira as orientações",
        "Veja os detalhes de coleta e os serviços do laboratório.",
      ],
      [
        "Fale com a equipe",
        "Use os canais de contato ou conheça o fluxo de parceria.",
      ],
    ],
    architecture: [
      [
        "Páginas",
        "Next.js App Router",
        "Rotas institucionais e páginas de exames em TypeScript.",
      ],
      [
        "Conteúdo",
        "Dados locais",
        "Catálogo e informações organizados em src/data.",
      ],
      [
        "Entrega",
        "Exportação estática",
        "HTML, CSS e JavaScript distribuídos pela hospedagem.",
      ],
    ],
    technical:
      "O Next.js usa output: export: o resultado é um site estático, sem servidor de aplicação para consultas de dados. Tailwind e variáveis CSS controlam o tema; sitemap, robots e metadados acompanham o build. O formulário de parceiro pode encaminhar para um endpoint externo ou e-mail, conforme a configuração.",
    note: "Capturas da versão pública de QA na Vercel. O endereço apresentado é o ambiente disponível para demonstração.",
    evidence:
      "Arquitetura conferida no README, configuração do Next.js e dados do site.",
    screenshots: [
      screen(
        "vet-home",
        "Página inicial",
        "Apresentação do laboratório e caminhos para os serviços de diagnóstico.",
        vet,
      ),
      screen(
        "vet-exams",
        "Catálogo de exames",
        "Navegação pelas categorias de diagnóstico veterinário.",
        `${vet}/exames/`,
      ),
      screen(
        "vet-logistics",
        "Coleta e logística",
        "Explicação das etapas e orientações de atendimento.",
        `${vet}/coleta-logistica/`,
      ),
      screen(
        "vet-blood",
        "Banco de sangue felino",
        "Página dedicada a um serviço específico do laboratório.",
        `${vet}/banco-sangue-felino/`,
      ),
    ],
  },
  {
    id: "nfc",
    name: "Tetra Connect",
    category: "SISTEMA · NFC E QR CODE",
    kind: "Sistema",
    theme: "nfc",
    desc: "Troque o destino de uma plaquinha sem regravar o NFC ou imprimir outro QR code.",
    tags: ["React", "Express", "PostgreSQL"],
    url: connect,
    status: "Acesso administrativo",
    idea: "Separar o endereço gravado em uma plaquinha do seu destino final. A placa recebe um link permanente; o painel permite trocar o destino, ativar ou pausar a conexão sem substituir o objeto físico.",
    audience:
      "Agências e estabelecimentos que utilizam plaquinhas NFC ou QR codes.",
    features: [
      [
        "Plaquinhas e lotes",
        "Criação de códigos, cadastro do cliente e geração de QR codes.",
      ],
      [
        "Destino editável",
        "Uma URL permanente resolve o destino configurado no painel.",
      ],
      [
        "Controle de acesso",
        "Administração autenticada, estados de ativação e histórico de acessos à placa.",
      ],
    ],
    steps: [
      [
        "Prepare a placa",
        "Cadastre a plaquinha e configure o endereço de destino.",
      ],
      [
        "Grave uma única vez",
        "Use a URL permanente no NFC, com um app compatível, ou no QR code.",
      ],
      [
        "Atualize pelo painel",
        "Edite o destino ou pause a conexão; o endereço da placa continua o mesmo.",
      ],
    ],
    architecture: [
      [
        "Painel",
        "React + Vite",
        "Interface de gerenciamento e páginas públicas de ativação.",
      ],
      [
        "API e resolução",
        "Node.js + Express",
        "Sessões, cadastro de placas e redirecionamento por código.",
      ],
      [
        "Dados",
        "PostgreSQL / Neon",
        "Banco de produção; SQLite no desenvolvimento local.",
      ],
    ],
    technical:
      "A rota /p/CÓDIGO consulta o estado da placa e encaminha o visitante ao destino. Placas pendentes abrem a ativação; placas inativas exibem indisponibilidade. O painel não grava tags pelo navegador: a gravação inicial utiliza um aplicativo compatível com NFC.",
    note: "A versão publicada solicita a configuração inicial do administrador. Foram capturadas somente as telas públicas de acesso e ativação. O painel interno requer acesso autorizado. Gerenciamento NFC e Tetra Connect são o mesmo projeto.",
    evidence:
      "Fluxo, tecnologias e arquitetura conferidos no README e no código-fonte.",
    screenshots: [
      screen(
        "connect-home",
        "Acesso administrativo",
        "Tela real de configuração inicial. A criação do administrador exige um token de instalação.",
        connect,
      ),
      screen(
        "connect-activate",
        "Ativação da plaquinha",
        "O cliente informa o código da placa antes de configurar seu destino no painel.",
        `${connect}/ativar`,
      ),
      screen(
        "connect-mobile",
        "Ativação pelo celular",
        "Fluxo público na tela do dispositivo usado para aproximar ou escanear a placa.",
        `${connect}/ativar`,
        true,
      ),
    ],
  },
  {
    id: "gestao",
    name: "Gestão Tetra",
    category: "SISTEMA · CRM DA AGÊNCIA",
    kind: "Sistema",
    theme: "gestao",
    desc: "Leads, tarefas e metas para acompanhar o próximo passo da agência.",
    tags: ["Next.js", "Supabase", "Zod"],
    url: gestao,
    status: "Workspace privado",
    idea: "Centralizar o acompanhamento comercial da agência: quem está em negociação, qual é a próxima ação, quem é responsável e como os resultados se aproximam das metas do mês.",
    audience: "O responsável autorizado pela gestão da Tetra.",
    features: [
      [
        "Pipeline comercial",
        "Leads por serviço e etapa, do primeiro contato ao ganho ou perda.",
      ],
      [
        "Tarefas e responsáveis",
        "Próxima ação, prazo e vínculo entre trabalho e oportunidade comercial.",
      ],
      [
        "Metas e indicadores",
        "Acompanhamento mensal de fechamentos, valores e oportunidades ativas.",
      ],
    ],
    steps: [
      [
        "Entre no workspace",
        "O responsável autorizado acessa sua conta pessoal.",
      ],
      [
        "Organize as oportunidades",
        "Cadastre o lead, defina etapa, valor, responsável e próximo contato.",
      ],
      [
        "Acompanhe as entregas",
        "Atualize as tarefas e confira os indicadores do mês.",
      ],
    ],
    architecture: [
      [
        "Interface",
        "Next.js + React",
        "Dashboard responsivo com regras comerciais compartilhadas.",
      ],
      [
        "Servidor",
        "Route Handlers + Zod",
        "Autenticação e validação das leituras e gravações.",
      ],
      [
        "Dados e identidade",
        "Supabase",
        "PostgreSQL e Auth acessados pelo servidor.",
      ],
    ],
    technical:
      "Frontend e API são publicados juntos na Vercel. O servidor valida a conta autorizada antes de acessar os dados, usa cookies HttpOnly para a sessão e controle de versão nas gravações. Não há cadastro público de equipe.",
    note: "Workspace privado. As duas capturas mostram a tela pública de login em desktop e celular. Os módulos internos foram descritos com base no código; dados comerciais reais não aparecem no portfólio.",
    evidence:
      "Módulos conferidos em app/dashboard.tsx e lib/agency.ts; arquitetura no README e lib/server.ts.",
    screenshots: [
      screen(
        "gestao-login",
        "Entrada do workspace",
        "Login exclusivo do responsável autorizado pela agência.",
        `${gestao}/login`,
      ),
      screen(
        "gestao-mobile",
        "Acesso pelo celular",
        "A mesma tela de acesso adaptada a uma tela menor.",
        `${gestao}/login`,
        true,
      ),
    ],
  },
  {
    id: "inocents",
    name: "Inocents",
    category: "WEB · MODA E CATÁLOGO",
    kind: "Website",
    theme: "inocents",
    desc: "Uma vitrine digital para explorar a coleção e conversar com a loja.",
    tags: ["React", "TypeScript", "Vite"],
    url: inocents,
    status: "No ar",
    idea: "Traduzir a identidade de uma marca de moda em uma experiência de descoberta. A coleção é o centro da navegação e o atendimento continua no WhatsApp, onde a cliente consulta disponibilidade, tamanho e entrega.",
    audience: "Clientes que querem conhecer os looks e a proposta da marca.",
    features: [
      [
        "Coleção com filtros",
        "Looks organizados por categorias como lisos, florais e ocasiões especiais.",
      ],
      [
        "Identidade da marca",
        "Fotografia, tipografia e animações constroem o universo visual da Inocents.",
      ],
      [
        "Atendimento direto",
        "Os produtos conduzem à consulta de disponibilidade pelo WhatsApp.",
      ],
    ],
    steps: [
      [
        "Explore a coleção",
        "Navegue pelos looks e filtre pela categoria desejada.",
      ],
      [
        "Conheça uma peça",
        "Abra os detalhes e observe a apresentação do produto.",
      ],
      [
        "Converse com a loja",
        "Consulte disponibilidade, tamanho, frete e prazo pelo WhatsApp.",
      ],
    ],
    architecture: [
      [
        "Interface",
        "React + TypeScript",
        "SPA com componentes de catálogo e navegação por seções.",
      ],
      [
        "Construção visual",
        "Vite + Tailwind CSS",
        "shadcn/ui, Motion e GSAP na experiência de navegação.",
      ],
      [
        "Catálogo",
        "Integração Supabase",
        "Código preparado para catálogo e área administrativa, conforme configuração.",
      ],
    ],
    technical:
      "A vitrine utiliza React Router e componentes reutilizáveis. O repositório inclui integração com Supabase e área administrativa para os produtos. O fluxo público observado encaminha o atendimento ao WhatsApp; não apresenta um checkout de pagamento no site.",
    note: "Prints da vitrine pública publicada na Vercel. A administração do catálogo não foi acessada.",
    evidence:
      "Interface conferida na versão publicada; tecnologias e integração conferidas no código-fonte.",
    screenshots: [
      screen(
        "inocents-home",
        "A identidade da marca",
        "Abertura da vitrine com acesso direto à coleção.",
        inocents,
      ),
      screen(
        "inocents-collection",
        "Explore os looks",
        "Produtos e filtros ajudam a encontrar a peça desejada.",
        `${inocents}/#colecao`,
      ),
      screen(
        "inocents-about",
        "O universo Inocents",
        "Conteúdo institucional conecta a coleção à proposta da marca.",
        `${inocents}/#sobre`,
      ),
    ],
  },
  {
    id: "creche",
    name: "Sistema de Cadastro para Creche",
    category: "BACKEND · JAVA E SPRING",
    kind: "Sistema",
    theme: "creche",
    desc: "API para reservas, presença e cadastros com regras de negócio de uma creche pet.",
    tags: ["Java 21", "Spring Boot", "JWT", "JPA"],
    repo: "https://github.com/SRibasDev/sistema-cadastro-creche",
    status: "Código disponível",
    idea: "Modelar a operação de uma creche e hotel pet no backend: cadastro de tutores e pets, disponibilidade de reservas, presença e permissões de usuários. É um projeto independente do Tetra Pet.",
    audience: "Dono e funcionários autorizados de uma creche para cães.",
    features: [
      [
        "Reservas consistentes",
        "Controle de capacidade e prevenção de reservas sobrepostas para o mesmo pet.",
      ],
      [
        "Operação e presença",
        "Check-in, check-out, falta com motivo e cancelamento com validação.",
      ],
      [
        "Acesso por perfil",
        "API protegida por JWT, com permissões para administrador e funcionário.",
      ],
    ],
    steps: [
      [
        "Autentique o usuário",
        "O login emite um token JWT para as chamadas autorizadas à API.",
      ],
      [
        "Cadastre e reserve",
        "Vincule pets aos tutores e crie reservas respeitando capacidade e horários.",
      ],
      [
        "Registre o atendimento",
        "Atualize presença e consulte os dados da operação pela interface ou API.",
      ],
    ],
    architecture: [
      [
        "Entrada",
        "Controllers REST + DTOs",
        "Endpoints e validação dos dados recebidos.",
      ],
      [
        "Negócio",
        "Services + Spring Security",
        "Regras operacionais, autenticação e autorização.",
      ],
      [
        "Persistência",
        "JPA + Hibernate",
        "Repositories e banco H2 local; configuração alternativa para MySQL.",
      ],
    ],
    technical:
      "Java 21 com Spring Boot 3.4.1. O projeto inclui Springdoc/OpenAPI, Actuator, testes com JUnit e Mockito e uma interface HTML/CSS/JavaScript servida pelo backend. O banco padrão documentado é H2 em arquivo; Flyway é opcional e desativado no H2.",
    note: "Não foi identificado um endereço público desta API. As capturas mostram a interface real do repositório executada localmente, sem sessão autenticada. As telas internas dependem do backend e de uma conta autorizada.",
    evidence:
      "Interface do código-fonte executada localmente; funcionalidades e arquitetura conferidas no README e no projeto Java.",
    screenshots: [
      screen(
        "creche-login",
        "Acesso à interface da API",
        "Tela real do projeto, executada localmente. Acesso restrito ao dono e funcionários autorizados.",
        null,
      ),
      screen(
        "creche-mobile",
        "Interface no celular",
        "A mesma tela de login da implementação, em viewport de celular.",
        null,
        true,
      ),
    ],
  },
];
