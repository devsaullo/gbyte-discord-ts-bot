import { Events, CommandInteraction } from 'discord.js';
import { GbyteClient } from '../structures/app.js';
import chalk from 'chalk';

export default {
    name: Events.InteractionCreate,
    once: false,
    async execute(app: GbyteClient, i: CommandInteraction) {
        if (!i.isChatInputCommand()) return;

        const { commandName } = i
        const command = app.commands.find(cmd => cmd.data.name === commandName);
        if (command) {
            try {
                await command.execute(i);
            } catch (error) {
                switch (error) {
                    case 'Unknown interaction':
                        await i.reply({ content: 'Occurred error in executing your command. Sorry, try again later.', ephemeral: true });
                        console.error(chalk.redBright('Err Detected in Interaction:'), chalk.bgRed(error))
                    default:
                        break;
                }
            }
        } else {
            console.warn(`Sorry, this command don't exist: ${commandName}`);
        }
    }
};
