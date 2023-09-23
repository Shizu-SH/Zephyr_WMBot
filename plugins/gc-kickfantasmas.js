const handler = async (m, { conn }) => {
  const groupMembers = await conn.groupMembers(m.chat);
  const inactiveUsers = [];

  // Verificar la inactividad de los usuarios en el grupo
  for (const member of groupMembers) {
    const userId = member.jid;
    const lastSeen = await conn.getLastSeen(userId);

    // Definir el tiempo de inactividad en segundos (por ejemplo, 30 días)
    const inactivityThreshold = 30 * 24 * 60 * 60; // 30 días en segundos

    // Si el usuario ha estado inactivo durante más de 30 días, se considera inactivo
    if (lastSeen < Date.now() / 1000 - inactivityThreshold) {
      inactiveUsers.push(userId);
    }
  }

  // Expulsar a los usuarios inactivos
  for (const userId of inactiveUsers) {
    await conn.groupRemove(m.chat, [userId]);
    await conn.sendMessage(
      m.chat,
      `Usuario inactivo expulsado: *@${userId.split('@')[0]}*`,
      'text/plain',
      { mentions: [userId] }
    );
  }

  m.reply(`Se han expulsado a ${inactiveUsers.length} usuarios inactivos.`);
};

handler.command = /^kickfantasmas$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
