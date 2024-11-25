const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PvR0EBIQ#PIjBt7lTZkUkbHI3g7IM4t2iBomLISopXqfEsP8aCPk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/tjhxsh.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*🧚‍♂️Dark Queen🧚‍♂️*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
