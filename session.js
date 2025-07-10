//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVNclY0RXNQWGZmc051ZzhlL293R1FOT09CcjlCMFZodHhrOUMvc08yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXNvOW9XV3lGeU9PU1Zjb3JkKzlrL0dlaDMvSStFcU1oUmpSc09USVJ3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RzVNUEY1ZFZyNmVKWjRWQ25pRDJkVjlNN2J1RlEvQmtVUWJQaE1mSFVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzVm4zL0ZiNzcwVUxud0ZYUWs0RzdrdGU0U21NdnduSUtRTUpjc3B2cFdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOVU1EUXZzdTYydmEvU25wMjVxVmZ3cWVIZ25mY20rQlNRdjFJcDNDVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNIcnVaK0wrcFpGNkxWU3llMENVQWQzamZxU1NKaWFUSHVKQnhNU1BSVFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtFVzh0ck5vVlBKTXZYMWd3VjkwVVB0MWplZG9yN2RKQjA2VXV4TzFVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURNZ0R6MWl1VSszc0o5enFoelphNUl6QTgzRVIrYUwxMVVFcW02RWNtST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIwZlNhMGpheFlKODc5NHV6OWxxRXhRcEltMGZHbWVNV2xNWkc3LzF2RmkwbXJ6U1hBMjZ1YklVeGJTZjFFQlJwbG80VzhOT1J3SUlqc09yblVGRkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJSb0ttTXJNQ280T0xFdW8zUXc4ZGJ2OUQyelV4R25FMWR6K0V5OVRoTUEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuZlRhbVJKUFJrUzRWMHRkQmN4SUh3IiwicGhvbmVJZCI6ImQ4MzY1OTI5LTVkOWEtNGQ0OS04MTY1LWU2MTk5Yzg4ZDc1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRXRYS1dHZ0dUMDFkZTl1cUtLTUtZek9TZ0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkJSdmJJbWRvZkgxNXh3a1ROQ05pdHJwcVI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBaODlTNFBOIiwibWUiOnsiaWQiOiIyNzc4MTY3MzAyMjo1MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEciBDaGFuZGEiLCJsaWQiOiI1NTEwOTk2NzA5NTM1OjUyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmZHaDZvRkVJL292OE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZVNLcytPcXhTQ0V5N2ZLTEVyRWJQUUFicW1IdnBNdlA0NGloSHAwNGFRbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKzd6NU9IMkt0RnFIY1lneld4UWFGVXRFZlhQWFN4MmJhek5jR1Z0Um5NZ0hCVzJuRjVjZVRoZEtGL1Fta2wwNEJpUVFEZUcwV0U2cjZwbmdnVUJJQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImphenJPVWhUV3VvQW5Qbms5bllMZ2VhbFVYck91dmNlZlFVU0JtamRRWjljaUVkNFUwbW1UUThBOFV2bFZabE85MkNtT0tLTnBacnppTmNqZVUzcURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3ODE2NzMwMjI6NTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGtpclBqcXNVZ2hNdTN5aXhLeEd6MEFHNnBoNzZUTHorT0lvUjZkT0drSyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMTY3NDUzLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "27781673022",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["27635915524", "27781673022"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
