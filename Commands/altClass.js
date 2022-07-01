const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = async message => {
    const embed = new MessageEmbed()
        .setTitle("Select your alt(s)!")
        .setDescription("You may pick as many as you want, up to 14!")
        .setImage('https://i.imgur.com/W1880Q8.png')
        .setColor('DARK_BLUE')
        .setThumbnail('https://i.imgur.com/xq3lLUj.png')
    const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('altSelect')
                .setPlaceholder('Nothing selected')
                .setMinValues(1)
                .setMaxValues(14)
                .addOptions([
                    {
                        label: 'Berserker',
                        description: 'Big Sword Guy',
                        value: '936248740417769582',
                    },
                    {
                        label: 'Paladin',
                        description: 'It\'s a support you dumbass',
                        value: '936249244124344400',
                    },
                    {
                        label: 'Gunlancer',
                        description: 'I have a gun.. i have a lance.. boom - Gunlancer',
                        value: '936249035751292928',
                    },
                    {
                        label: 'Striker',
                        description: 'Worse Wardancer',
                        value: '936249142991265843',
                    },
                    {
                        label: 'Wardancer',
                        description: 'Superior Striker',
                        value: '936249182216417380',
                    },
                    {
                        label: 'Scrapper',
                        description: 'Infighter is a better name',
                        value: '936249205327024149',
                    },
                    {
                        label: 'Soulfist',
                        description: 'So you are into fisting huh...',
                        value: '936249223073107998',
                    },
                    {
                        label: 'Gunslinger',
                        description: 'Picking a class, but can\'t decide on a weapon?',
                        value: '936249699583815720',
                    },
                    {
                        label: 'Artillerist',
                        description: 'Big boom',
                        value: '936249842592792596',
                    },
                    {
                        label: 'Deadeye',
                        description: 'Dante from DMC',
                        value: '936249871000825896',
                    },
                    {
                        label: 'Sharpshooter',
                        description: '\"Gunner\" but has a bow, ok.',
                        value: '936249878655406221',
                    },
                    {
                        label: 'Bard',
                        description: 'Harps are cool I guess',
                        value: '936249283299123200',
                    },
                    {
                        label: 'Sorceress',
                        description: 'Couldn\'t think of something funny',
                        value: '936249110594469969',
                    },
                    {
                        label: 'Shadowhunter',
                        description: 'Demon mommy step on me',
                        value: '936249298587381820',
                    },
                    {
                        label: 'Deathblade',
                        description: 'When 2 swords isn\'t enough',
                        value: '936249317436571660',
                    },
                ])
        );
    await message.channel.send({embeds: [embed], components: [row] });
}