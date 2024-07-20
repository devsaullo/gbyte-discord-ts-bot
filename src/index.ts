import { GatewayIntentBits } from "discord.js";
import { GbyteClient } from "./structures/app.js";

// Configure your properties; you can set them in your .env file.
export const app = new GbyteClient({
    appToken: process.env.BOT_GBYTE_TOKEN as string, //  
    flags: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds],
    clientId: process.env.BOT_GBYTE_CLIENT_ID as string,
    guildId: process.env.BOT_GBYTE_GUILD_ID as string
});

// Start you bot.
app.go();