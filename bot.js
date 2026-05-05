const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// IDs dos canais
const canalTermos = '1501135306366255134';
const canalDicas = '1501135727642153092';
const canalGarantia = '1501136075463196712';

client.once('ready', async () => {
  console.log(`✅ Bot online como ${client.user.tag}`);

  // ===== TERMOS =====
  const canal1 = await client.channels.fetch(canalTermos);
  if (canal1) {
    const embedTermos = new EmbedBuilder()
      .setTitle('📚 TERMOS')
      .setDescription(`
**Proibido**
Solicitar reembolso após uso do serviço/produto, exceto em caso de erro confirmado pela equipe.

**Compras e Trocas**
• Não realizamos reembolso após pagamento confirmado.
• Trocas aceitas até 10 minutos após entrega, com justificativa válida.
• Solicitações de troca exigem gravação completa da tela no momento da compra.
• Erros por uso incorreto são responsabilidade do cliente.

**Informações Importantes**
• Aguardar confirmação da equipe antes de solicitar troca.
• Não garantimos aprovação ou VBV.
• VPNs ou Proxies podem causar instabilidade.
• Prefira conexões seguras (4G/5G).
      `)
      .setColor('Red');

    canal1.send({ embeds: [embedTermos] });
  }

  // ===== DICAS =====
  const canal2 = await client.channels.fetch(canalDicas);
  if (canal2) {
    const embedDicas = new EmbedBuilder()
      .setTitle('🔎 Dicas')
      .setDescription(`
4G pode influenciar em um IP limpo e seguro!
Login bom/conta já usada antes!

Caso não tenha login bom, adquira ou crie com dados consistentes.

*Evite usar o mesmo cartão em vários lugares ao mesmo tempo, pode causar cancelamento.*

> Use material de qualidade para melhores resultados.
      `)
      .setColor('Blue');

    canal2.send({ embeds: [embedDicas] });
  }

  // ===== GARANTIA (ESSA NOVA) =====
  const canal3 = await client.channels.fetch(canalGarantia);
  if (canal3) {
    const embedGarantia = new EmbedBuilder()
      .setTitle('📜 TERMOS SALDO GARANTIDO')
      .setDescription(`
**Trocas**
• Só fazemos a troca se tiver DIE ou mensagem de saldo insuficiente.
• Para fazer a troca envie um vídeo mostrando claramente o erro ou a mensagem.
• Você deve mandar o vídeo antes de 10 minutos após a compra.
• Passou do prazo de 10m troca será recusada.
• Se não for mensagem de saldo insuficiente a troca será recusada.

**Lembrando**
• Não garantimos sua aprovação
• Não garantimos seu trampo
• Não garantimos seu esquema
• Se não cumprir com os termos a troca será recusada, não insista
      `)
      .setColor('DarkButNotBlack');

    canal3.send({ embeds: [embedGarantia] });
  }
});

client.login(process.env.TOKEN);
