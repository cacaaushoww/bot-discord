const {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot online: ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {

  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === 'comprar') {

      const botao = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId('comprar_btn')
          .setLabel('🛒 Comprar')
          .setStyle(ButtonStyle.Success)
      );

      await interaction.reply({
        content: "Clique no botão para comprar:",
        components: [botao]
      });
    }
  }

  if (interaction.isButton()) {
    if (interaction.customId === 'comprar_btn') {

      await interaction.reply("🛒 Pedido criado! Aguardando pagamento...");

      setTimeout(async () => {
        await interaction.followUp("✅ Pagamento aprovado!");
        await interaction.followUp("📦 Produto: TESTE-123");
      }, 5000);
    }
  }

});

client.login(process.env.TOKEN);