# Docker Discord bot boilerplate

Bare-bones boilerplate for running multiple Node.js Discord bots in a single Docker container

## Getting Started

Replace `DISCORD_BOT_#_TOKEN` with the respective discord bot token in `auth.json` within each bots directory in `src` ([Creating a Discord Bot & Getting a Token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token))

Have Docker installed, then run

```
docker build -t discord-bots . && docker run -d discord-bots
```

Add additional bots by creating a directory in `src` like the example for `bot1` and `bot2`

If you're getting the error `executable file not found in $PATH`, you may need to make `start` executable with `chmod +x start`
