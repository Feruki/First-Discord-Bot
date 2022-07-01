const { client, prefix } = require('./config');
const { number } = require('@hikyu/random');
var tokenReal;


client.on('ready', () => {
    console.log('Frki-Chan on duty (ur dumb)');
})

client.on('messageCreate', async message => {
    //? Making sure the bot doesn't trigger on it's own messages
    if(message.author.bot) return;

    //? Has a 1% chance on every message to reply with an insult, 57 is just a random number pick your favourite
    switch(number(1, 100)) {
        case 57:
            require('./Events/insult')(message);
            break;
        default:
            break;
    }

    //? Checking if the message is a bot command
    if(message.content.startsWith(prefix)) {
        //? Removes the prefix from the message, then splits it for the ban, kick and timeout commands
        let msg = message.content.slice(2).toLowerCase().split(' ');
        //* msg[0] = name of the command        
        switch(msg[0]) {
            case 'mainclass':
                require('./Commands/mainClass')(message);
                break;
            case 'altclass':
                require('./Commands/altClass')(message);
                break;
            case 'ban':
                //? Only if you have the permissions to ban
                if(message.member.permissions.has('BAN_MEMBERS')) {
                    //! To ban someone you have to mention them reading that gives <!@USERID>, slicing so you are left with only the ID
                    let banU = message.guild.members.cache.get(msg[1].slice(3, msg[1].length-1));
                    //? Supplying days is optional, hence the 2 different start points
                    let reason = isNaN(msg[2]) ? msg.slice(2, msg.length).join(' ') : msg.slice(3, msg.length).join(' ');
                    // If the 3rd position in msg is a number it's "days", if not then it's just defaulted to 0
                    let days = isNaN(msg[2]) ? 0 : msg[2];

                    //? Undefined happens if you don't mention the user in the command message, moderatable means not the owner - bot crashes otherwise
                    if(banU != undefined && banU.moderatable) {
                        banU.ban({ days: days, reason: reason });
                        message.channel.send({ embeds: [{
                            description: `✅ **${banU.user.tag}** was banned | *${reason}*`,
                            color: 'GREEN'
                        }]});
                    } else {
                        message.channel.send({embeds: [{
                            description: `❌ I can't find user ${msg[1]}`,
                            color: 'RED'
                        }]});
                    }      
                } else {
                    message.reply('You don\'t have permissions to use this command').then(msg => { setTimeout(() => msg.delete(), 5000) });
                }                
                break;
            case 'kick':
                if(message.member.permissions.has('KICK_MEMBERS')) {
                    let kickU = message.guild.members.cache.get(msg[1].slice(3, msg[1].length-1)); 
                    let reason = msg.slice(2, msg.length).join(' ');

                    if(kickU != undefined && kickU.moderatable) {
                        kickU.kick(reason);
                        message.channel.send({ embeds: [{
                            description: `✅ **${kickU.user.tag}** was kicked | *${reason}*`,
                            color: 'GREEN'
                        }]});
                    } else {
                        message.channel.send({embeds: [{
                            description: `❌ I can't find user ${msg[1]}`,
                            color: 'RED'
                        }]});
                    } 
                } else {
                    message.reply('You don\'t have permissions to use this command').then(msg => { setTimeout(() => msg.delete(), 5000) });
                }
                break;
            case 'to':
                if(message.member.permissions.has('MODERATE_MEMBERS')) {
                    let timeoutU = message.guild.members.cache.get(msg[1].slice(3, msg[1].length-1));
                    let reason = msg.slice(3, msg.length).join(' ');

                    if(timeoutU != undefined && timeoutU.moderatable) {
                        timeoutU.timeout(msg[2] * 60000, reason);
                        if(msg[2] > 0) {
                            message.channel.send({ embeds: [{
                                description: `✅ **${timeoutU.user.tag}** was timed out for ${msg[2]} minutes | *${reason}*`,
                                color: 'GREEN'
                            }]});
                        } else {
                            message.channel.send({ embeds: [{
                                description: `✅ **${timeoutU.user.tag}** timeout was removed | *${reason}*`,
                                color: 'GREEN'
                            }]});
                        }
                    } else {
                        message.channel.send({embeds: [{
                            description: `❌ I can't find user ${msg[1]}`,
                            color: 'RED'
                        }]});
                    }
                } else {
                    message.reply('You don\'t have permissions to use this command').then(msg => { setTimeout(() => msg.delete(), 5000) });
                }
                break;
            default:
                message.reply('Not a command');
                break;
        }
    }

    //? If the bot is mentioned and called a slut, it will randomly timeout that user. From 1 second up to 5 minutes.
    if(message.content.includes('<@!935811443058688010>') && message.content.includes('slut')) {
        //? Just in case the server owner does it, bot would crash otherwise
        if(message.member.moderatable) {
            message.member.timeout(1000 * number(1, 300), 'Don\'t call me slutty');
        } else {
            message.reply('No u');
        }     
    }
});

client.on('interactionCreate', async interaction => {
    //? Making sure the bot only triggers on select menus
    if(!interaction.isSelectMenu()) return;


    //? Checking for my two selectmenu IDs to call the specific function
    if(interaction.customId === 'altSelect' || interaction.customId === 'mainSelect')
        require('./Events/interactionRoles')(interaction, interaction.member);  
});

client.login(tokenReal);