const Discord = require("discord.js");
const axios = require('axios').default;
var setTitle = require('console-title');
const readline = require("readline")
var center = require('center-align');
var colors = require("colors")
const notifier = require('node-notifier');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new Discord.Client();
const {token} = require("./config.json");
const {link} = require("./config.json");
if(!token){
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(center("Token is not set! Edit it in config.json!".brightRed));
    setTimeout((function() {
        return process.exit(22);
    }), 100);}
if(!link){
        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log(center("Link is not set! Edit it in config.json!".brightRed));
        setTimeout((function() {
            return process.exit(22);
        }), 100);}
if(!link.includes("https://twitch.tv/")){
        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log(center("Link does not include https://twitch.tv/! Edit it in config.json!".brightRed));
        setTimeout((function() {
            return process.exit(22);
        }), 100);}
client.on('ready', async() => {
	setTitle("Custom Status | Setup");
	console.log(" ");
	console.log(" ");
	console.log(center(`               ╔═╗ ╔╦╗ ╔═╗ ╔╦╗ ╦ ╦ ╔═╗`.brightGreen, 112));
	console.log(center(`               ╚═╗  ║  ╠═║  ║  ║ ║ ╚═╗`.gray, 112));
    console.log(center(`               ╚═╝  ╩  ╩ ╩  ╩  ╚═╝ ╚═╝`.white, 112));
    console.log(center(`
    ╦══════════════════════════════╦
    ║                              ║
    ║   Custom Status displayer.   ║
    ║       Made by lnx#0069       ║
    ║                              ║
    ╩══════════════════════════════╩
    `.brightGreen, 112));

console.log(" ");
console.log(" ");
let status = await question(('- Select what status you want to display (streaming, watching, playing, listening):'.brightGreen));
let message = await question(('- Select message what you want to display:'.brightGreen));
var stat = await status.toLowerCase()

if(message.length >= 100){
    console.log(" ");
    console.log("Error: Message is longer than 100 characters! Try again!".brightRed);
    setTimeout((function() {
        return process.exit(22);
    }), 100);
}else if(stat === "streaming"){
    setTitle(`Displaying status for ${client.user.tag} | Streaming ${message}`);
    console.log(" ")
    console.log(`Displaying status for ${client.user.tag} | Streaming ${message}`.bgGreen);
    client.user.setPresence({
        game: {
            name: message,
            type: "STREAMING",
            url: link
        }
    })}else if(stat === "listening"){
        setTitle(`Displaying status for ${client.user.tag} | Listening ${message}`);
        console.log(" ")
        console.log(`Displaying status for ${client.user.tag} | Listening ${message}`.bgGreen);
        client.user.setPresence({
            game: {
                name: message,
                type: "LISTENING",
            }
        });}else if(stat === "playing"){
            setTitle(`Displaying status for ${client.user.tag} | Playing ${message}`);
            console.log(" ")
            console.log(`Displaying status for ${client.user.tag} | Playing ${message}`.bgGreen);
            client.user.setPresence({
                game: {
                    name: message,
                    type: "PLAYING",
                }
            });}else if(stat === "watching"){
                setTitle(`Displaying status for ${client.user.tag} | Watching ${message}`);
                console.log(" ")
                console.log(`Displaying status for ${client.user.tag} | Watching ${message}`.bgGreen);
                client.user.setPresence({
                    game: {
                        name: message,
                        type: "WATCHING",
                    }
                });}else{
                    console.log(" ");
                    console.log("Error: Status is misspelled! Try again!".brightRed);
                    process.exit
                    setTimeout((function() {
                        return process.exit(22);
                    }), 100);
                }
})
client.login(token)

function question(string) {
    return new Promise((res) => {
        rl.question(string, (answer) => res(answer))
    })
}