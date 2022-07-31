# funny-message-appender-bot

A Discord bot that simply repeats a message, and that adds a phrase to that message.

### Installation
Clone the repository: 

```
git clone https://github.com/mistertfy64/funny-message-appender-bot
```

Install required npm modules:

```
npm i
```

Create a file named `.env`, then paste your Discord bot token into the file:

```
touch .env && echo "DISCORD_BOT_TOKEN=(discord bot token)" >> .env
```


### Configuration

Write the **Discord User IDs** of the operators (the person/people who can control the bot) and the targets (the person/people that will be affected by the bot)

You can also write custom conditions.

### Running

Start the bot:

```
node index.js
```

That's it!
