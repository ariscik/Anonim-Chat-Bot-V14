const { Client, GatewayIntentBits, Events, Partials } = require("discord.js");
const { token } = require("./config");
const client = global.client = new Client({
    partials: [
      Partials.Message, // for message
      Partials.Channel, // for text channel
      Partials.GuildMember, // for guild member
      Partials.Reaction, // for message reaction
      Partials.GuildScheduledEvent, // for guild events
      Partials.User, // for discord user
      Partials.ThreadMember, // for thread member
    ],
    intents: [
      GatewayIntentBits.Guilds, // for guild related things
      GatewayIntentBits.GuildMembers, // for guild members related things
      GatewayIntentBits.GuildBans, // for manage guild bans
      GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
      GatewayIntentBits.GuildIntegrations, // for discord Integrations
      GatewayIntentBits.GuildWebhooks, // for discord webhooks
      GatewayIntentBits.GuildInvites, // for guild invite managing
      GatewayIntentBits.GuildVoiceStates, // for voice related things
      GatewayIntentBits.GuildPresences, // for user presence things
      GatewayIntentBits.GuildMessages, // for guild messages things
      GatewayIntentBits.GuildMessageReactions, // for message reactions things
      GatewayIntentBits.GuildMessageTyping, // for message typing things
      GatewayIntentBits.DirectMessages, // for dm messages
      GatewayIntentBits.DirectMessageReactions, // for dm message reaction
      GatewayIntentBits.DirectMessageTyping, // for dm message typinh
      GatewayIntentBits.MessageContent, // enable if you need message content things
    ],
  });
require("./src/Aris/Loader")
client.login(token).then(a => console.log(`${client.user.username} olarak girdi.`)).catch(() => { })
