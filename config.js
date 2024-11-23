const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WnYAmShD#yd_vK26iaD21EqW3E2p4gjYDjyOoxulC3HEiPLsvTz4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/gj8jbu.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "🧚‍♂️WELLCOME TO Dark Queen🧚‍♂️",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
