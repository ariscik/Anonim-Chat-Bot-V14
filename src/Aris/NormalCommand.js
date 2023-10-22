const client = global.client
const { Collection } = require("discord.js")
const chillout = require("chillout");
const path = require("path");
const readdirRecursive = require("recursive-readdir");
const { makeSureFolderExists } = require("stuffs");
client.commands = new Collection()
client.aliases = new Collection()
async function loadr() {
    let commandsPath = path.resolve("./src/Commands");
    await makeSureFolderExists(commandsPath);
    let eventsPath = path.resolve("./src/Events");
    await makeSureFolderExists(eventsPath);

    let loadStart = Date.now();
    let commandFiles = await readdirRecursive(commandsPath);
    let eventFiles = await readdirRecursive(eventsPath);

    commandFiles = commandFiles.filter(i => {
        let state = path.basename(i).startsWith("-");
        if (state) console.warn(`[UYARI] "${i}" dosyası tire ile başladığı için liste dışı bırakıldı.`);
        return !state;
    });

    await chillout.forEach(commandFiles, (commandFile) => {
        let start = Date.now();
        let command = require(commandFile);

        client.commands.set(command.conf.name, command);

        if (command.conf.aliases && command.conf.aliases.length > 0) {
            command.conf.aliases.forEach(a => {
                client.aliases.set(a, command);
            })
        }
    });

    eventFiles = eventFiles.filter(i => {
        let state = path.basename(i).startsWith("-");
        if (state) console.warn(`[UYARI] "${i}" dosyası tire ile başladığı için liste dışı bırakıldı.`);
        return !state;
    });

    await chillout.forEach(eventFiles, (eventFile) => {
        let event = require(eventFile);
        if (event.conf && event.conf.name == "ready") {
            client.on(event.conf.name, () => event.execute(client));
        } else client.on(event.conf.name, event.execute);
    });


    commandFiles = 0;
    eventFiles = 0;
    loadStart = 0;
}
loadr()
