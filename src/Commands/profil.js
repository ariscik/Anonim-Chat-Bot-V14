const Discord = require("discord.js")
const { stShip,stStatus } = require("../Aris/Schemas")
module.exports = {
    conf: {
        aliases: ["profil","me"],
        name: "profil",
    },
    run: async (client, message, args) => {
        let data = await stShip.findOne({ _id: message.author.id })
        message.channel.send({ embeds: [new Discord.EmbedBuilder().setDescription(`
Merhaba ${message.author}! Anonim profiline hoş geldin! Bu profilde sunucu içerisinde yaptığın geniş kapsamlı bilgilere ulaşabilirsin!

<a:parti:934384974642151445> Toplam eşleşme sayın : \`${data ? Math.floor(parseInt(data.eslesme)) : 0}\`

Toplam aldığın beğeni sayın : **YAKINDA**

Rozetlerin : **YAKINDA**
        `)]})

    }
};