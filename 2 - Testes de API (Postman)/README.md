### 📋 README: Como executar o "Teste 2 - Testes de API (Postman)"

---

#### 📝 **Descrição do Teste**

O objetivo deste teste é validar uma API REST, garantindo os seguintes requisitos:

✅ **Requisições GET e POST**: Certificar-se de que a API responde corretamente.  
✅ **Respostas HTTP apropriadas**: Validar os status codes 200, 400 e 500.  
✅ **Estrutura do JSON**: Garantir que o retorno da API contenha os campos esperados.  

---

#### 🗒️ **Documentação da Apiary**

😊 **Você pode acessar a documentação da Apiary dos testes aqui recrutador**
    -   https://app.swaggerhub.com/apis-docs/Leozin/Guia-de-Moteis/1.0.0#/default

---

#### 💡 **Cenários de Teste Implementados**

1️⃣ **GET /users - Sucesso**: Validar que o endpoint retorna uma lista de usuários com os campos obrigatórios.  
2️⃣ **POST /users - Sucesso**: Enviar uma requisição com todos os campos obrigatórios e validar a criação de um novo usuário.  
3️⃣ **POST /users - Erro 400**: Enviar um payload sem o campo obrigatório email e validar que o status retornado é 400.  
4️⃣ **POST /users - Erro 500**: Simular um erro no servidor e validar que o status retornado é 500.

---

#### 🛠 **Pré-requisitos**

Antes de iniciar, certifique-se de ter o seguinte configurado no seu ambiente:

1. **Postman** instalado (versão mais recente).  
2. Opcional: **Mockoon**, **JSON Server** ou **Postman Mock Server** caso prefira criar uma API mock.  

---

#### 📂 **Estrutura de Diretórios** (Para testes com Jest)

Abaixo está a estrutura esperada do projeto caso os testes sejam automatizados em Node.js:

```
GUIA-DE-MOTEIS-TESTE/
├── 2 - Testes de API (Postman)/                                                      # Arquivos de teste
│       └──mock/                                                                      # Arquivos de configuração para APIs mock
│           └── Mock API - Testes.postman_collection.json                             # Dados de exemplo da API mock
│           └── server.js                                                             # Dados de exemplo da API mock
│       └── evidences/                                                                # Provas que o teste de API funciona
│              └── evidence-test-2.mp4           
|              └── evidence-test.png             
|              └── evidence-test-2.png  
|              └── evidence-test-3.png             
├── README.md                                         # Documentação do teste
```

---

#### ⚙️ **Configuração do Projeto com Postman**

1. **Importe a Collection no Postman**:
   - Salve o arquivo JSON da collection visualizado no folder /mock no seu computador.
   - No Postman, clique em **Import** e selecione o arquivo para adicionar os endpoints.

2. **Configure o Ambiente no Postman**:
   - Vá em **Environments > Manage Environments**.
   - Crie um novo ambiente chamado `API Test` com a variável `base_url` apontando para o endpoint da API local (ex.: `http://localhost:3000`).

---

#### 🚀 **Como executar o teste (Postman)**

1. **Inicie o Servidor Express**:
   - Antes de rodar o comando, certifique-se de que está na pasta correta onde o arquivo `server.js` está localizado.  
   - Navegue até a pasta do projeto no terminal. Exemplo:
     ```bash
     cd "E:\Repository - GDM\Guia-De-Moteis-Teste\2 - Testes de API (Postman)\mock"
     ```
   
   - Execute o servidor Express com o comando:
     ```bash
     node server.js
     ```

2. **Realize os testes no Postman**:
   - Abra a collection importada no Postman.
   - Selecione os cenários de teste, como:
     - **GET /users**: Verificar a lista de usuários.
     - **POST /users com dados válidos**: Enviar uma requisição para criar um novo usuário.
     - **POST /users sem campos obrigatórios**: Enviar uma requisição sem um campo obrigatório, como `email`, para testar o erro 400.
     - **POST /users com erro de servidor**: Simular um erro para testar o retorno 500.
   - Verifique os resultados, validando os **status codes** e as respostas **JSON**.

---

### 🛡 **O que será validado nos testes?**

- **GET /users**: Validar se o endpoint retorna a lista correta de usuários com os campos `id`, `name` e `email`.
- **POST /users (Sucesso)**: Garantir que um novo usuário é criado corretamente com todos os campos obrigatórios preenchidos.
- **POST /users (Erro 400)**: Validar que a API retorna status 400 ao enviar payloads inválidos (sem campos obrigatórios).
- **POST /users (Erro 500)**: Verificar se a API retorna status 500 ao simular um erro no servidor.

---

### 🛑 **Possíveis Erros e Soluções**

1. **Erro ao conectar ao Servidor**:
   - Certifique-se de que o servidor está rodando corretamente no endereço configurado (ex.: `http://localhost:3000`).
   - Verifique se não há erros no terminal onde o servidor foi iniciado.

2. **Respostas inesperadas da API no Postman**:
   - Verifique o payload enviado na aba `Body` das requisições POST.
   - Certifique-se de que a variável `base_url` do ambiente esteja configurada corretamente no Postman, apontando para o servidor local (ex.: `http://localhost:3000`).

---