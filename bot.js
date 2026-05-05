client.once('ready', async () => {
  console.log(`Bot online: ${client.user.tag}`);

  const { EmbedBuilder } = require('discord.js');

  // =====================
  // 📜 CANAL TERMOS
  // =====================
  const canalTermos = client.channels.cache.get('1501135306366255134');

  if (canalTermos) {
    const mensagens = await canalTermos.messages.fetch({ limit: 10 });
    const jaExiste = mensagens.find(msg => msg.author.id === client.user.id);

    if (!jaExiste) {
      const embedTermos = new EmbedBuilder()
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

      await canalTermos.send({ embeds: [embedTermos] });
    }
  }

  // =====================
  // 🔎 CANAL DICAS
  // =====================
  const canalDicas = client.channels.cache.get('1501135727642153092');

  if (canalDicas) {
    const mensagens = await canalDicas.messages.fetch({ limit: 10 });
    const jaExiste = mensagens.find(msg => msg.author.id === client.user.id);

    if (!jaExiste) {
      const embedDicas = new EmbedBuilder()
        .setTitle('🔎 Dicas')
        .setDescription(`
4G pode influenciar em um IP LIMPO e seguro!
Login bom/conta já usada antes!

Caso não tenha login bom, adquira ou crie com dados consistentes.

━━━━━━━━━━━━━━

• Evite usar o cartão várias vezes antes da aprovação
• Usar em muitos lugares pode causar cancelamento

━━━━━━━━━━━━━━

*Pegue sempre material de qualidade aqui no servidor!*
        `)
        .setColor('Red');

      await canalDicas.send({ embeds: [embedDicas] });
    }
  }

});
