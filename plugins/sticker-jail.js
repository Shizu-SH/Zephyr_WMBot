import { sticker } from '../lib/sticker.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, args, usedPrefix, command}) => {
    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
    const pp = await conn.profilePictureUrl(who).catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    const img = await conn.getFile(pp)
    const link = await uploadImage(img.data);
    const json = await conn.getFile(`https://api.fgmods.xyz/api/maker/jail?url=${link}&apikey=shizu`);
    console.log(`https://api.fgmods.xyz/api/maker/jail?url=${link}&apikey=shizu`)
   let stiker = await sticker(json.data, false, global.packname, global.author);
   if (stiker) return conn.sendFile(m.chat, stiker, 'error.webp', '', m);
}
handler.help = ['jail'];
handler.tags = ['sticker'];
handler.command = /^(jail)$/i;
export default handler;
