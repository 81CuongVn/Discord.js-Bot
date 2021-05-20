const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/ngif");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, Heres your Neko Gif`)
    .setImage(body.url) 
    .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
exports.help = {
    name: 'ngif',
    description: 'Neko Gifs OwO',
    category: "Fun",
    usage: 'ngif'
};
