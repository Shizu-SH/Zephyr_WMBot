const handler = async (m, { conn }) => {
  // Obtener la lista de miembros del grupo
  const groupMembers = await conn.groupMembers(m.chat);

  // Seleccionar aleatoriamente a un usuario del grupo
  const randomIndex = Math.floor(Math.random() * groupMembers.length);
  const targetUser = groupMembers[randomIndex].jid;

  // Expulsar al usuario seleccionado
  await conn.groupRemove(m.chat, [targetUser]);

  // Frases de Light Yagami de Death Note
  const frasesLight = [
    "La justicia ha sido servida.",
    "Kira siempre gana.",
    "El mundo está mejor sin ti.",
    "Soy el dios del nuevo mundo.",
    "La muerte es el castigo para aquellos que se atreven a oponerse a mí.",
  ];

  // Seleccionar aleatoriamente una frase de Light
  const randomFrase = frasesLight[Math.floor(Math.random() * frasesLight.length)];

  // Enviar mensaje al grupo
  await conn.sendMessage(m.chat, `${randomFrase} 😈`, 'text/plain', {
    mentions: [targetUser],
  });
};

handler.command = /^deathnote$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
