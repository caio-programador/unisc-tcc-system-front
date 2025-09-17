# 📋 Cenários de Teste - Sistema de Gestão de TCC

## 🎯 Objetivo
Este documento apresenta cenários de teste abrangentes para o Sistema de Gestão de TCC da UNISC, cobrindo todas as funcionalidades principais do sistema para diferentes tipos de usuários.

---

## 👥 Personas de Teste

### 🎓 **Aluno**
- **Nome:** João Silva
- **Email:** joao.silva@unisc.br
- **Senha:** aluno123

### 👨‍🏫 **Professor**
- **Nome:** Dr. Maria Santos
- **Email:** maria.santos@unisc.br
- **Senha:** professor123

### 👨‍💼 **Coordenador**
- **Nome:** Dr. Carlos Oliveira
- **Email:** carlos.oliveira@unisc.br
- **Senha:** coordenador123

---

## 🔐 Módulo de Autenticação

### CT001 - Login com Credenciais Válidas
**Objetivo:** Verificar se o usuário consegue fazer login com credenciais corretas.

**Pré-condições:**
- Sistema acessível
- Usuário cadastrado no sistema

**Passos:**
1. Acessar a página de login (`/login`)
2. Inserir email válido
3. Inserir senha válida
4. Clicar em "Entrar"

**Resultado Esperado:**
- Redirecionamento para a página inicial (`/`)
- Token JWT armazenado
- Menu de navegação exibindo opções conforme o papel do usuário

**Critérios de Aceite:**
- [ ] Login realizado com sucesso
- [ ] Token JWT válido gerado
- [ ] Redirecionamento correto baseado no role

---

### CT002 - Login com Credenciais Inválidas
**Objetivo:** Verificar comportamento do sistema com credenciais incorretas.

**Passos:**
1. Acessar `/login`
2. Inserir email inválido ou senha incorreta
3. Clicar em "Entrar"

**Resultado Esperado:**
- Mensagem de erro exibida
- Usuário permanece na tela de login
- Campos podem ser editados novamente

---

### CT003 - Cadastro de Novo Usuário
**Objetivo:** Verificar o processo de registro de usuários.

**Passos:**
1. Acessar `/register`
2. Preencher nome completo
3. Inserir email institucional válido
4. Definir senha segura
5. Selecionar papel (ALUNO/PROFESSOR/COORDENADOR)
6. Clicar em "Cadastrar"

**Resultado Esperado:**
- Usuário criado com sucesso
- Mensagem de confirmação
- Redirecionamento para login

---

## 🏠 Módulo Home/Dashboard

### CT004 - Visualização do Dashboard por Papel
**Objetivo:** Verificar se o dashboard exibe informações específicas para cada tipo de usuário.

**Cenários por Papel:**

#### 🎓 Aluno
**Passos:**
1. Login como aluno
2. Acessar página inicial

**Resultado Esperado:**
- Cards com ações disponíveis para alunos
- Alertas de prazos próximos
- Status do TCC atual
- Próximas reuniões agendadas

#### 👨‍🏫 Professor
**Resultado Esperado:**
- Lista de orientandos
- TCCs para avaliar
- Reuniões agendadas
- Estatísticas de orientações

#### 👨‍💼 Coordenador
**Resultado Esperado:**
- Visão geral de todos os TCCs
- Relatórios gerenciais
- Usuários pendentes de aprovação
- Estatísticas do programa

---

## 📝 Módulo de Gestão de TCC

### CT005 - Criação de Relação Aluno-Orientador (Coordenador)
**Objetivo:** Verificar criação de vínculo entre aluno e orientador.

**Pré-condições:**
- Login como coordenador
- Aluno sem orientador cadastrado
- Professores disponíveis no sistema

**Passos:**
1. Acessar `/user-details` de um aluno
2. Preencher formulário de relação:
   - Selecionar orientador
   - Definir data final da proposta
   - Definir data final do TCC
   - Selecionar Professor 2 da banca
   - Selecionar Professor 3 da banca
3. Clicar em "Criar TCC"

**Resultado Esperado:**
- Relação criada com sucesso
- Validações de unicidade dos professores funcionando
- Datas futuras aceitas
- Notificação de sucesso

**Critérios de Aceite:**
- [ ] Orientador ≠ Professor 2 ≠ Professor 3
- [ ] Data da proposta < Data do TCC
- [ ] Datas ≥ data atual
- [ ] Todos os campos obrigatórios preenchidos

---

### CT006 - Envio de Proposta/TCC (Aluno)
**Objetivo:** Verificar upload de documentos pelo aluno.

**Pré-condições:**
- Login como aluno
- TCC com orientador definido
- Arquivo PDF preparado

**Passos:**
1. Acessar `/tcc-details`
2. Navegar até o step correspondente
3. Preencher título do TCC
4. Fazer upload do arquivo PDF
5. Clicar em "Enviar Proposta/TCC"

**Resultado Esperado:**
- Upload realizado com sucesso
- Arquivo armazenado no sistema
- Status alterado para "AGUARDANDO_AVALIACAO"
- Notificação enviada para orientadores

---

