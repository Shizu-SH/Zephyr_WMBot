import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://telegra.ph/file/06cc652844ea19e8aed1c.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  // Verifica si el usuario está registrado en la base de datos de Greed Island
  if (!(who in global.db.data.greedIslandUsers)) {
    throw `El usuario mencionado no está registrado en Greed Island.`;
  }

  try {
    // Obtiene la imagen de perfil del usuario
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
    // En caso de error, se mantiene la imagen de perfil predeterminada
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.greedIslandUsers[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    
    // Crea la cadena de texto del perfil de Greed Island
    const str = `*𝙽𝙾𝙼𝙱𝚁𝙴:* ${username} ${registered ? '(' + name + ') ': ''}
*𝙽𝚄𝙼𝙴𝚁𝙾:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*𝙻𝙸𝙽𝙺:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
*𝙻𝙸𝙼𝙸𝚃𝙴:* ${limit} 𝚄𝚂𝙾𝚂
*𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾:* ${registered ? 'Si': 'No'}
*𝙿𝚁𝙴𝙼𝙸𝚄𝙼:* ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}
*𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴:* 
${sn}`;
    
    // Envía la imagen de perfil y la información de Greed Island
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};

handler.help = ['perfil [@usuario]'];
handler.tags = ['greedisland'];
handler.command = /^perfil|profile?$/i;
export default handler;
