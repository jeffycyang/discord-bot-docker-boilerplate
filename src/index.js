const Discord = require('discord.io')
const auth = require('./auth.json')

// Initialize Discord Bot:
const bot = new Discord.Client({ token: auth.token, autorun: true })

bot.on('ready', evt => console.log(`Logged in as: ${bot.username} - (${bot.id})`))

// Note: async callback onMessage for async APIs
bot.on('message', async (user, userID, channelID, message, evt) => {

  let reply

  // Bot commands (commands start with '!'):
  if (message.substring(0, 1) === '!') {
    let args = message.substring(1).split(' ')

    // Command:
    const cmd = args[0]

    // Sub-command arguments:
    args = args.splice(1)

    // Commands:
    switch(cmd) {

      case 'ping':
        reply = 'pong!'
        break

      // add additional commands
    }
  }

  // Send reply:
  if (reply) bot.sendMessage({ to: channelID, message: reply })
})
