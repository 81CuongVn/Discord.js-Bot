const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to spank them");
    if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
    if(message.mentions.users.first().id === customisation.ownerid) return message.reply('You can\'t spank my Dev baka.:facepalm: He will spank your ass off >:3');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, you got spanked in da butt by ${message.author.username} >:3`)
    .setImage(body.url)
    .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'spank',
    description: 'Spanks someone xD',
    category: "Action",
    usage: 'spank'
  };
