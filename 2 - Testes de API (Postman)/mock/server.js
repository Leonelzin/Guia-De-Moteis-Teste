const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

// Dados mock de usuários
const users = [
  {
    "id": "1",
    "name": "Leonel",
    "email": "leonel@example.com",
    "scenario": "Valid data"
  },
  {
    "id": "2",
    "name": "Momo",
    "email": "momo@example.com",
    "scenario": "Valid data"
  },
  {
    "id": "3",
    "name": "Rafael",
    "email": "rafael@example.com",
    "scenario": "Valid data"
  }
];

// Endpoint para criar um novo usuário
app.post('/users', 
  [
    // Validações
    body('name').notEmpty().withMessage('Name is required'),  // Nome é obrigatório
    body('email').isEmail().withMessage('Invalid email address').notEmpty().withMessage('Email is required')  // E-mail é obrigatório e deve ser válido
  ], 
  (req, res) => {
    // Verifica se há erros na validação
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Se houver erros, retorna o status 400 com os detalhes do erro
      return res.status(400).json({ errors: errors.array() });
    }

    // Simulação de erro no servidor (exemplo)
    if (req.body.name === 'Erro') {
      throw new Error('Simulated server error');
    }

    // Caso os dados sejam válidos
    res.status(201).json({ message: 'User created successfully' });
  }
);

// Endpoint para obter todos os usuários
app.get('/users', (req, res) => {
  res.status(200).json({ users });
});

// Endpoint para obter um usuário específico pelo ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
