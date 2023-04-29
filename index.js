const {client, Client} = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const {Configuration, OpenAIApi} = require("openai");
require("dotenv").config();

const client = new Client();
client.on("qr", (qr)=>{
    qrcode.generate(qr,{small:true});
});

client.on("ready",()=>{
    console.log("Client is ready");
})