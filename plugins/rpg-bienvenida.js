const handler = async function(m, { conn, usedPrefix, participants }) {
  const user = global.db.data.users[m.sender];

  // Verificar si el usuario ya está registrado
  if (user.registered === true) {
    throw '[❗] Ya estás registrado en Greed Island.';
  }

  // Proceso de registro (tu código actual aquí)

  // Mensaje de bienvenida después del registro
  const welcomeMessage = `¡Bienvenido a Greed Island, ${user.name}!\n\n` +
    `Greed Island es un emocionante juego de aventuras donde podrás enfrentarte a desafíos, recolectar cartas, aprender hechizos y ganar monedas. Tu aventura acaba de comenzar.\n\n` +
    `Recuerda que tienes ${user.lives} vidas para jugar. ¡Aprovecha al máximo cada una de ellas!\n\n` +
    `Puedes usar *${usedPrefix}comenzar* para empezar tu primera aventura en Greed Island.`;

  conn.sendMessage(m.chat, welcomeMessage, 'textMessage', { quoted: m });
};
