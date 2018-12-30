FROM node:8.9

RUN npm install pm2 -g

COPY src/ /usr/local/src/discord-bot/

WORKDIR /usr/local/src/discord-bot

RUN npm install

ENTRYPOINT [ "/usr/bin/npm", "run", "start" ]
