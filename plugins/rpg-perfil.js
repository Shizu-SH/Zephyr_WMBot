import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';

const handler = async (m, { conn, participants }) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

  if (!(who in global.db.data.users)) {
    throw `El usuario mencionado no está registrado en Greed Island`;
  }

  const user = global.db.data.users[who];
  const username = conn.getName(who);
  const sn = createHash('md5').update(who).digest('hex');

  let profileInfo = `*𝙽𝙾𝙼𝙱𝚁𝙴:* ${username}
*𝙴𝙳𝙰𝙳:* ${user.age} años
*𝙻𝙸𝚅𝙰𝚂 𝚁𝙴𝚂𝚃𝙰𝙽𝚃𝙴𝚂:* ${user.lives}
*𝙲𝙰𝚁𝚃𝙰𝚂/𝙷𝙴𝙲𝙷𝙸𝚉𝙾𝚂 𝙴𝙽 𝙸𝙽𝚅𝙴𝙽𝚃𝙰𝚁𝙸𝙾:* ${user.cardsOrSpells}
*𝙼𝙾𝙽𝙴𝚈:* ${user.money} monedas
*𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰:* ${user.exp}
*𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾:* ${user.registered ? 'Sí' : 'No'}
*𝚂𝙽 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴:* ${sn}`;

  try {
    const pp = await conn.getProfilePicture(who);
    conn.sendFile(m.chat, pp, 'profile.jpg', profileInfo, m);
  } catch (e) {
    conn.sendMessage(m.chat, profileInfo, 'extendedTextMessage', { quoted: m });
  }
};

handler.help = ['perfil'];
handler.tags = ['greedisland'];
handler.command = ['perfil', 'profile'];
handler.group = true;

export default handler;
