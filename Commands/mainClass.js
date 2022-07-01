const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = async message => {
    const embed = new MessageEmbed()
        .setTitle("Select your main!")
        .setDescription("As it's your main, only one choice allowed")
        .setImage('https://i.imgur.com/VLEvEE4.png')
        .setColor('DARK_GREEN')
        .setThumbnail('https://i.imgur.com/oNIwyDo.png')
    const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('mainSelect')
                .setPlaceholder('Nothing selected')
                .addOptions([
                    {
                        label: 'Berserker',
                        description: 'Big Sword Guy',
                        value: '937011123780214814',
                    },
                    {
                        label: 'Paladin',
                        description: 'It\'s a support you dumbass',
                        value: '937011183016374312',
                    },
                    {
                        label: 'Gunlancer',
                        description: 'I have a gun.. i have a lance.. boom - Gunlancer',
                        value: '937011217053134889',
                    },
                    {
                        label: 'Striker',
                        description: 'Worse Wardancer',
                        value: '937011260409667584',
                    },
                    {
                        label: 'Wardancer',
                        description: 'Superior Striker',
                        value: '937011282408767518',
                    },
                    {
                        label: 'Scrapper',
                        description: 'Infighter is a better name',
                        value: '937011304177217576',
                    },
                    {
                        label: 'Soulfist',
                        description: 'So you are into fisting huh...',
                        value: '937011324557344778',
                    },
                    {
                        label: 'Gunslinger',
                        description: 'Picking a class, but can\'t decide on a weapon?',
                        value: '937011346879426600',
                    },
                    {
                        label: 'Artillerist',
                        description: 'Big boom',
                        value: '937011381339832370',
                    },
                    {
                        label: 'Deadeye',
                        description: 'Dante from DMC',
                        value: '937011404588855307',
                    },
                    {
                        label: 'Sharpshooter',
                        description: '\"Gunner\" but has a bow, ok.',
                        value: '937011425967243275',
                    },
                    {
                        label: 'Bard',
                        description: 'Harps are cool I guess',
                        value: '937011453486067713',
                    },
                    {
                        label: 'Sorceress',
                        description: 'Couldn\'t think of something funny',
                        value: '937011479176171560',
                    },
                    {
                        label: 'Shadowhunter',
                        description: 'Demon mommy step on me',
                        value: '937011511057068052',
                    },
                    {
                        label: 'Deathblade',
                        description: 'When 2 swords isn\'t enough',
                        value: '937011531957297273',
                    }
                ])
        );
    await message.channel.send({embeds: [embed], components: [row] });
}