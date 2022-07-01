const axios = require('axios').default;
const { number } = require('@hikyu/random');
const { translate } = require('bing-translate-api');
const { polak } = require('../config');

module.exports = async message => {
    //? Get insults via axios (Multiple APIs trying to avoid duplicates)
    let insult = [
        await fetch('https://insult.mattbas.org/api/insult'),
        await fetch('https://evilinsult.com/generate_insult.php?lang=en'),
    ]

    //? Randomly pick which APIs insult we're using, -1 at the end because the number is getting used as an index
    let insultApi = number(1, insult.length) - 1;

    //? Translate insult if correct user
    if(polak.includes(message.author.id)) {
        switch(number(1, 20)) {
            case 13:
                insult[insultApi] = await translateTo(insult[insultApi], 'pl');
                break;
            default:
                break;
        }  
    }
        

    //? Send insult
    message.reply(insult[insultApi]);

    //? With a 4% chance it times out the user (The 7 is just a random number, pick your favourite)
    if(number(1, 25) == 7) {
        if(message.member.moderatable) {
            message.member.timeout(5000, "Bad Luck");
        }
        else {
            console.log('Cannot timeout user with higher permission');
        }
    }
}

async function fetch(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}
async function translateTo(text, to) {
    return new Promise((resolve, reject) => {
        translate(text, null, to, true).then(res => {
            resolve(res.translation);
        }).catch(err => {
            reject(err);
        });
    });
}