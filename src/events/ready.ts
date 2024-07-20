import { Events } from 'discord.js';
import { GbyteClient } from '../structures/app.js';
import { log } from 'console';
import chalk from 'chalk';

export default {
    name: Events.ClientReady,
    once: true,
    execute(app: GbyteClient) {
        log(chalk.whiteBright('\n⦁'), chalk.green(`Bot ${chalk.whiteBright(chalk.italic(chalk.underline(app.user?.tag)))} and system in operation.`))
    }
};
