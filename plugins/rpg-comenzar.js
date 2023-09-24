const handler = async function(m, { conn, usedPrefix, participants }) {
  const user = global.db.data.users[m.sender];

  // Verificar si el usuario ya está registrado
  if (user.registered !== true) {
    throw '[❗] Debes registrarte primero en Greed Island antes de comenzar tu aventura. Usa el comando de registro primero.';
  }

  // Verificar si el usuario ya ha comenzado su aventura
  if (user.startedAdventure === true) {
    throw '[❗] ¡Ya has comenzado tu aventura en Greed Island! Puedes usar otros comandos para continuar tu aventura.';
  }

  // Iniciar la aventura (puedes agregar tus lógicas aquí)

  // Marcar al usuario como que ha comenzado su aventura
  user.startedAdventure = true;

  // Mensaje de inicio de la aventura
  const startMessage = `¡Tu aventura en Greed Island ha comenzado, ${user.name}!\n\n` +
    `Estás listo para enfrentar emocionantes desafíos, recolectar cartas y aprender nuevos hechizos. ¡Que comience la aventura!\n\n` +
    `Puedes usar comandos como *explorar*, *inventario* y *hechizos* para interactuar con el juego.`;

  conn.sendMessage(m.chat, startMessage, 'textMessage', { quoted: m });
};
