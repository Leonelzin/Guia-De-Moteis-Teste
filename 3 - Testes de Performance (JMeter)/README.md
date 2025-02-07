# 📋 README: Como executar o "Teste 3 - Testes de Performance da API"

---

## 📝 **Descrição do Teste**

O objetivo deste teste é realizar uma análise de performance de uma API mock, simulando usuários simultâneos e verificando o comportamento da API sob carga. Os requisitos a serem validados são:

- ✅ **Simulação de 100 usuários simultâneos**: Testar o desempenho da API com múltiplos usuários acessando ao mesmo tempo.
- ✅ **Análise do tempo de resposta**: Verificar se a API responde rapidamente sob carga.
- ✅ **Identificação de erros de requisição**: Avaliar a ocorrência de falhas quando muitos usuários acessam simultaneamente.
- ✅ **Uso de recursos do sistema (CPU/memória)**: Observar se a API se mantém estável com o aumento de carga.

---

## 💡 **Cenários de Teste Implementados**

1️⃣ **Testar a API com 100 usuários simultâneos**: Validar o tempo de resposta e verificar se a API responde corretamente sem falhas.  
2️⃣ **Testar a API com 10.000 usuários simultâneos**: Avaliar a estabilidade da API sob carga maior.  
3️⃣ **Testar a API com 30.000 usuários simultâneos**: Simular uma carga extrema para verificar se há falhas de requisição e queda de desempenho.  
4️⃣ **Verificar a utilização de CPU e memória**: Monitorar o uso de recursos do sistema durante o teste de carga.

---

## 🛠 **Pré-requisitos**

Antes de iniciar, certifique-se de ter o seguinte configurado no seu ambiente:

1. **Apache JMeter** instalado (versão mais recente).
2. **Node.js** e **Express** instalados para rodar a API mock.

---

## 📂 **Estrutura de Diretórios**

Abaixo está a estrutura esperada do projeto com base nos testes realizados:

```
GUIA-DE-MOTEIS-TESTE/
├── 3 - Testes de Performance (JMeter)/                                               # Arquivos de teste
│       └──artefatos/                                                                 # Arquivos de configuração para APIs mock
│           └── Teste_Perfomance.jmx                                                  # Dados de exemplo da API mock
│       └── evidences/                                                                # Provas que o teste de API funciona
│              └── evidence-test-3.mp4           
|              └── evidence-test.png             
|              └── evidence-test-2.png  
|              └── evidence-test-3.png             
├── README.md                                                                         # Documentação do teste
```

---

## ⚙️ **Configuração do Projeto**

1. **Iniciar o Servidor Express**:
   - Navegue até o diretório onde o arquivo `server.js` está localizado.
   - Execute o comando:
     ```bash
     node server.js
     ```

2. **Configuração do JMeter**:
   - Importe o arquivo `Teste_Performance.jmx` no JMeter.
   - Altere a URL do servidor no JMeter para o endereço correto da API mock (ex.: `http://localhost:3000`).

---

## 🚀 **Como executar o teste (JMeter)**

1. **Inicie o Servidor Express**:
   - No terminal, execute o comando:
     ```bash
     node server.js
     ```
   - O servidor Express estará rodando em `http://localhost:3000`.

2. **Execute o Teste de Carga no JMeter**:
   - Abra o JMeter e carregue o arquivo `Teste_Performance.jmx`.
   - Execute o teste, que simula 100, 10.000 e 30.000 usuários simultâneos.
   - Durante o teste, observe os resultados de tempo de resposta, erros de requisição e uso de recursos.

---

## 🛡 **O que será validado nos testes?**

- **Tempo de Resposta**: Verificar se a API responde rapidamente a todas as requisições simuladas.
- **Erros de Requisição**: Identificar se há falhas de requisição (erros HTTP 500 ou outros).
- **Uso de CPU e Memória**: Monitorar a utilização de recursos do sistema para detectar possíveis gargalos.

---

## 🛑 **Possíveis Erros e Soluções**

1. **Erro ao conectar ao Servidor**:
   - Certifique-se de que o servidor Express está rodando corretamente.
   - Verifique se a URL no JMeter está configurada corretamente (ex.: `http://localhost:3000`).

2. **Respostas inesperadas no JMeter**:
   - Verifique as configurações do arquivo de teste `.jmx`.
   - Acesse os logs do JMeter para mais detalhes sobre possíveis falhas de configuração.

3. **Uso elevado de recursos no servidor**:
   - Caso o servidor apresente lentidão ou falhas, considere otimizar o código ou aumentar os recursos da máquina para suportar a carga mais alta.

---
