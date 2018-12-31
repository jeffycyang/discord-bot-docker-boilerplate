# Docker Discord bot boilerplate

Bare-bones boilerplate for running multiple Node.js Discord bots with Docker

## Getting Started

Replace `DISCORD_BOT_#_TOKEN` with the respective discord bot token in `auth.json` within each bots directory in `src` ([Creating a Discord Bot & Getting a Token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token))

Have Docker installed, then run

```
docker build -t discord-bots . && docker run -d discord-bots
```
