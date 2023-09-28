import { createHash } from 'crypto';

const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

const handler = async function(m, { conn, text, usedPrefix, command }) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);

  if (user.registered === true) {
    throw `[❗𝐈𝐍𝐅𝐎❗] ¡Ya estás registrado!`;
  }

  if (!Reg.test(text)) {
    throw `*[❗𝐈𝐍𝐅𝐎❗] Formato incorrecto.*\n\n*—◉ Usa el comando así: ${usedPrefix + command} nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} Shadow.18*`;
  }

  let [_, name, splitter, age] = text.match(Reg);

  if (!name) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] Falta el nombre en tu comando.*';
  }

  if (!age) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] Falta la edad en tu comando.*';
  }

  if (name.length >= 30) {
    throw '[❗𝐈𝐍𝐅𝐎❗] El nombre es demasiado largo.';
  }

  age = parseInt(age);

  if (age > 100) {
    throw '*[❗] ¿Cómo sigues vivo con esa edad?* 👴🏻';
  }

  if (age < 5) {
    throw '*[❗] ¿Un bebé que sabe usar WhatsApp?* 😲';
  }

  user.name = name.trim();
  user.age = age;
  user.regTime = +new Date;
  user.registered = true;

  const sn = createHash('md5').update(m.sender).digest('hex');

  const caption = `¡Bienvenido a Greed Island, ${user.name}!\n\nHas sido registrado exitosamente en nuestro juego RPG. Disfruta de tu aventura y comienza a ganar recompensas. Tu número de serie es: ${sn}\n\n`;

  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);

  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};

handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;

export default handler;
