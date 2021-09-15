import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })

client.on('ready',() => {
    console.log(`${client.user?.username} is online!`);
  const arrayOfStatus = [
    `Chào mừng bạn đến SweetieTG`,
    `Tigon in your area <3`,
  ]

  client.user?.setStatus("idle")
  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user?.setActivity(status, { type: "WATCHING"});
    index++;
  },5000);
})

  // Listen for new messages
  client.on('messageCreate', (msg) => {
    if (msg.content === 'hello') {
      msg.reply({
        content: 'Hé lô',
      })
    }
  })

  client.login(process.env.TOKEN)