const { Client } = require("discord.js");
const client = new Client();
const { token, link } = require("./config.json");

const setTitle = require("console-title");
const readline = require("readline");
const color = require("chalk");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

if (!token || !link){
    console.log(color.white('\n\n[') + color.red(' E ') + color.white(']') + color.gray("Token or link is not set! Fix this in config.json!"));
    setTimeout(() => process.exit(22), 100);
}

if (!link.includes("https://twitch.tv/")){
	console.clear()
        console.log(color.white('[') + color.red(' E ') + color.white(']') + color.gray("Link does not include https://twitch.tv/! Edit it in config.json!"));
        setTimeout(() => process.exit(22), 100);
}


client.on("ready", async () => {
	const status = await question(color.white('\n[') + color.yellow(' > ') + color.white(']') + color.gray(' Select what status you want to display (streaming, watching, playing, listening): '));
	const message = await question(color.white('[') + color.yellow(' > ') + color.white(']') + color.gray(' Select message what you want to display: '));
	const stat = await status.toLowerCase()

	setTitle("Custom Status | Setup");
	console.log(color.white('[') + color.cyan(' § ') + color.white(']') + color.gray(' Discord Nitro Generator made by') + color.white(' LnX') + color.gray(' | Licensed under') + color.white(' MIT') + color.gray(' License'));
	console.log(color.white('[') + color.cyan(' § ') + color.white(']') + color.gray(' You can follow me on Github:') + color.white(' https://github.com/lnxcz'));
	
	if (message.length >= 100) {
		console.log(color.white('\n[') + color.red(' E ') + color.white(']') + color.gray(" Message is longer than 100 characters! Try again!"));
		setTimeout(() => process.exit(22), 100);
	} else {
		switch (stat) {
			case "streaming":
				setTitle(`Displaying status for ${client.user.tag} | Streaming ${message}`);
				console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Streaming ") + color.white(message));
				client.user.setPresence({
					game: {
						name: message,
						type: "STREAMING",
						url: link
					}
				})
			case "listening":
				setTitle(`Displaying status for ${client.user.tag} | Listening ${message}`);
				console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Listening ") + color.white(message));
				client.user.setPresence({
					game: {
						name: message,
						type: "LISTENING"
					}
				});
			case: "playing":
				setTitle(`Displaying status for ${client.user.tag} | Playing ${message}`);
				console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Playing ") + color.white(message));
				client.user.setPresence({
					game: {
						name: message,
						type: "PLAYING"
					}
				});
			case "watching":
				setTitle(`Displaying status for ${client.user.tag} | Watching ${message}`);
				console.log(color.white('\n[') + color.yellow(' ? ') + color.white(']') + color.gray(` Displaying status for `) + color.white(client.user.tag) + color.gray(" | Watching ") + color.white(message));
				client.user.setPresence({
					game: {
						name: message,
						type: "WATCHING"
					}
				});
			default:
				console.log(color.white('\n[') + color.red(' E ') + color.white(']') + color.gray(" Status is misspelled! Try again!"));
				process.exit
				setTimeout(() => process.exit(22), 100);
				
		}
	}
}); client.login(token)

function question(string) {
    return new Promise((res) => {
        rl.question(string, (answer) => res(answer))
    })
}
