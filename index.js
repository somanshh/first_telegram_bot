const { Telegraf } = require("telegraf");

const bot = new Telegraf("5999482095:AAF_Irnfi57pZNQWphplw9GESASNTHKj1Zw");

bot.start((ctx) =>
  ctx.reply("Welcome! \n you'll only the best Movies/Series ")
);
bot.command("who", Telegraf.reply(""));
bot.launch();
