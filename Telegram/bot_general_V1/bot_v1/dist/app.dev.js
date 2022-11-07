"use strict";

var bot_tok = require('./bot_tok');

var _require = require('telegraf'),
    Telegraf = _require.Telegraf;

var bot = new Telegraf(bot_tok.BOT_TOK);
bot.command('start', function (ctx) {
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, 'Olá. Escreva os sinais que você gostaria de enviar', {});
}); //let ticket = ;

bot.hears('taesa', function (ctx) {
  return ctx.reply('Cotação: 13');
});
bot.hears('oi', function (ctx) {
  return ctx.reply('Olá, como posso ajuda-lo(a):');
});
bot.command('quit', function _callee(ctx) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ctx.telegram.leaveChat(ctx.message.chat.id));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(ctx.leaveChat());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
bot.launch();