import fetch from 'node-fetch';
const handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
     if (!teks) throw `📝 Que escribo? Ejemplo : ${usedPrefix + command} Hola puercos`
      const img = `https://api.fgmods.xyz/api/maker/txt?text=${text}&apikey=shizu`
      conn.sendFile(m.chat, img, 'img.png', `✅ Es mejor de lo que escribes tú ✍🏻`, m)
}
handler.help = ['txt']
handler.tags = ['fun']
handler.command = ['txt', 'escribe']
export default handler 
