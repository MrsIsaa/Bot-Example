//esse sera o comando para mostrar a skin completa de um usuário do minecraft (a conta tem que ser original para isso funcionar!)


module.exports.run = (client, message, args) => {

    const website = "https://mc-heads.net/body/" + args[0];
    const mencao = "<@" + message.author.id + ">"
    const emojiAnimated = "EMOJI QUE VOCÊ QUER QUE APAREÇA";// aqui você irca colocar algum emoji, para apereçer, recomendo algum do minecraft, para combinar mais, como pegar o emoji? coloque o emoji no discord, mas antes de enviar coloque uma "\" antes, assim fazendo com que ele mande algo parecido com isso "<:Minecraft:796540168345092146>", e com isso, você cola ali naquele local
  
    const embed = {
      "color": 15412247,
      "title": `${emojiAnimated} MCBody - ${args[0]} ${emojiAnimated}`,
      "description": `[Clique aqui](${website}) para baixar o corpo.`,
      "timestamp": new Date(),
      "image": {
        "url": website
      },
      "footer": {
        "icon_url": message.author.avatarURL,
        "text": `Requisitado por: ${message.author.tag}`
      }
    };
  
    if(args.length === 0) return message.channel.send(mencao + "| Sintaxe errada! Utilize `mcbody <Nick>`");
  
      message.channel.send(mencao, { embed });
    
   
    
  }
  
  module.exports.config = {
      name: 'mcbody',
      aliases: ['mcbody', 'body']
  }