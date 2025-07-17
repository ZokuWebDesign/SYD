import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

// Carrega variáveis de ambiente baseado no ambiente
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

const app = express();

// Segurança
app.use(helmet());
app.use(express.json({ limit: '10kb' })); // Limita o tamanho do payload

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Limite de 5 requisições por IP
  message: 'Muitas requisições deste IP, por favor tente novamente em 15 minutos'
});

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://sydapp.com.br', 'https://www.sydapp.com.br', 'https://syd.app.br', 'https://www.syd.app.br']
    : 'http://localhost:5173',
  methods: ['POST'],
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use('/api/send', limiter); // Aplica rate limiting na rota de envio

// Criar o transporter com as configurações corretas do GoDaddy
const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true, // true para 465, false para outras portas
  auth: {
    user: process.env.GODADDY_EMAIL,
    pass: process.env.GODADDY_PASS,
  },
  debug: true, // Ativa logs detalhados
});

// Verificar a conexão antes de iniciar o servidor
transporter.verify(function(error, success) {
  if (error) {
    console.log('Erro na verificação do servidor de email:', error);
  } else {
    console.log('Servidor pronto para enviar emails');
  }
});

app.post('/api/send', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validar se temos as credenciais necessárias
    if (!process.env.GODADDY_EMAIL || !process.env.GODADDY_PASS) {
      throw new Error('Credenciais de email não configuradas');
    }

    console.log('Iniciando tentativa de envio de email...');
    console.log('De:', process.env.GODADDY_EMAIL);
    console.log('Dados do formulário:', { name, email, phone });

    const info = await transporter.sendMail({
      from: process.env.GODADDY_EMAIL, // Usar apenas o email autorizado como remetente
      replyTo: email, // Email do formulário para resposta
      to: process.env.GODADDY_EMAIL,
      subject: 'Novo contato via formulário',
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`,
      html: `
        <h2>Novo contato via formulário</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <h3>Mensagem:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    console.log('Email enviado com sucesso:', info);
    
    res.json({ 
      success: true,
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Erro detalhado:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    res.status(500).json({ 
      error: 'Erro no envio',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
