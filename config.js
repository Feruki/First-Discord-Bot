const { Client, Intents } = require('discord.js');

const client = new Client({ 
    intents: 
    [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MEMBERS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ],
    
    partials:
    [
        'MESSAGE',
        'CHANNEL',
        'REACTION',
    ]
});

const prefix = "f!";

const polak = [
    182129183139430400,
    245997280383991809,
    125535120194142208,
    417405769344876544
]


module.exports = {
    prefix,
    client,
    polak
}