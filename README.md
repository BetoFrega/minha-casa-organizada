# Minha Casa Organizada

Um projeto fullstack usando npm workspaces com:

- **Backend**: Nest.js API
- **Frontend**: React Router (sucessor do Remix)

## Estrutura do Projeto

```
├── backend/          # API Nest.js
├── frontend/         # Frontend React Router
├── package.json      # Configuração do workspace raiz
└── README.md
```

## Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev:backend   # Inicia o backend em modo desenvolvimento
npm run dev:frontend  # Inicia o frontend em modo desenvolvimento
```

### Build
```bash
npm run build         # Builda backend e frontend
npm run build:backend # Builda apenas o backend
npm run build:frontend # Builda apenas o frontend
```

### Produção
```bash
npm run start:backend  # Inicia o backend em produção
npm run start:frontend # Inicia o frontend em produção
```

## Como executar

1. Instale as dependências:
```bash
npm install
```

2. Para desenvolvimento, execute em terminais separados:
```bash
# Terminal 1 - Backend (porta 3000)
npm run dev:backend

# Terminal 2 - Frontend (porta 5173)
npm run dev:frontend
```

## Tecnologias Utilizadas

- **Backend**: Nest.js, TypeScript, Express
- **Frontend**: React Router v7, React 19, TypeScript, Tailwind CSS, Vite
- **Workspace**: npm workspaces para gerenciar o monorepo