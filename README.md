### ---------- **Coffee Delivery**  
É um site React para um serviço de entrega de café, permitindo aos usuários navegar por um catálogo de cafés, adicioná-los a um carrinho de compras e concluir um processo de checkout com informações de entrega e seleção de pagamento.

### ----------- Link para a visualização do projeto

```bash

```

### ---------- Funcionalidades

#### Catálogo de Produtos
- Navegue por uma variedade de tipos de café com descrições, preços e tags (por exemplo, "Tradicional", "Gelado", "Especial").

#### Carrinho de Compras
- Adicione e remova itens do carrinho.
- Ajuste a quantidade de itens no carrinho.
- Visualize o preço total dos itens no carrinho, com uma taxa de entrega adicionada.
- O estado do carrinho é persistido no armazenamento local (localStorage).

#### Processo de Checkout
- Formulário para endereço de entrega (CEP, Rua, Número, Complemento, Bairro, Cidade, UF).
- Busca automática de endereço com base no CEP usando a API ViaCEP.
- Seleção de método de pagamento (Crédito, Débito, Dinheiro, Pix).
- Página de confirmação do pedido exibindo os detalhes da entrega e o método de pagamento escolhido.
- Design Responsivo.
- Roteamento entre páginas iniciais e de checkout.

---

### ---------- Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Vite**: Ferramenta de build rápida.
- **Styled Components**: Estilização com CSS-in-JS.
- **React Router DOM**: Roteamento entre páginas.
- **React Hook Form**: Manipulação de formulários.
- **Zod**: Validação de dados.
- **Phosphor React**: Ícones flexíveis.

---

### ---------- Configuração e Instalação 
1. Clone o repositório:
   
    ```bash 
        git clone https://github.com/ThiagoTora/AppCoffee.git
        cd AppCoffee
    ```
    
2. Instale as dependências:
   
    ```bash
        npm install
    ```
    
3. Execute o servidor de desenvolvimento:
   
    ```bash
         npm run dev
    ```

### ---------- Estrutura do Projeto

```plaintext
    src/
    ├── assets/
    ├── components/
    │   ├── Cafes/
    │   │   └── CoffeeCatalog.tsx
    │   ├── Header/
    │   │   └── Header.tsx
    │   └── styles.ts
    ├── contexts/
    │   └── CarrinhoContext.tsx
    ├── layouts/
    │   └── DefaultLayout/
    │       └── DefaultLayout.tsx
    ├── pages/
    │   ├── Checkout/
    │   │   ├── Checkout.tsx
    │   │   ├── components/
    │   │   │   ├── ConfirmLocal/
    │   │   │   │   └── styles.ts
    │   │   │   ├── PedidoConfirmado.tsx
    │   │   │   ├── Form/
    │   │   │   │   ├── CheckoutForm.tsx
    │   │   │   │   └── styles.ts
    │   ├── Home/
    │   │   ├── Home.tsx
    │   │   └── styles.ts
    ├── styles/
    │   ├── Global.ts
    │   └── themes/
    │       ├── default.ts
    ├── types/
    │   ├── styled.d.ts
    │   └── types.ts
    ├── App.tsx
    ├── main.tsx
    ├── Router.tsx
    └── vite-env.d.ts
```

