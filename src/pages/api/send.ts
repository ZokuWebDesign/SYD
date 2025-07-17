import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GODADDY_EMAIL,
      pass: process.env.GODADDY_PASS,
    },
    tls: { ciphers: 'SSLv3' },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GODADDY_EMAIL}>`,
      to: process.env.GODADDY_EMAIL,
      subject: 'Novo contato via formulário',
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\n${message}`,
    });
    res.status(200).json({ success: true });
  } catch (e) {
    console.error('Nodemailer error:', e);
    res.status(500).json({ error: 'Erro no envio' });
  }
}