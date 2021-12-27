const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "support",
  aliases: ["supp"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Kr is One`)
    .setDescription(`
***<a:emoji_17:850611627321327617> OWNER BOT <@612774393537626137> <a:emoji_1:848805449155215391>***
<a:emoji_16:850611586921398283>
<a:emoji_29:850653075055050772>[YOUTUBE](https://youtube.com/channel/UCnt0XEJj4KDIprKL-k-lwIw)
<a:emoji_16:850611586921398283>
<:g_:850633528697159710> [GITHUB](https://github.com/xBlackMan69)
<a:emoji_16:850611586921398283>
[SERVER SUPPORT](https://discord.gg/KKCy6R7mUC)
<a:emoji_16:850611586921398283>
[INVITE](https://discord.com/oauth2/authorize?client_id=862259649066958868&permissions=70282305&scope=bot)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};