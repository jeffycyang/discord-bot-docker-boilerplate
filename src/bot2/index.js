const Discord = require('discord.io')
const auth = require('./auth.json')

const bot = new Discord.Client({ token: auth.token, autorun: true })

bot.on('ready', evt => console.log(`Logged in as: ${bot.username} - (${bot.id})`))

bot.on('message', (user, userID, channelID, message, evt) => {
  // You get the idea
})
