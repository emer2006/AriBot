let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- Nombre
  let nowner = ``
  let teksnomor = `
• @${wm.split`@`[0]} •
------- ${wm} -------
`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `
*- - sᴋɪʟʟs: - -* 
> JavaScript [70.7%]
> Python [11.4%]
> CSS [4.1%]
> Html [0.9%]
> Recode [76.8%]
> Create Webs [88.9%]

───────[ SOSIAL MEDIA ]───────

✅ *Nombre: DIEGO-OFC*
🐈 *Github:* https://github.com/DIEGO-OFC/DORRAT-BOT-MD
🥏 *Whatsapp* wa.me/972529277520

`
  let teks = ' '
const sections = [
   {
	title: ` OWNER`,
	rows: [
	    {title: "📱 • Información de los owner", rowId: "infowner"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌐 • Website", rowId: ".website"},
	{title: "🌎 • Script", rowId: ".sc"},
	{title: "🏮 • Youtube", rowId: ".yt"},
	]
    },{
	title: `${htjava} update  –––––––·•`,
	rows: [
	    {title: "💹 • Donar", rowId: ".donar"},
	{title: "🔖 • Grupos", rowId: ".grupos"},
	{title: "🌟 • Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER | CREADOR* ${htka}`,
  buttonText: "Seleciona Aqui",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, wm, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/972529277520 💬 ᴄʜᴀᴛs", null,null, [["Grupos", '.grupos'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