### CT007 - Avaliação de Proposta/TCC (Professor)
**Objetivo:** Verificar processo de avaliação pelos professores.

**Pré-condições:**
- Login como professor da banca
- TCC enviado pelo aluno
- Acesso ao documento

**Passos:**
1. Acessar `/tcc-details` do TCC a ser avaliado
2. Baixar e revisar documento
3. Preencher formulário de avaliação:
   - Introdução (0-2)
   - Objetivos (0-1)
   - Revisão Bibliográfica (0-3)
   - Metodologia (0-4)
   - Comentários (opcional)
4. Clicar em "Enviar Avaliação"

**Resultado Esperado:**
- Avaliação salva com notas válidas
- Campos com vírgula aceitos (ex: "1,5")
- Comentários opcionais salvos
- Contador de avaliações atualizado

**Critérios de Aceite:**
- [ ] Notas dentro dos ranges corretos
- [ ] Aceita números com vírgula
- [ ] Validação de campos obrigatórios
- [ ] Cálculo automático da média

---

### CT008 - Visualização de Resumo de Avaliações
**Objetivo:** Verificar exibição do componente de resumo de avaliações.

**Cenários:**

#### Sem Avaliações
**Resultado Esperado:**
- Status: "Aguardando"
- Contador: "0/3"
- Mensagem: "Nenhuma avaliação recebida ainda"

#### Avaliações Parciais (1-2)
**Resultado Esperado:**
- Status: "Em andamento"
- Contador: "X/3"
- Média parcial exibida
- Progress bar amarela

#### Avaliações Completas (3)
**Resultado Esperado:**
- Status: "Concluído"
- Contador: "3/3"
- Média final calculada
- Progress bar verde

---

## 👥 Módulo de Gestão de Usuários

### CT009 - Listagem de Usuários (Coordenador)
**Objetivo:** Verificar funcionalidade de busca e listagem.

**Passos:**
1. Login como coordenador
2. Acessar `/user-list`
3. Testar filtros:
   - Por nome
   - Por papel (ALUNO/PROFESSOR/COORDENADOR)
   - Paginação

**Resultado Esperado:**
- Lista paginada funcionando
- Filtros aplicados corretamente
- Informações básicas dos usuários visíveis
- Links para detalhes funcionando

---

### CT010 - Visualização de Detalhes do Usuário
**Objetivo:** Verificar página de perfil e informações detalhadas.

**Passos:**
1. Acessar `/user-details/:id`
2. Verificar informações exibidas
3. Testar ações disponíveis conforme papel

**Resultado Esperado:**
- Informações pessoais corretas
- Skeleton de carregamento funcionando
- Ações contextuais baseadas no papel
- Breadcrumbs funcionando

---

### CT011 - Edição de Perfil Próprio
**Objetivo:** Verificar se usuário pode editar seu próprio perfil.

**Passos:**
1. Acessar `/profile`
2. Editar informações permitidas
3. Salvar alterações

**Resultado Esperado:**
- Campos editáveis apropriados
- Validações de formato funcionando
- Dados salvos corretamente

---

## 📋 Módulo de Listagem de TCCs

### CT012 - Visualização da Lista de TCCs
**Objetivo:** Verificar listagem e filtros de TCCs.

**Passos:**
1. Acessar `/tcc-list`
2. Testar filtros disponíveis:
   - Por aluno
   - Por orientador
   - Por status
   - Por data
3. Testar paginação

**Resultado Esperado:**
- Lista paginada corretamente
- Filtros funcionando
- Informações essenciais visíveis
- Links para detalhes funcionando

---

## 🤝 Módulo de Reuniões

### CT013 - Agendamento de Reunião
**Objetivo:** Verificar processo de agendamento entre orientador e orientando.

**Passos:**
1. Login como professor ou aluno
2. Acessar `/meetings`
3. Criar nova reunião:
   - Definir data/hora
   - Adicionar tópicos a discutir
   - Anexar arquivos (opcional)
4. Enviar convite

**Resultado Esperado:**
- Reunião agendada com sucesso
- Notificação enviada para participantes
- Evento visível no calendário

---

### CT014 - Participação em Reunião
**Objetivo:** Verificar funcionalidades durante reunião.

**Passos:**
1. Acessar reunião agendada
2. Registrar ata da reunião
3. Anexar documentos discutidos
4. Finalizar reunião

**Resultado Esperado:**
- Ata salva corretamente
- Arquivos anexados
- Histórico de reuniões atualizado

---

## 🔍 Cenários de Teste de Sistema

### CT015 - Navegação e Breadcrumbs
**Objetivo:** Verificar sistema de navegação.

**Passos:**
1. Navegar entre diferentes páginas
2. Verificar breadcrumbs em cada página
3. Testar botões de voltar

**Resultado Esperado:**
- Breadcrumbs corretos em todas as páginas
- Links funcionando
- Contexto mantido durante navegação

---

### CT016 - Responsividade
**Objetivo:** Verificar comportamento em diferentes dispositivos.

**Cenários:**
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

**Resultado Esperado:**
- Layout adaptativo
- Elementos acessíveis em todos os tamanhos
- Funcionalidades mantidas

---

