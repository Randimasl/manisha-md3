const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DrQVyKra#WlI0J1s8379cb3q00va0ET2uFXcAVSy_nAWApcxQWlw",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/gj8jbu.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "🧚‍♂️WELLCOME TO Dark Queen🧚‍♂️",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
