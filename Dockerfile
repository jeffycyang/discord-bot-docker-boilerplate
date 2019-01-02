FROM node:8.9

RUN npm install pm2 -g

RUN pm2 update

RUN npm install https://github.com/woor/discord.io/tarball/gateway_v6 -g

COPY start /usr/local/bin

COPY src/ /usr/local/src/bots/

# WORKDIR /usr/local/src/bots

ENTRYPOINT [ "start" ]
