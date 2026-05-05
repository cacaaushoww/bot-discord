const express = require("express");
const app = express();

// servidor pro Render
app.get("/", (req, res) => {
  res.send("Bot rodando!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor web ativo");
});

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
  console.log(`Bot online: ${client.user.tag}`);

  const canal = client.channels.cache.get('1501135306366255134');

  if (!canal) return;

  const mensagens = await canal.messages.fetch({ limit: 10 });
  const jaExiste = mensagens.find(msg => msg.author.id === client.user.id);

  if (jaExiste) return;

  const embed = new EmbedBuilder()
    .setTitle('📜 TERMOS')
    .setDescription(`
**Proibido**
Solicitar reembolso após uso do serviço/produto.

**Compras e Trocas**
• Não realizamos reembolso após pagamento confirmado.
• Trocas aceitas até 10 minutos após entrega.
• Solicitações exigem gravação da tela.
• Erros por uso incorreto são responsabilidade do cliente.

**Informações Importantes**
• Aguarde confirmação da equipe.
• Não garantimos aprovação ou VBV.
• VPNs podem causar instabilidade.
• Prefira conexões seguras (4G ou 5G).
    `)
    .setColor('Red');

  canal.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);
