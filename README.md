# Docker Discord bot boilerplate

Bare-bones boilerplate for a Node.js Discord bot with Docker - responds with a ping/pong

## Getting Started

Replace `YOUR_DISCORD_BOT_TOKEN` with, well, your discord bot token in `src/auth.json`

Have Docker installed, then run

```
docker build -t discord-bot . && docker run -d discord-bot
```
