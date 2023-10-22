const { stShip } = require("../Aris/Schemas");
exports.execute = async (message) => {
    if (message.author.bot || !message.guild) return;
    let data = await stShip.findOne({ _id: message.author.id })
    if (!data) return;
    if (message.channel.id !== data.messsages) return
    if (client.channels.cache.get(data.gonderiChannel)) {
        if (message.content.toLowerCase() == ".bitir") return
        client.channels.cache.get(data.gonderiChannel).send({ content: `**Anonim:** ${message.content}` })
    }
};

exports.conf = {
    name: "messageCreate",
};