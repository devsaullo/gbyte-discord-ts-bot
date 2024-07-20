import { Client, ClientOptions, GatewayIntentBits, REST, Routes } from "discord.js";
import { Command } from '../interface/command.js'
import { readdirSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'node:url';
import 'dotenv/config';
import chalk from 'chalk';
import { log, error, warn } from "console";

// Options for the bot props (the native "intents" property of Discord.js is replaced by "flags").
interface GbyteOptions extends Omit<ClientOptions, 'intents'> {
    appToken: string;
    flags: GatewayIntentBits[];
    clientId: string;
    guildId: string;
}

// Extension of the Discord.js client for customizations and enhancements.
export class GbyteClient extends Client {
    public appToken: string;
    public flags: GatewayIntentBits[];
    public commands: Command[];
    public clientId: string;
    public guildId: string;

    constructor(options: GbyteOptions) {
        super({ ...options, intents: options.flags });
        this.commands = [];
        this.flags = options.flags;
        this.appToken = options.appToken;
        this.clientId = options.clientId;
        this.guildId = options.guildId;

    }

    private async loadEvents() {
        try {
            const ePath = join(import.meta.dirname, '../events');
            const eFiles = readdirSync(ePath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

            for (const file of eFiles) {
                const filePath = join(ePath, file);
                const fileUrl = pathToFileURL(filePath).href;
                const { default: event } = await import(fileUrl);
                event?.once ?
                    this.once(event.name, (...args) => event.execute(this, ...args)) :
                    this.on(event.name, (...args) => event.execute(this, ...args));
            }
            log(chalk.whiteBright('⦁'), chalk.green('Events loaded successfully.'))
        }

        catch (erro) {
            error(chalk.whiteBright('⦁'), chalk.red('Error loading events:'), chalk.bgRedBright(erro));
        }
    }

    private async loadCommands() {
        try {
            const cPath = join(import.meta.dirname, '../commands');
            const cFiles = readdirSync(cPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

            for (const file of cFiles) {
                const filePath = join(cPath, file);
                const fileUrl = pathToFileURL(filePath).href;
                const { default: command } = await import(fileUrl);
                if ('data' in command && 'execute' in command) {
                    this.commands.push(command);
                } else {
                    warn(chalk.whiteBright('⦁'), chalk.bgYellowBright(`The file ${file} was not correctly exported.`));
                }
            }
            log(chalk.whiteBright('⦁'), chalk.green('Commands loaded successfully.'));
        } catch (erro) {
            error(chalk.whiteBright('⦁'), chalk.red('Error loading commands:'), chalk.bgRedBright(erro));
        }

    }

    private async registerCommands() {
        const rest = new REST({ version: '10' }).setToken(this.appToken);
        const commandsData = this.commands.map(cmd => cmd.data);
        const writeLog = (content: string): void => { process.stdout.write(content) };
        let regisType = null;
        try {
            if (this.guildId) {
                regisType = 'local'
                writeLog('\r' + `${chalk.yellow(chalk.whiteBright('⦁'), 'Trying to register local commands...')}`);
                await rest.put(Routes.applicationGuildCommands(this.clientId, this.guildId), { body: commandsData });
            }
            else {
                regisType = 'global'
                writeLog('\r' + `${chalk.yellow(chalk.whiteBright('⦁'), 'Trying to register global commands...')}`);
                await rest.put(Routes.applicationCommands(this.clientId), { body: commandsData })
            }
            writeLog('\r' + `${chalk.green(chalk.whiteBright('⦁'), `Successfully registered ${regisType} commands.`)}`);
        } catch (erro) {
            writeLog('\r\r' + chalk.whiteBright('⦁ ') + chalk.red('Error registering commands: ') + chalk.bgRedBright(erro));
        }
    }

    public async go() {
        log(chalk.whiteBright('⦁'), chalk.blueBright('Loading System...'))
        await this.loadEvents();
        await this.loadCommands();
        await this.registerCommands();
        this.login(this.appToken);
    }
}