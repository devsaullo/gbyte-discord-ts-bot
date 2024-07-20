import chalk from 'chalk';
import { CommandInteraction } from 'discord.js';

export default {
    data: {
        name: 'ping',
        description: 'Reply to you with the current ping of the application.',
    },
    async execute(i: CommandInteraction) {
        try {
            await i.reply({embeds: [{description: `Pong! response time in **${i.client.ws.ping}ms**.`}]});
        } catch (error) {
            console.error(chalk.redBright(`Error detected in interaction /${chalk.whiteBright(this.data.name).toUpperCase()}: `), chalk.bgRed(error))
        }
    },
};
