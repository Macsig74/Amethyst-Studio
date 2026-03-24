"use server"

export async function sendToDiscord(formData: { name: string; email: string; message: string; recipient: string }) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Missing DISCORD_WEBHOOK_URL environment variable.");
    return { error: "Submission failed: Webhook not configured" };
  }

  const payload = {
    username: "Portfolio Feedback",
    avatar_url: "https://github.com/Macsig74.png", // Using Macsig's avatar as the bot avatar
    embeds: [{
      title: `📬 New Message for ${formData.recipient}`,
      color: 8343039, // Purple (matches text-purple-800 context)
      fields: [
        {
          name: "From",
          value: `**${formData.name}**`,
          inline: true
        },
        {
          name: "Email",
          value: formData.email,
          inline: true
        },
        {
          name: "To",
          value: formData.recipient,
          inline: true
        },
        {
          name: "Message",
          value: formData.message
        }
      ],
      footer: {
        text: "Portfolio In-bound Contact Form",
        icon_url: "https://nextjs.org/favicon.ico"
      },
      timestamp: new Date().toISOString()
    }]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Discord API responded with status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending to Discord:", error);
    return { error: "Failed to send message to Discord." };
  }
}
