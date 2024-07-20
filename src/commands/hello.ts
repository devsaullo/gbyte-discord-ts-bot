import chalk from 'chalk';
import { CommandInteraction } from 'discord.js';

export default {
    data: {
        name: 'hello',
        description: 'You reply with a brief greeting.',
    },
    async execute(i: CommandInteraction) {
        try {
            await i.reply({ embeds: [{ description: `Hello, my friend **${i.user.displayName}**.` }] });
        } catch (error) {
            await i.reply({ embeds: [{ description: 'Sorry, occured unknown error.' }] })
            console.error(chalk.redBright(`Error Detected in Interaction /${chalk.whiteBright(this.data.name).toUpperCase()}: `), chalk.bgRed(error))
        }
    },

};
