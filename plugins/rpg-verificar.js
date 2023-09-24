import { createHash } from 'crypto';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);

  // Verifica si el jugador ya está registrado en Greed Island
  if (user.registered) {
    throw `¡Ya estás registrado en Greed Island!`;
  }

  // Verifica el formato de registro
  if (!/^\w+\.\d+$/.test(text)) {
    throw `*Formato de registro incorrecto.*\n\nEjemplo: ${usedPrefix + command} Shadow.18`;
  }

  let [name, age] = text.split('.');
  age = parseInt(age);

  // Verifica la edad
  if (isNaN(age) || age < 5 || age > 100) {
    throw `*Edad no válida. Debe estar entre 5 y 100 años.*`;
  }

  // Verifica la longitud del nombre
  if (name.length >= 30) {
    throw 'El nombre es demasiado largo.';
  }

  // Realiza el registro
  user.name = name.trim();
  user.age = age;
  user.regTime = +new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');

  const caption = `
┏━━━━━━━━━━━━━━━
┃ **𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍**
┣━━━━━━━━━━━━━━━
┃ *𝙽𝙾𝙼𝙱𝚁𝙴:* ${name}
┃ *𝙴𝙳𝙰𝙳:* ${age} años
┃ *𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴:*
┃ ${sn}
┣━━━━━━━━━━━━━━━
┃ ¡Te has registrado con éxito en Greed Island!
┗━━━━━━━━━━━━━━━
  `;

  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};

handler.help = ['registro'];
handler.tags = ['greedisland'];
handler.command = ['registro', 'registrarse', 'reg'];
handler.group = true;

export default handler;
