const { activity } = require("../../config");
exports.execute = async (client) => {
    client.user.setActivity({
        name: `${activity[1]}`,
        type: "STREAMING",
        url: "https://twitch.tv/arislesnar",
    });

    try {
        const promises = client.guilds.cache.map(guild => {
            if (guild.available) return guild.channels.fetch();
            return Promise.resolve();
        });
        await Promise.all(promises);
        console.log(`Kanal verileri çekildi!`);
    } catch (err) {
        console.log(`Kanal verileri alınamadı. (${client.user.tag})`);
    }

    try {
        const promises = client.guilds.cache.map(guild => {
            if (guild.available) return guild.roles.fetch();
            return Promise.resolve();
        });
        await Promise.all(promises);
        console.log(`Rol verileri çekildi!`);
    } catch (err) {
        console.log(`Rol verileri alınamadı. (${client.user.tag})`);
    }

    try {
        const promises = client.guilds.cache.map(guild => {
            if (guild.available) return guild.members.fetch();
            return Promise.resolve();
        });
        await Promise.all(promises);
        console.log(`Member verileri çekildi!`);
    } catch (err) {
        console.log(`Member verileri alınamadı. (${client.user.tag})`);
    }

};
exports.conf = {
    name: "ready"
};