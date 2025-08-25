# UNISC TCC System

Sistema React + TypeScript + Vite para gerenciamento de TCC, organizado por features e com arquitetura escalável.

---

## 📦 Estrutura do Projeto

A estrutura principal do projeto está na pasta `src/`:

```
src/
  components/        # Componentes globais e de UI reutilizáveis
  config/            # Configurações globais (tema, query-client, etc)
  context/           # Contextos globais (ex: Auth)
  hooks/             # Hooks globais reutilizáveis
  pages/             # Cada página/feature tem sua própria pasta
    <feature>/
      components/    # Componentes específicos da página
      controller/    # Controller (lógica e integração)
      hooks/         # Hooks específicos da página (opcional)
      view/          # View (JSX principal da página)
      types.ts       # Tipos TypeScript da página
  types/             # Tipos globais do sistema
  main.tsx           # Entry point da aplicação
  routes.tsx         # Definição das rotas
```

---

## 🚀 Como rodar o projeto

1. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

2. **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   # ou
   yarn build
   ```

4. **Preview do build:**
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

---

## 🧩 Como criar uma nova página (feature) em `src/pages`

Siga o padrão de organização para facilitar manutenção e escalabilidade.

### 1. Crie a pasta da página

Exemplo para uma página chamada `example`:

```
src/pages/example/
  components/
  controller/
  hooks/
  view/
  types.ts
```

### 2. Crie os arquivos base

- **types.ts**  
  Defina os tipos e interfaces da página.

- **components/**  
  Componentes específicos da página (ex: `example-card.component.tsx`).

- **hooks/** (opcional)  
  Hooks customizados para lógica de formulário, fetch, etc.

- **controller/**  
  Arquivo principal que faz a ponte entre hooks, lógica e a view.  
  Exemplo: `example.controller.tsx`

- **view/**  
  Componente visual principal da página.  
  Exemplo: `example.view.tsx`

### 3. Exemplo de implementação

#### types.ts

```typescript
export interface ExampleProps {
  // Defina as props necessárias para a view/controller
}
```

#### components/example-card.component.tsx

```tsx
export const ExampleCard = ({ title }: { title: string }) => (
  <div>{title}</div>
);
```

#### hooks/use-example-form/index.ts

```typescript
import { useForm } from "react-hook-form";
export const useExampleForm = () => useForm();
```

#### controller/example.controller.tsx

```tsx
import { useExampleForm } from "../hooks/use-example-form";
import ExampleView from "../view/example.view";

export default function ExampleController() {
  const form = useExampleForm();
  // lógica adicional...

  return <ExampleView form={form} />;
}
```

#### view/example.view.tsx

```tsx
import type { ExampleProps } from "../types";
import { ExampleCard } from "../components/example-card.component";

export default function ExampleView({ form }: ExampleProps) {
  return (
    <div>
      <h1>Exemplo</h1>
      <ExampleCard title="Meu Card" />
      {/* outros componentes */}
    </div>
  );
}
```

### 4. Adicione a rota

No arquivo `src/routes.tsx`, adicione sua página:

```tsx
import ExampleController from "./pages/example/controller/example.controller";
// ...
{
  path: "/example",
  element: <ExampleController />
}
```

---

## 📝 Dicas e Convenções

- **Sempre separe lógica (controller) da view (apresentação).**
- **Coloque hooks específicos da página em `hooks/` dentro da feature.**
- **Componentes globais ficam em `src/components/`.**
- **Use `types.ts` para centralizar os tipos de cada página.**
- **Para formulários, use `react-hook-form` + `zod` para validação.**
- **Para navegação, use o hook `useAppNavigation` disponível em `src/hooks/use-app-navigation`.**
- **Para temas, use o Chakra UI v3 (configurado em `src/config/theme.ts`).**

---

## 📚 Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Chakra UI v3](https://chakra-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Router v7](https://reactrouter.com/)
- [TanStack React Query](https://tanstack.com/query/latest)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🛠️ Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run preview` — preview do build
- `npm run lint` — checa lint do projeto

---

## 💡 Exemplos de páginas já implementadas

- **Login:** `src/pages/login/`
- **Register:** `src/pages/register/`
- **Profile:** `src/pages/profile/`
- **Home:** `src/pages/home/`

Cada uma segue o padrão:  
`components/`, `controller/`, `hooks/`, `view/`, `types.ts`

---

## 👨‍💻 Contribua!

Siga o padrão de organização para novas features.  
Dúvidas? Veja exemplos nas páginas existentes ou abra uma issue!