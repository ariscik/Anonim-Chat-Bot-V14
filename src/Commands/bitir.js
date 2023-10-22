const Discord = require("discord.js")
const { stShip,stStatus } = require("../Aris/Schemas")
module.exports = {
    conf: {
        aliases: ["bitir"],
        name: "bitir",
    },
    run: async (client, message, args) => {
        let data = await stShip.findOne({ _id: message.author.id })
        if (!data) return message.channel.send({ content: "Selam dostum bitirmen için verilerin yok aq" });
        if (client.channels.cache.get(data.gonderiChannel)) await client.channels.cache.get(data.gonderiChannel).delete().catch(() => { })
        if (client.channels.cache.get(data.messsages)) await client.channels.cache.get(data.messsages).delete().catch(() => { })
        setTimeout(async () => {
            await stStatus.findOneAndUpdate({ _id: data.eslestigi }, { $set: { status: false } }, { upsert: true })
            await stStatus.findOneAndUpdate({ _id: message.author.id }, { $set: { status: false } }, { upsert: true })
    
            await stShip.deleteMany({ _id: data.eslestigi })
            await stShip.deleteMany({ _id: message.author.id })
        }, 3000);
    }
};