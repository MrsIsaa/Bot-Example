module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - A musica foi parada pois não existe nenhum membro no canal de voz!`);

};