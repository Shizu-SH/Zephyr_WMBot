import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = 'https://telegra.ph/file/133c09e67a3aecea17df7.jpg';
    // let vn = './media/menu.mp3'
    const img = './Menu3.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭━━❍Zephyr - Bot❍━━╮ 
 ┃ ╭━━━━━━━━━━━━━━━━╮ 
 ┃ ┃ ╭┈────────────╮ 
 ┃ ┃ │❍ 🅼🅴🅽🆄 ❍ 
 ┃ ┃ ╰┈────────────╯ 
 ┃ ╰━━━━━━━━━━━━━━━━╯ 
 ┣━━━▢ ʙᴜᴇɴᴀꜱ, ${taguser}• 
 ┃╭━━━━━━━━━━━━━━━━╾• 
 ┃┃  ❍ 3.0 ❍ 
 ┃┣━━━━━━━━━━━━━━━━╾• 
 ┃┃ ⋄ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ:  Shizu-Hub 
 ┃┃ ⋄ ꜰᴇᴄʜᴀ » ${date} 
 ┃┃ ⋄ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ » ${uptime} 
 ┃┃ ⋄ ʟᴇɴɢᴜᴀᴊᴇ » ꜱᴘᴀɴɪꜱʜ 
 ┃┃ ⋄ ᴜꜱᴜᴀʀɪᴏꜱ » ${rtotalreg} 
 ┃╰━━━━━━━━━━━━━━━━╾• 
 ╰━━━╼Eʅɱσ - Bσƚ╾━━━╯ 

 ╭━━━━━━━━━━━━━━━━╮
 ┃ ⋄ ᴄᴏᴍᴀɴᴅᴏꜱ: » shizu.boxmine.xyz
 ╰━━━━━━━━━━━━━━━━╾•

 ╭━━━━━━━━━━━━━━━━╮
     INFO DEL USUARIO          
 ╭━━━━━━━━━━━━━━━━╯
 ║👤 NOMBRE: ${taguser} 
 ║🧰 EXPERIENCIA ➟ ${exp} 
 ║⚓ RANGO ➟ ${role}* 
 ║💎 DIAMANTES ➟ ${limit} 
 ║💸 DOLARES ➟ ${money} 
 ╰═══════════════ ✧ 
${readMore}

┌───〈 STICKERS 〉───◆
│╭─────────────···▸
┴│▸
⬡│▸  ${usedPrefix}s
⬡│▸  ${usedPrefix}wanted
⬡│▸  ${usedPrefix}trigger
⬡│▸  ${usedPrefix}rainbow
⬡│▸  ${usedPrefix}face
⬡│▸  ${usedPrefix}delete
⬡│▸  ${usedPrefix}jail
⬡│▸  ${usedPrefix}spank
⬡│▸  ${usedPrefix}shit
⬡│▸  ${usedPrefix}rip
⬡│▸  ${usedPrefix}trash
⬡│▸  ${usedPrefix}loli
⬡│▸  ${usedPrefix}beautiful
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
┬│▸
│╰────────────···▸▸

┌───〈 JUEGOS 〉───◆
│╭─────────────···▸
┴│▸
⬡│▸  ${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*
⬡│▸  ${usedPrefix}fake *<texto1> <@tag> <texto2>*
⬡│▸  ${usedPrefix}ppt *<papel / tijera /piedra>*
⬡│▸  ${usedPrefix}prostituto *<nombre / @tag>*
⬡│▸  ${usedPrefix}prostituta *<nombre / @tag>*
⬡│▸  ${usedPrefix}gay2 *<nombre / @tag>*
⬡│▸  ${usedPrefix}lesbiana *<nombre / @tag>*
⬡│▸  ${usedPrefix}pajero *<nombre / @tag>*
⬡│▸  ${usedPrefix}pajera *<nombre / @tag>*
⬡│▸  ${usedPrefix}puto *<nombre / @tag>*
⬡│▸  ${usedPrefix}puta *<nombre / @tag>*
⬡│▸  ${usedPrefix}manco *<nombre / @tag>*
⬡│▸  ${usedPrefix}manca *<nombre / @tag>*
⬡│▸  ${usedPrefix}rata *<nombre / @tag>*
⬡│▸  ${usedPrefix}love *<nombre / @tag>*
⬡│▸  ${usedPrefix}doxear *<nombre / @tag>*
⬡│▸  ${usedPrefix}pregunta *<texto>*
⬡│▸  ${usedPrefix}suitpvp *<@tag>*
⬡│▸  ${usedPrefix}slot *<apuesta>*
⬡│▸  ${usedPrefix}ttt *<nombre sala>*
⬡│▸  ${usedPrefix}delttt
⬡│▸  ${usedPrefix}acertijo
⬡│▸  ${usedPrefix}simi *<texto>*
⬡│▸  ${usedPrefix}top *<texto>*
⬡│▸  ${usedPrefix}topgays
⬡│▸  ${usedPrefix}topotakus
⬡│▸  ${usedPrefix}formarpareja
⬡│▸  ${usedPrefix}verdad
⬡│▸  ${usedPrefix}reto
⬡│▸  ${usedPrefix}cancion
⬡│▸  ${usedPrefix}pista
⬡│▸  ${usedPrefix}akinator
⬡│▸  ${usedPrefix}wordfind_
┬│▸
│╰────────────···▸▸

┌───〈 proximamente 〉───◆
│╭─────────────···▸
┴│▸
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
⬡│▸  ${usedPrefix}
┬│▸
│╰────────────···▸▸`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnailUrl": pp, "mediaUrl": `https://gamshop.website`, "sourceUrl": `https://gamshop.website`}}}, {quoted: m});        
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};        
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnailUrl": pp, "mediaUrl": `https://gamshop.website`, "sourceUrl": `https://gamshop.website`}}}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
