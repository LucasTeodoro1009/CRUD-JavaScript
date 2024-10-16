# Sistema de Cadastro de Usuários

Este projeto é um sistema de CRUD (Create, Read, Update, Delete) para gerenciamento de dados de usuários, utilizando JavaScript e localStorage.

## Como o Projeto Foi Desenvolvido

### Estrutura do Projeto

O projeto é composto por três arquivos principais:

- **`index.html`**: Página HTML que contém o formulário de cadastro e a tabela para exibir os usuários.
- **`styles.css`**: Folha de estilo para estilizar a página HTML.
- **`script.js`**: Arquivo JavaScript responsável pela lógica do CRUD e integração com localStorage.

### Passos para Implementação

1. **Criação da Estrutura HTML e CSS**:
   - Desenvolvi a página HTML para incluir um formulário e uma tabela.
   - Criei o CSS para estilizar o formulário e a tabela.

2. **Implementação da Lógica em JavaScript**:
   - Usei o padrão Factory para criar objetos de usuário.
   - Implementei funções para criar, ler, atualizar e deletar dados no localStorage.

3. **Integração com localStorage**:
   - Os dados dos usuários são armazenados e gerenciados usando localStorage do navegador.

## Dificuldades Conhecidas

Durante o desenvolvimento, enfrentei as seguintes dificuldades:

- **Padrão Factory**: Tive problemas para entender o padrão Factory e como aplicá-lo corretamente em JavaScript.
- **Criação de Funções em JavaScript**: Criar funções para manipular dados e interagir com o DOM foi desafiador inicialmente.
- **Comandos Git**: Como era tudo novo para mim, tive dificuldades com comandos Git e fluxo de trabalho. Consegui superar essas dificuldades buscando apoio em fontes online, repositórios e tutoriais.

## Como Utilizar o Sistema

1. Clone o repositório para sua máquina local usando:
   
   ``

2. Navegue para a pasta do projeto com:

   ``

3. Abra o arquivo `index.html` em um navegador para acessar a interface do sistema de cadastro.

4. Utilize o formulário da seguinte maneira:

   - **Adicionar Usuário**: Preencha os campos do formulário com os dados do usuário e clique em "Adicionar". O usuário será adicionado à tabela e salvo no localStorage.
   - **Editar Usuário**: Clique em "Editar" ao lado do usuário que deseja modificar. Os dados do usuário serão preenchidos no formulário, e você poderá fazer alterações. Clique em "Adicionar" novamente para salvar as mudanças.
   - **Excluir Usuário**: Clique em "Excluir" ao lado do usuário que deseja remover. O usuário será excluído da tabela e removido do localStorage.

5. Verifique e teste a aplicação. A tabela será atualizada automaticamente após adicionar, editar ou excluir um usuário. Os dados são persistidos no localStorage e permanecem disponíveis mesmo após recarregar a página.

## Contribuições

Se você tiver sugestões ou melhorias para o projeto, sinta-se à vontade para contribuir com pull requests ou abrir issues.
