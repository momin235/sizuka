const fs = require("fs");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "info",
    aliases: ["admininfo", "botinfo", "admin", "ownerinfo"],
    version: "1.4",
    author: "𝐌𝐑.𝐅𝐀𝐑𝐇𝐀𝐍",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Show bot & owner info" },
    longDescription: { en: "Display detailed information about the bot and owner" },
    category: "owner",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message }) {

    // OWNER INFO
    const authorName = "𝐌𝐑.𝐅𝐀𝐑𝐇𝐀𝐍";
    const ownAge = "𝟏𝟗+";
    const messenger = "https://m.me/DEVIL.FARHAN.420";
    const authorFB = "https://www.facebook.com/DEVIL.FARHAN.420";
    const authorNumber = "https://wa.me/+8801934640061";
    const Status = "𝐒𝐈𝐍𝐆𝐋𝐄";

    // SAFE CATBOX VIDEO LINK
    const videoLink = "https://files.catbox.moe/rtgdvs.mp4";

    // BANGLADESH TIME
    const now = moment().tz("Asia/Dhaka");
    const date = now.format("MMMM Do YYYY");
    const time = now.format("h:mm:ss A");

    // BOT UPTIME
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / 3600) % 24);
    const days = Math.floor(uptime / 86400);

    const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const text =
`‎╔═《✨ 𝗢𝗪𝗡𝗘𝗥 & 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ✨》═╗

🤖>𝐁𝐎𝐓-𝐍𝐀𝐌𝐄:- ${global.GoatBot.config.nickNameBot}
👾>𝐏𝐑𝐄𝐅𝐈𝐗:- ${global.GoatBot.config.prefix}

👑>𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑:- ${authorName}
📝>𝐀𝐆𝐄:- ${ownAge}
💕>𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏:- ${Status}

📞>𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏:- ${authorNumber}
🌍>𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊:- ${authorFB}

🗓>𝐃𝐀𝐓𝐄:- ${date}
⏰>𝐓𝐈𝐌𝐄:- ${time}

🔰>𝐂𝐎𝐍𝐓𝐀𝐂𝐓-𝐎𝐖𝐍𝐄𝐑:- ${messenger}
🕠>𝐁𝐎𝐓-𝐔𝐏𝐓𝐈𝐌𝐄:- ${uptimeString}

‎╚═════════════════════════╝`;

    return message.reply({
      body: text,
      attachment: await global.utils.getStreamFromURL(videoLink)
    });
  },

  onChat: async function ({ event, message }) {
    if (event.body?.toLowerCase() === "info") {
      return this.onStart({ message });
    }
  }
};
