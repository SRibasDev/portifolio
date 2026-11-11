# Portfólio · Samuel Ribas

Portfólio Vite com projetos publicados, capturas reais e estudos de caso em português.

```sh
npm ci
npm run dev
npm run build
```

## Conteúdo e interface

- `src/projects.js`: os oito projetos, tecnologias, fluxo de uso, arquitetura e legendas.
- `src/project-details.jsx`: cards, galeria, ampliação e apresentação de cada projeto.
- `src/project-details.css`: layout responsivo, navegação e estados de foco.
- `public/screenshots/`: 28 capturas em WebP, obtidas em 11/11/2026.
- `src/main.jsx` e `src/style.css`: apresentação original do portfólio, recuperada e adaptada.

Os prints de Tetra Pet vêm da demo pública e contêm dados fictícios. Tetra Connect e Gestão Tetra mostram somente telas públicas de acesso/ativação. As duas capturas do projeto Java vêm da interface do repositório executada localmente; não foi identificado um deploy público da API. Essas diferenças estão explicadas nos respectivos estudos de caso.

Gerenciamento NFC e Tetra Connect foram consolidados em um projeto. Inocents passa a ocupar a entrada duplicada. Os filtros usam o tipo de cada projeto e preservam quatro destaques, quatro sistemas e quatro websites.

## Recuperação do código existente

O repositório conectado estava sem commits. A versão anterior foi recuperada do build publicado na Vercel (`dpl_6RgA5Jhtg2KaFLnzAPVP42ZbqyPj`, commit informado pelo deploy `676510321fb6fa5607d6a2f30a7fc4b2c2e57ee5`).

`src/preserved-runtime.js` mantém o runtime publicado de React, Motion, Lucide e os efeitos React Bits existentes, com os comentários de licença do build. O código da aplicação foi extraído e convertido em JSX legível. `src/jsx-runtime.js` compartilha a mesma instância de React entre os componentes recuperados e novos. Não misture uma segunda instalação de React nesse runtime; para modernizar as dependências, primeiro recupere os fontes originais dos efeitos e faça a migração completa.

As telas usam imagens locais, sem iframes ou dependência de captura externa no navegador do visitante. Não há backend, banco ou credenciais neste portfólio.

## Verificação

Build de produção e testes de navegador cobrem os oito estudos de caso, todas as imagens, filtros, galeria, ampliação, setas, Escape e devolução do foco. A apresentação foi verificada em 375, 768, 1024 e 1440 px.
