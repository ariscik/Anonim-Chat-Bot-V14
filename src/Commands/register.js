const Discord = require("discord.js")
module.exports = {
    conf: {
        aliases: ["test"],
        name: "test",
    },
    run: async (client, message, args) => {
        const esles = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId('kizkayit')
                    .setLabel("Kız Olarak Kaydol!")
                    .setEmoji("830411477424275476")
                    .setStyle(Discord.ButtonStyle.Primary),
                new Discord.ButtonBuilder()
                    .setCustomId('erkekkayit')
                    .setLabel("Erkek Olarak Kaydol!")
                    .setEmoji("830411545879642112")
                    .setStyle(Discord.ButtonStyle.Danger)
            );
        let context = `Merhaba! Anonim sohbet etmek için doğru yerdesin! Lütfen cinsiyetini doğru seç! Çünkü eşleşmelerin buna göre olacak!`
        message.channel.send({ content: `${context}`, components: [esles] })
    }
};