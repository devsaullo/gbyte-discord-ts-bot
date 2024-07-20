import { CommandInteraction } from "discord.js";

export interface Command {
    data: {
        name: string;
        description: string;
        defaultPermission?: boolean | true;
    };
    execute: (interaction: CommandInteraction) => Promise<void>;
}

