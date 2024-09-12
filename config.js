const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160633630";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_02_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9JdW9QVFVyMTBNb3h5WUYrM1VSTnBDZk0rT3lqZHN2TGw4OXEzeUNvdGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJwMy1uSmlSUUZTR0hrOUI0NmozS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWNmNzYyYWItZWQ0ZC00NzJjLTljNGUtZDYxMWM4OGUzZTkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDIyOCxcbiAgICAgIDIzNyxcbiAgICAgIDE2NSxcbiAgICAgIDU0LFxuICAgICAgMjM4LFxuICAgICAgMTEsXG4gICAgICAxMDUsXG4gICAgICA4NCxcbiAgICAgIDMzLFxuICAgICAgMTE1LFxuICAgICAgMTQwLFxuICAgICAgMTc2LFxuICAgICAgNjgsXG4gICAgICAxNzgsXG4gICAgICAxMzMsXG4gICAgICAyMzUsXG4gICAgICAxNDksXG4gICAgICAxMTcsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAxMTgsXG4gICAgICAxMSxcbiAgICAgIDQxLFxuICAgICAgMTYyLFxuICAgICAgMjMxLFxuICAgICAgMTc3LFxuICAgICAgMTgxLFxuICAgICAgOTYsXG4gICAgICAyNDYsXG4gICAgICAyMTgsXG4gICAgICA3OCxcbiAgICAgIDQxLFxuICAgICAgODAsXG4gICAgICAyMjUsXG4gICAgICAxMzYsXG4gICAgICAxMTEsXG4gICAgICAxNTUsXG4gICAgICAyMzgsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzY5UjJQUFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjA2MzM2MzA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJlZCBUaHJlYWRzIGFuZCBDb1wiLFxuICAgIFwibGlkXCI6IFwiMTcwMDAzNjQ3MTg1MTI4OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVYZ3JzQkVMcVJqYmNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4UHZVOWc0MkZUTkFmc0U5Q1NRaWg0NXViakZGMmt1dG45dXlBSVdEbHdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5qRHdna0U1ZmRwNkRWZkdvdTdEdExzZGV6aXNuZE1LN0hDNTVqT1I2QndRZUhKNmRMR3didnZOYWpFM1dESEkzNXcvZkpnaHdNOXR1RE1JZm0rVUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9ONkNoOGpmZThaR1FGaE95MEs5WGdoMkdpNXpBM3BCd0FGeFBUT0tCaDhKUmdnVUZLSlorZ3g2WjArT2pGek1jT3dBaDR4a21uMlZ0OSs4a1VLRENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjA2MzM2MzA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYxNzEzMjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBaVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFpVS5qc29uIjogIntcImtleURhdGFcIjpcIm5vcWpmZktHaDRxWHFwdGh1b2dNUnVDVXRHRjF2VW1xTEk0alJvSGZTMTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzkyMjAzMjA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MDY0OTUyNTRcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
