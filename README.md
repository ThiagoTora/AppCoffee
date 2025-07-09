
☕ Coffee Delivery 
Este é um site React para um serviço de entrega de café, permitindo aos usuários navegar por um catálogo de cafés, adicioná-los a um carrinho de compras e concluir um processo de checkout com informações de entrega e seleção de pagamento.

✨ Funcionalidades
  Catálogo de Produtos: Navegue por uma variedade de tipos de café com descrições, preços e tags (por exemplo, "Tradicional", "Gelado", "Especial").

  Carrinho de Compras:
    * Adicione e remova itens do carrinho.
    * Ajuste a quantidade de itens no carrinho.
    * Visualize o preço total dos itens no carrinho, com uma taxa de entrega adicionada.
    * O estado do carrinho é persistido no armazenamento local (localStorage).
  
  Processo de Checkout:
    * Formulário para endereço de entrega (CEP, Rua, Número, Complemento, Bairro, Cidade, UF).
    * Busca automática de endereço com base no CEP usando a API ViaCEP.
    * Seleção do método de pagamento (Crédito, Débito, Dinheiro, Pix).
    * Página de confirmação do pedido exibindo os detalhes da entrega e o método de pagamento escolhido.
    * Design Responsivo: O layout do aplicativo se adapta a diferentes tamanhos de tela, incluindo dispositivos móveis.
    * Roteamento: Navegação entre as páginas inicial e de checkout.
  
💻 Tecnologias Utilizadas
    * React: Uma biblioteca JavaScript para a construção de interfaces de usuário.
    * TypeScript: Um superconjunto de JavaScript que adiciona tipagem estática.
    * Vite: Uma ferramenta de construção rápida que proporciona uma experiência de desenvolvimento ágil.
    * Styled Components: Para escrever CSS em JavaScript para estilizar componentes.
    * React Router DOM: Para roteamento declarativo em aplicativos React.
    * React Hook Form: Para validação e gerenciamento de formulários com Zod para validação de esquema.
    * Phosphor React: Para uma biblioteca de ícones flexível.

📂 Estrutura do Projeto
  O projeto segue uma arquitetura baseada em componentes:
    src/
    ├── assets/               
    ├── components/
    │   ├── Cafes/
    │   │   └── CoffeeCatalog.tsx 
    │   └── Header/
    │       ├── Header.tsx       
    │       └── styles.ts        
    ├── contexts/
    │   └── CarrinhoContext.tsx 
    ├── layouts/
    │   └── DefaultLayout/
    │       ├── layout.tsx       
    │       └── syles.ts         
    ├── pages/
    │   ├── Checkout/
    │   │   ├── Checkout.tsx      
    │   │   ├── styles.ts         
    │   │   └── components/
    │   │       ├── ConfirmLocal/
    │   │       │   ├── PedidoConfirmado.tsx
    │   │       │   └── styles.ts            
    │   │       └── Form/
    │   │           ├── CheckoutForm.tsx    
    │   │           └── styles.ts           
    │   └── Home/
    │       ├── Home.tsx         
    │       └── styles.ts         
    ├── styles/
    │   ├── Global.ts           
    │   └── themes/
    │       └── default.ts        
    ├── types/
    │   ├── styled.d.ts           
    │   └── types.ts             
    ├── App.tsx                
    ├── main.tsx                
    ├── Router.tsx             
    └── vite-env.d.ts      
    
🚀 Configuração e Instalação
    Para configurar e executar este projeto localmente, siga estas etapas:
      1. Clone o repositório:
        git clone https://github.com/ThiagoTora/AppCoffee.git
        cd AppCoffee
      2. Instale as dependências:
        npm install
        # ou
        yarn install
      3.Execute o servidor de desenvolvimento:
        npm run dev
        # ou
        yarn dev
        Isso iniciará o servidor de desenvolvimento Vite, geralmente em http://localhost:5173/.
      
⚙️ Scripts Disponíveis
    npm run dev ou yarn dev: Executa o aplicativo em modo de desenvolvimento.
    npm run build ou yarn build: Constrói o aplicativo para produção na pasta dist.
    npm run lint ou yarn lint: Realiza a análise de código nos arquivos do projeto.
    npm run preview ou yarn preview: Serve a pasta dist localmente para pré-visualizar uma build de produção.
      
📏 Configuração do Linting
    O projeto utiliza ESLint com TypeScript. A configuração é estendida para incluir regras de linting com reconhecimento de tipo e regras específicas do React.

