const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎧",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
⫷⦁[ * 🧚 Dark Queen-SONG_DOWNLOADER 🧚 * ]⦁⫸

*🎧 Dark Queen Song Download 🧚*

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

> *🧚‍♀️𝗗𝗮𝗿𝗸 𝗤𝘂𝗲𝗲𝗻🧚‍♀️*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*𝗗𝗮𝗿𝗸-𝗤𝘂𝗲𝗲𝗻*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('𝐶𝑎𝑛𝑡 𝐹𝑖𝑛𝑑 α ѕσηg')
}
})

//====================mp4_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎬",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
⫷⦁[ * 🧚 Dark Queen Video Download 🧚‍♀️ * ]⦁⫸ 

*Dark Queen Video Download 🧚*

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 🧚‍♂️
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

> *🧚‍♀️𝗗𝗮𝗿𝗸 𝗤𝘂𝗲𝗲𝗻🧚‍♀️*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*𝗗𝗮𝗿𝗸-𝗤𝘂𝗲𝗲𝗻*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('𝐶𝑎𝑛𝑡 𝐹𝑖𝑛𝑑 α νι∂єσ')
}
})
