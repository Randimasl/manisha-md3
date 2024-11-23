const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    react: "🧚‍♂",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const caption = `\`\`\`
❖ ── ✦ ──『✙ Alive ✙』── ✦ ── ❖

📅 ${stylish.tiny('Date Today')} : ${myfunc.dayToday().date}
⌚ ${stylish.tiny('Time Now')} : ${myfunc.dayToday().time}

✦» 𝚄𝚜𝚎𝚛 : ${pika.pushName}
✦» 𝙱𝚘𝚝 : ${Config.botname}
✦» 𝙿𝚛𝚎𝚏𝚒𝚡 : ${prefix}
✦» 𝙾𝚠𝚗𝚎𝚛 : ${Config.ownername}
✦» 𝙼𝚘𝚍𝚎 : ${bot.worktype}
✦» 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${plugin.pluginSize().size}
✦» 𝚄𝚜𝚎𝚛𝚜 : ${await myfunc.totalAnyaUsers()}
✦» 𝚂𝚙𝚎𝚎𝚍 : ${Ping.toFixed(2).replace('-', '')}ms
✦» 𝚄𝚙𝚝𝚒𝚖𝚎 : ${myfunc.formatRuntime(process.uptime())}
✦» 𝙼𝚎𝚖 : ${myfunc.getMemoryInfo().usedMemory}/${myfunc.getMemoryInfo().totalMemory}\`\`\`

☎️ *Cᴏɴᴛᴀᴄᴛ :* https://wa.me/${ownernumber}?text=${encodeURIComponent('Owner of ' + Config.botname + ' 🥵🎀🎐')}
💻 *Sᴏᴜʀᴄᴇ Cᴏᴅᴇ :* https://github.com/PikaBotz/Anya_v2-MD
🎀 *YᴏᴜTᴜʙᴇ :* https://youtube.com/@Pika_Kunn
🔮 *Public Group :* https://chat.whatsapp.com/E490r0wSpSr89XkCWeGtnX

*R𝚎𝚙𝚕𝚢 A N𝚞𝚖𝚋𝚎𝚛 T𝚘 G𝚎𝚝:*
   𝟭 𝗔𝗹𝗹𝗺𝗲𝗻𝘂
   𝟮 𝗟𝗶𝘀𝘁𝗺𝗲𝗻𝘂
_ID: QA01_
`;

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/tjhxsh.jpg`},caption:ALIVE_MSG},{quoted: mek})
}catch(e)
console.log(e)
reply(`${e}`)
}
})



