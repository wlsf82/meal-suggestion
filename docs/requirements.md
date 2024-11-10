
# Regras de negócio para o sistema de "Sugestão de Refeições Veganas"

---

## Visão Geral

Este documento descreve os requisitos de negócio para um aplicativo web que oferece sugestões de refeições veganas. O aplicativo permite que os usuários busquem refeições veganas com base em categorias específicas ou conteúdo de alta proteína. O objetivo do aplicativo é fornecer aos usuários ideias rápidas e acessíveis de refeições veganas com ingredientes e opções de filtragem que atendam a várias preferências alimentares.

---

## Funcionalidades Principais e Requisitos Funcionais

### 1. Categorias e Filtros de Refeição

- **Filtro de Tipo de Refeição**: Os usuários podem filtrar as refeições por categorias predefinidas:
  - Salada
  - Sopa
  - Sanduíche
  - Pratos quentes
  - Lanches
- **Opção de Alta Proteína**: Os usuários também podem filtrar para exibir apenas refeições com alto teor de proteína.
- **Implementação**: 
  - Um dropdown em HTML com os tipos de refeição disponíveis e uma opção específica para refeições de alta proteína.
  - Funcionalidade de filtragem que atualiza a exibição das refeições com base na opção selecionada no dropdown.

### 2. Funcionalidade de Busca de Refeições

- **Busca por Nome**: Os usuários podem buscar refeições inserindo palavras-chave em um campo de busca.
- **Comportamento da Busca**:
  - Exibir refeições cujos nomes incluam o termo de busca.
  - Limpar o campo de busca após o envio.
- **Implementação**:
  - JavaScript para gerenciar a entrada de busca, filtrar refeições no conjunto de dados e exibir resultados correspondentes.

### 3. Geração de Refeição Aleatória

- **Exibição de Refeição Aleatória**: Quando a página é carregada ou quando nenhuma refeição específica é buscada, uma sugestão de refeição aleatória da lista filtrada aparece na tela.
- **Implementação**:
  - Função em JavaScript para selecionar uma refeição aleatória da lista filtrada atual e exibi-la com seus ingredientes.

### 4. Dados e Estrutura das Refeições

- **Conjunto de Dados de Refeições**: Os dados das refeições são armazenados como um array de objetos, cada um representando uma refeição com os seguintes atributos:
  - `name`: O nome da refeição.
  - `ingredients`: Uma lista de ingredientes da refeição.
  - `type`: Tipo de refeição (ex.: salada, sopa, sanduíche, etc.).
  - `highProtein`: Um booleano indicando se a refeição é rica em proteínas.
- **Implementação**:
  - Os dados são definidos em um arquivo JavaScript e carregados no aplicativo para uso em filtragem e busca.

### 5. Exibição e Informação das Refeições

- **Detalhes da Refeição**: Cada refeição exibida inclui:
  - Nome da refeição.
  - Tipo de refeição e indicador de proteína (se aplicável).
  - Lista de ingredientes.
- **Componentes da Interface**:
  - Elemento `meal-name` para o nome da refeição com o tipo e status de proteína.
  - Elemento `ingredients-list` exibindo cada ingrediente como um item de lista.

---

## Requisitos Não Funcionais

### 1. Interface do Usuário e Usabilidade

- A interface do usuário deve ser amigável, com rótulos claros para o dropdown de filtro, barra de busca e funcionalidades de botões.
- Uma experiência fluida com sugestões de refeições e resultados de busca exibidos imediatamente, sem recarregar a página.

### 2. Desempenho

- O aplicativo deve carregar rapidamente, incluindo os dados das refeições de um arquivo JavaScript pré-carregado.
- A filtragem e seleção aleatória de refeições devem ser otimizadas para minimizar o atraso.

### 3. Compatibilidade com Navegadores

- O aplicativo deve ser compatível com navegadores modernos, garantindo uma experiência consistente em diferentes plataformas.

---

## Considerações Futuras

- **Filtros Expandidos**: Filtros alimentares adicionais (ex.: sem glúten, sem nozes) poderiam ser incluídos.
- **Detalhes da Refeição**: A inclusão de informações nutricionais, tempo de preparo e instruções passo a passo poderia aprimorar a experiência do usuário.
- **Contas de Usuário**: Opção de salvar refeições favoritas ou criar um plano de refeições personalizado.

---

Este documento descreve a funcionalidade e os objetivos do sistema de sugestão de refeições veganas para garantir uma experiência confiável e agradável para os usuários que buscam ideias de refeições veganas.