### CT017 - Estados de Loading
**Objetivo:** Verificar skeletons e indicadores de carregamento.

**Páginas a testar:**
- `/` (Home skeleton)
- `/user-details` (User details skeleton)
- `/tcc-details` (TCC details skeleton)
- `/user-list` (Lista com paginação)

**Resultado Esperado:**
- Skeletons exibidos durante carregamento
- Transição suave para conteúdo real
- Loading states consistentes

---

### CT018 - Tratamento de Erros
**Objetivo:** Verificar comportamento em cenários de erro.

**Cenários:**
- Erro de rede (API indisponível)
- Erro 404 (página não encontrada)
- Erro 401 (não autorizado)
- Erro 500 (erro interno)

**Resultado Esperado:**
- Páginas de erro apropriadas
- Mensagens de erro claras
- Opções de recuperação oferecidas

---

## 🔒 Cenários de Segurança

### CT019 - Controle de Acesso por Papel
**Objetivo:** Verificar restrições baseadas em papéis.

**Cenários:**

#### Aluno tentando acessar funções de Coordenador
**Passos:**
1. Login como aluno
2. Tentar acessar URLs restritas
3. Verificar comportamento

**Resultado Esperado:**
- Acesso negado
- Redirecionamento apropriado
- Mensagem de erro clara

#### Professor tentando acessar dados de outro professor
**Resultado Esperado:**
- Acesso apenas aos próprios dados
- Dados de outros professores protegidos

---

### CT020 - Sessão e Logout
**Objetivo:** Verificar gerenciamento de sessão.

**Passos:**
1. Fazer login
2. Aguardar expiração da sessão (se aplicável)
3. Tentar acessar páginas protegidas
4. Fazer logout manual

**Resultado Esperado:**
- Redirecionamento para login após expiração
- Logout limpa dados de sessão
- Páginas protegidas inacessíveis após logout

---

## 📊 Cenários de Performance

### CT021 - Carregamento de Listas Grandes
**Objetivo:** Verificar performance com muitos dados.

**Cenários:**
- Lista de usuários com 100+ registros
- Lista de TCCs com 50+ registros
- Múltiplas avaliações por TCC

**Resultado Esperado:**
- Paginação eficiente
- Tempos de resposta aceitáveis (<3s)
- Interface responsiva

---

## 🧪 Cenários de Integração

### CT022 - Fluxo Completo de TCC
**Objetivo:** Verificar integração entre todos os módulos.

**Passos:**
1. Coordenador cria relação aluno-orientador
2. Aluno envia proposta
3. 3 professores da banca avaliam
4. Sistema calcula média
5. Aluno visualiza resultado
6. Se aprovado, aluno envia TCC final
7. Processo de avaliação final

**Resultado Esperado:**
- Fluxo completo funcional
- Dados consistentes entre módulos
- Notificações corretas em cada etapa

---

### CT023 - Sincronização de Dados
**Objetivo:** Verificar consistência de dados entre sessões.

**Passos:**
1. Usuário A faz alteração
2. Usuário B acessa mesma informação
3. Verificar dados atualizados

**Resultado Esperado:**
- Dados sincronizados entre usuários
- Cache invalidado apropriadamente
- Informações sempre atuais

---

## 📱 Cenários de Usabilidade

### CT024 - Acessibilidade
**Objetivo:** Verificar recursos de acessibilidade.

**Testes:**
- Navegação por teclado
- Contraste de cores
- Leitores de tela
- Labels apropriados

**Resultado Esperado:**
- Todos os elementos acessíveis por teclado
- Contraste adequado (WCAG)
- Textos alternativos presentes

---

### CT025 - Experiência do Usuário
**Objetivo:** Verificar fluidez da experiência.

**Aspectos:**
- Formulários intuitivos
- Mensagens de feedback claras
- Confirmações para ações críticas
- Atalhos e conveniências

**Resultado Esperado:**
- Interface intuitiva
- Feedback adequado para todas as ações
- Processo otimizado para tarefas frequentes

---

## 📋 Checklist de Execução

### Preparação do Ambiente
- [ ] Base de dados limpa
- [ ] Usuários de teste criados
- [ ] Arquivos de teste preparados
- [ ] Ambiente configurado

### Execução dos Testes
- [ ] Todos os cenários de autenticação
- [ ] Funcionalidades por papel de usuário
- [ ] Integrações entre módulos
- [ ] Estados de erro e edge cases
- [ ] Performance e responsividade

### Critérios de Aceite Geral
- [ ] Zero erros críticos
- [ ] Funcionalidades principais operacionais
- [ ] Performance aceitável
- [ ] Segurança validada
- [ ] Usabilidade aprovada

---

## 🎯 Métricas de Sucesso

- **Funcionalidade:** 100% dos cenários principais passando
- **Performance:** Tempo de carregamento < 3s
- **Usabilidade:** Taxa de conclusão > 95%
- **Segurança:** Zero vulnerabilidades críticas
- **Compatibilidade:** Funcionamento em Chrome, Firefox, Safari

---

*Documento criado em: Setembro 2025*  
*Versão: 1.0*  
*Última atualização: 16/09/2025*