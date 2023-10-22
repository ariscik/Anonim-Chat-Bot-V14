const { prefixs } = require("../../config");
exports.execute = async (message) => {
    if (message.author.bot || !message.guild) return;
    let client = message.client;
    let prefix = prefixs.find(p => message.content.toLowerCase().startsWith(p));
    if (!prefix) return;
    let args = message.content.split(" ").slice(1);
    let command = message.content.toLowerCase().split(" ")[0].slice(prefix.length);
    let cmd = client.commands.get(command) || client.aliases.get(command);
    if (cmd) {
        cmd.run(client, message, args);
    }
};

exports.conf = {
    name: "messageCreate",
};