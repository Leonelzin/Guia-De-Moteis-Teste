### 📋 README: Como executar o "Teste 1 - Automação de UI com Cypress"

---

#### 📝 **Descrição do Teste**

O objetivo deste teste é validar um formulário de cadastro de usuário, verificando os seguintes requisitos:

✅ **Campos obrigatórios**: O formulário não deve permitir o envio sem preencher todos os campos.  
✅ **Validação de senha forte**: A senha deve conter pelo menos **8 caracteres**, **1 letra maiúscula** e **1 número**.  
✅ **Confirmação de e-mail**: O e-mail digitado no campo "Confirmação de E-mail" deve ser igual ao e-mail principal.  

#### 💡 **Cenários de Teste Implementados**

1️⃣ **Preenchimento correto do formulário**: Deve exibir uma mensagem de sucesso.  
2️⃣ **Campos obrigatórios vazios**: Deve exibir mensagens de erro para os campos não preenchidos.  
3️⃣ **Senha fraca**: Exemplo: `12345`. Deve exibir um erro indicando que a senha não atende aos critérios.  
4️⃣ **E-mails diferentes**: Quando os e-mails do campo "E-mail" e "Confirmação de E-mail" forem diferentes, deve exibir um erro.

---

#### 🛠 **Pré-requisitos**

Antes de iniciar, certifique-se de ter o seguinte configurado no seu ambiente:

1. **Node.js** instalado (versão 16 ou superior).  
2. **NPM** (gerenciador de pacotes do Node.js).  
3. **Cypress** instalado (instruções abaixo).  
4. Um servidor local para hospedar o formulário HTML.

---

#### ⚙️ **Configuração do Projeto**

1. **Clone este repositório no seu ambiente local:**
   ```bash
   git clone https://github.com/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Instale o servidor HTTP (opcional, para rodar o HTML localmente):**
   ```bash
   npm install -g http-server
   ```

---

#### 📂 **Estrutura de Diretórios**

Abaixo está a estrutura esperada do projeto:

```
GUIA-DE-MOTEIS-TESTE/
├── cypress/
│   └── e2e/
│     └── 1 - Testes de UI(Interface)/
│        └── public/
│              └── index.html            # Formulário de cadastro
│        └── evidences/                  # Provas que a automação funciona
│              └── evidence-test-1.mp4           
|              └── evidence-test-1.png             
│       └── README.md # Para compreensão de como rodar o primeiro teste
│       └── registration-form.cy.js # Testes automatizados do formulário
├── support/     
│       └── index.html        # Importação do arquivo de comandos personalizados e Globais
├── cypress.config.js         # Configuração do Cypress
├── package-lock.json         # Configuração do Node.js e as versões exatas de cada pacote
├── package.json              # Configuração do Node.js
```

---

#### 🚀 **Como executar o teste**

1. **Inicie o servidor local** para hospedar o formulário:
   ```bash
   cd cypress/e2e/1-Testes de UI(Interface)/public
   http-server -p 8080
   ```

   O formulário estará disponível em: `http://localhost:8080/index.html`

2. **Abra o Cypress**:
   ```bash
   npx cypress open
   ```

3. **Selecione o teste**: Navegue até a pasta `cypress/e2e/1-Testes de UI (Interface)` e selecione o arquivo `registration-form.cy.js`.

4. **Execute o teste**: O Cypress abrirá um navegador e executará os cenários descritos acima.

---

#### 🛡 **O que será validado nos testes?**

- Se o formulário exibe uma **mensagem de sucesso** ao preencher corretamente.
- Se exibe **erros claros** quando campos obrigatórios não são preenchidos.
- Se a **validação de senha forte** está funcionando.
- Se valida corretamente os e-mails ao comparar os campos de **E-mail** e **Confirmação de E-mail**.

---

#### 🛑 **Possíveis Erros e Soluções**

1. **Erro ao carregar o formulário no navegador do Cypress**:
   - Certifique-se de que o servidor local está rodando no **localhost:8080**.
   - Use o comando: `http-server -p 8080`.

2. **Dependências ausentes**:
   - Execute `npm install` no diretório raiz do projeto.

3. **Problemas ao executar o Cypress**:
   - Certifique-se de ter o Node.js e o NPM instalados corretamente.
   - Use `npx cypress verify` para garantir que o Cypress está funcionando.

---
