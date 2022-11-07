
var bot_tok = require('./bot_tok');

const { Telegraf } = require('telegraf');

const bot = new Telegraf(bot_tok.BOT_TOK);

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Olá. Escreva os sinais que você gostaria de enviar',{

    })
})

//let ticket = ;

bot.hears('taesa', (ctx) => ctx.reply('Cotação: 13'));

bot.hears('oi', (ctx) => ctx.reply('Olá, como posso ajuda-lo(a):'));

bot.command('quit', async (ctx) => {

    await ctx.telegram.leaveChat(ctx.message.chat.id);

    await ctx.leaveChat();
})

bot.launch();