describe('Formulário de Cadastro de Usuário', () => {
    beforeEach(() => {
      // Navegue até a página do formulário antes de cada teste
      cy.visit('http://localhost:8080/index.html'); // Se estiver rodando em um servidor local.
    });
  
    it('Deve exibir mensagem de sucesso ao preencher o formulário corretamente', () => {
      cy.get('#nome').type('Usuário Teste'); // Campo Nome
      cy.get('#email').type('usuario@teste.com'); // Campo E-mail
      cy.get('#confirmacaoEmail').type('usuario@teste.com'); // Campo Confirmação de E-mail
      cy.get('#senha').type('SenhaForte123'); // Campo Senha
      cy.get('#submit').click(); // Botão Enviar
  
      // Valida se a mensagem de sucesso é exibida
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });
  
    it('Deve exibir mensagens de erro ao deixar campos obrigatórios vazios', () => {
      cy.get('#submit').click(); // Tenta enviar o formulário vazio
  
      // Valida se mensagens de erro são exibidas
      cy.get('#nome-error').should('contain', 'Este campo é obrigatório');
      cy.get('#email-error').should('contain', 'Este campo é obrigatório');
      cy.get('#senha-error').should('contain', 'Este campo é obrigatório');
    });
  
    it('Deve exibir erro ao digitar uma senha fraca', () => {
      cy.get('#nome').type('Usuário Teste');
      cy.get('#email').type('usuario@teste.com');
      cy.get('#confirmacaoEmail').type('usuario@teste.com');
      cy.get('#senha').type('12345'); // Senha fraca
      cy.get('#submit').click();
  
      // Valida se a mensagem de erro de senha fraca é exibida
      cy.get('#senha-error').should(
        'contain',
        'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número'
      );
    });
  
    it('Deve exibir erro ao digitar e-mails diferentes nos campos de confirmação', () => {
      cy.get('#nome').type('Usuário Teste');
      cy.get('#email').type('usuario@teste.com');
      cy.get('#confirmacaoEmail').type('diferente@teste.com'); // E-mails diferentes
      cy.get('#senha').type('SenhaForte123');
      cy.get('#submit').click();
  
      // Valida se a mensagem de erro de confirmação de e-mail é exibida
      cy.get('#confirmacaoEmail-error').should('contain', 'Os e-mails não coincidem');
    });
  });
  