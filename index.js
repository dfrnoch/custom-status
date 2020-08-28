const Discord = require("discord.js");
var setTitle = require('console-title');
const readline = require("readline");
var color = require("chalk");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new Discord.Client();
const {token} = require("./config.json");
const {link} = require("./config.json");
if(!token){
    console.log(color.white('\n\n[') + color.red(' E ') + color.white(']') + color.gray("Token is not set! Edit it in config.json!"));
    setTimeout((function() {
        return process.exit(22);
    }), 100);}
if(!link){
        console.log(color.white('\n\n[') + color.red(' E ') + color.white(']') + color.gray("Link is not set! Edit it in config.json!"));
        setTimeout((function() {
            return process.exit(22);
        }), 100);}
if(!link.includes("https://twitch.tv/")){
        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log(color.white('[') + color.red(' E ') + color.white(']') + color.gray("Link does not include https://twitch.tv/! Edit it in config.json!"));
        setTimeout((function() {
            return process.exit(22);
        }), 100);}


client.on('ready', async() => {
	setTitle("Custom Status | Setup");
    console.log(color.white('[') + color.cyan(' § ') + color.white(']') + color.gray(' Discord Nitro Generator made by') + color.white(' LnX') + color.gray(' | Licensed under') + color.white(' MIT') + color.gray(' License'));
    console.log(color.white('[') + color.cyan(' § ') + color.white(']') + color.gray(' You can follow me on Github:') + color.white(' https://github.com/lnxcz'));
let status = await question(color.white('\n[') + color.yellow(' > ') + color.white(']') + color.gray(' Select what status you want to display (streaming, watching, playing, listening): '));
let message = await question(color.white('[') + color.yellow(' > ') + color.white(']') + color.gray(' Select message what you want to display: '));
var stat = await status.toLowerCase()

if(message.length >= 100){
    console.log(color.white('\n[') + color.red(' E ') + color.white(']') + color.gray(" Message is longer than 100 characters! Try again!"));
    setTimeout((function() {
        return process.exit(22);
    }), 100);

}else if(stat === "streaming"){
    setTitle(`Displaying status for ${client.user.tag} | Streaming ${message}`);
    console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Streaming ") + color.white(message));
    client.user.setPresence({
        game: {
            name: message,
            type: "STREAMING",
            url: link
        }
    })}else if(stat === "listening"){
        setTitle(`Displaying status for ${client.user.tag} | Listening ${message}`);
        console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Listening ") + color.white(message));
        client.user.setPresence({
            game: {
                name: message,
                type: "LISTENING",
            }
        });}else if(stat === "playing"){
            setTitle(`Displaying status for ${client.user.tag} | Playing ${message}`);
            console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Playing ") + color.white(message));
            client.user.setPresence({
                game: {
                    name: message,
                    type: "PLAYING",
                }
            });}else if(stat === "watching"){
                setTitle(`Displaying status for ${client.user.tag} | Watching ${message}`);
                console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Watching ") + color.white(message));
                client.user.setPresence({
                    game: {
                        name: message,
                        type: "WATCHING",
                    }
                });}else{
                    console.log(color.white('\n[') + color.red(' E ') + color.white(']') + color.gray(" Status is misspelled! Try again!"));
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
