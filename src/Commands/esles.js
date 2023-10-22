const Discord = require("discord.js")
module.exports = {
    conf: {
        aliases: ["esles"],
        name: "eşleş",
    },
    run: async (client, message, args) => {
        const esles = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId('kizesles')
                    .setLabel("Kız Birisi İle Eşleş")
                    .setEmoji("904403680449667122")
                    .setStyle(Discord.ButtonStyle.Primary),
                new Discord.ButtonBuilder()
                    .setCustomId('erkekesles')
                    .setLabel("Erkek Birisi İle Eşleş!")
                    .setEmoji("740684333370703923")
                    .setStyle(Discord.ButtonStyle.Danger)
            );
        let context = `Merhaba! Anonim sohbete hoş geldin! Aşağıdaki butonlardan birisini seçerek eşleşmeye başlayabilirsin! Doğru butonu seçerek eşleşmeye başla!`
        message.channel.send({ content: `${context}`, components: [esles] })
    }
};