const { stShip, stStatus } = require("../Aris/Schemas");
const config = require("../../config")
let mapCik = new Map()
const Discord = require("discord.js")
exports.execute = async (interaction) => {
    if (interaction.customId === "kizesles") {
        let role = interaction.guild.roles.cache.get(config.womanRole)
        let random = role.members.filter(x => x.id !== interaction.member.id).random()
        let data = await stStatus.findOne({ _id: interaction.member.id })
        let data2 = await stStatus.findOne({ _id: random.id })
        if (data && data.status == true) return interaction.reply({ content: `Selam dostum aktif bir sohbetiniz olduğu için işlem iptal edildi!`, ephemeral: true })
        if (data2 && data2.status == true) random = role.members.filter(x => x.id !== interaction.member.id).random()

        await interaction.guild.channels.create({
            name: `anonim-sohbet`, 
            type: Discord.ChannelType.GuildText,
            permissionOverwrites: [
                { id: interaction.guild.id, deny: [Discord.PermissionsBitField.Flags.ViewChannel] },
                { id: interaction.member.id, allow: [Discord.PermissionsBitField.Flags.ViewChannel] }
            ]
        }).then(async channel => {
            await channel.send({ content: `<@${interaction.member.id}> Merhaba! Konuşma odanız açıldı! \`.bitir\` komutu ile konuşmayı bitirebilirsin!` });
            await stShip.findOneAndUpdate({ _id: random.id }, { $set: { time: Date.now(), gonderiChannel: channel.id } }, { upsert: true })
            await mapCik.set(interaction.member.id, {
                channel: channel.id
            })
        });
        await interaction.guild.channels.create({
            name:`anonim-sohbet`, 
            type: Discord.ChannelType.GuildText,
            permissionOverwrites: [
                { id: interaction.guild.id, deny: [Discord.PermissionsBitField.Flags.ViewChannel] },
                { id: `${random.id}`, allow: [Discord.PermissionsBitField.Flags.ViewChannel] }
            ]
        }).then(async channel => {
            await channel.send({ content: `<@${random.id}> Merhaba! Konuşma odanız açıldı! \`.bitir\` komutu ile konuşmayı bitirebilirsin!` });
            await stShip.findOneAndUpdate({ _id: interaction.member.id }, { $set: { time: Date.now(), gonderiChannel: channel.id } }, { upsert: true })
            await mapCik.set(random.id, {
                channel: channel.id
            })
        });
        interaction.reply({ content: `Merhaba! Kız bir üyemizle eşleştin! Senin odanı açmış bulunmaktayım! \`.bitir\` komutu ile konuşmayı bitirebilirsin!`, ephemeral: true })
        let shipci = mapCik.get(random.id)
        let shipci1 = mapCik.get(interaction.member.id)
        await stShip.findOneAndUpdate({ _id: random.id }, { $set: { messsages: shipci.channel, eslestigi: interaction.member.id } }, { upsert: true })
        await stShip.findOneAndUpdate({ _id: interaction.member.id }, { $set: { messsages: shipci1.channel, eslestigi: random.id } }, { upsert: true })
        await stStatus.findOneAndUpdate({ _id: random.id }, { $set: { status: true } }, { upsert: true })
        await stStatus.findOneAndUpdate({ _id: interaction.member.id }, { $set: { status: true } }, { upsert: true })
        await stShip.findOneAndUpdate({ _id: interaction.member.id }, { $inc: { eslesme: 1 } }, { upsert: true })
    }

    if (interaction.customId === "erkekesles") {
        let role = interaction.guild.roles.cache.get(config.manRole)
        let random = role.members.filter(x => x.id !== interaction.member.id).random()
        let data = await stStatus.findOne({ _id: interaction.member.id })
        let data2 = await stStatus.findOne({ _id: random.id })
        if (data && data.status == true) return interaction.reply({ content: `Selam dostum aktif bir sohbetiniz olduğu için işlem iptal edildi!`, ephemeral: true })
        if (data2 && data2.status == true) random = role.members.filter(x => x.id !== interaction.member.id).random()

        await interaction.guild.channels.create({
            name: `anonim-sohbet`, 
            type: Discord.ChannelType.GuildText,
            permissionOverwrites: [
                { id: interaction.guild.id, deny: [Discord.PermissionsBitField.Flags.ViewChannel] },
                { id: interaction.member.id, allow: [Discord.PermissionsBitField.Flags.ViewChannel] }
            ]
        }).then(async channel => {
            await channel.send({ content: `<@${interaction.member.id}> Merhaba! Konuşma odanız açıldı!` });
            await stShip.findOneAndUpdate({ _id: random.id }, { $set: { time: Date.now(), gonderiChannel: channel.id } }, { upsert: true })
            await mapCik.set(interaction.member.id, {
                channel: channel.id
            })
        });
        await interaction.guild.channels.create({
            name: `anonim-sohbet`,
            type: Discord.ChannelType.GuildText,
            permissionOverwrites: [
                { id: interaction.guild.id, deny: [Discord.PermissionsBitField.Flags.ViewChannel] },
                { id: `${random.id}`, allow: [Discord.PermissionsBitField.Flags.ViewChannel] }
            ]
        }).then(async channel => {
            await channel.send({ content: `<@${random.id}> Merhaba! Konuşma odanız açıldı!` });
            await stShip.findOneAndUpdate({ _id: interaction.member.id }, { $set: { time: Date.now(), gonderiChannel: channel.id } }, { upsert: true })
            await mapCik.set(random.id, {
                channel: channel.id
            })
        });
        interaction.reply({ content: `Merhaba! Erkek bir üyemizle eşleştin! Senin odanı açmış bulunmaktayım!`, ephemeral: true })
        let shipci = mapCik.get(random.id)
        let shipci1 = mapCik.get(interaction.member.id)
        await stShip.findOneAndUpdate({ _id: random.id }, { $set: { messsages: shipci.channel, eslestigi: interaction.member.id } }, { upsert: true })
        await stShip.findOneAndUpdate({ _id: interaction.member.id }, { $set: { messsages: shipci1.channel, eslestigi: random.id } }, { upsert: true })
        await stStatus.findOneAndUpdate({ _id: random.id }, { $set: { status: true } }, { upsert: true })
        await stStatus.findOneAndUpdate({ _id: interaction.member.id }, { $set: { status: true } }, { upsert: true })
        await stShip.findOneAndUpdate({ _id: interaction.member.id }, { $inc: { eslesme: 1 } }, { upsert: true })
    }

    if (interaction.customId === "erkekkayit") {
        interaction.reply({ content: `Merhaba! Sunucumuza erkek olarak kaydoldun! Eşleşirken dikkat et!`, ephemeral: true })
        await interaction.member.roles.add(config.manRole)
    }
    if (interaction.customId === "kizkayit") {
        interaction.reply({ content: `Merhaba! Sunucumuza kız olarak kaydoldun! Eşleşirken dikkat et!`, ephemeral: true })
        await interaction.member.roles.add(config.womanRole)
    }

};

exports.conf = {
    name: "interactionCreate",
};