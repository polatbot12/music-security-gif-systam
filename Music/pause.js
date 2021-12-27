const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
module.exports = {
  name: "pause",
  aliases: ['pe'],
  description: "(pe)Pause the currently playing music",
  cooldown: 5,
  edesc: `Type this command to pause the Song!\nUsage: ${PREFIX}pause`,
  execute(message) {
    //If not in a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message, "There is nothing playing").catch(console.error);
    //If not in the same channel return
    if (!canModifyQueue(message.member)) return;
    //If its playing
    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor("#ff0000")
      .setAuthor(`${message.author.username} paused the music.`, "https://cdn.discordapp.com/attachments/822637229297238026/833218301542924308/20210418_084342.png")
      //react with approve emoji
      message.react("<:2_:863362568801222656>")
      //return message
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
};
