const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on('ready', () => {
  console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
  if (message.content === '/quote') {
    message.reply('Quote of the Day: Everyone tells me, I changed. I shit my pants I had to change')
  }
})

client.login(process.env.TOKEN)