![project_banner](https://i.imgur.com/XTD6YjN.jpeg)

## About 🔎

This is a simple bot made in **TypeScript** for the Discord environment. It includes basic commands and aims to demonstrate the robustness of the **discord.js** library, which is used for managing the Discord API. This promotes an easier way to handle your bot's events through functions.

It was used [discord.js](https://discord.js.org/) It was used [discord.js guide](https://discordjs.guide/#before-you-begin).

**Current & Future Implementations:**

> - Events Handler;
> - Commands Handler;
> - Custom Client (with simplified data passing);
> - Modern project standardized in ES6.

**Used versions of dependencies in the project:**

> - Node.js: **v20.11.1**.
> - Discord.js: **v14**.
> - TypeScript: **v5**.

 #### Important
 > This project uses **ts-node** and **nodemon** to compile and execute **TypeScript** code instantly after any changes you make. If you prefer, you can remove both and compile manually (recommended). However, you can keep them by default if you want faster compilation and execution times. Note that this setup does not generate a dist directory. **If you need a dist directory, you will have to compile manually**.

## Getting Started 🚀 
**1 - 🔗 Clone the repository at the URL:**
```bash 
    git clone https://github.com/devsaullo/gbyte-discord-ts-bot.git
    cd gbyte-discord-ts-bot
```
**2 - 🔧 Configuration of environment variables.:**

- Rename your archive [**`.env.local`**](.env.local) to ==> **`.env`**;
- Configure the environment variables that are currently present in your setup. **`.env`**:
```
 BOT_GBYTE_TOKEN=YourTokenBot
 BOT_GBYTE_CLIENT_ID=YourClientIDApplication
 BOT_GBYTE_GUILD_ID=YourGuildIDTheRegisterSlashCommandsInLocal
```

**3 - ⚙️ TypeScript & Nodemon configurations in the project:**  (Optional)
> - Access your [**`tsconfig.json`**](tsconfig.json) and adjust the configuration as needed. ⬇️
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "resolveJsonModule": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
> - Access your [**`nodemon.json`**](nodemon.json) and adjust the configuration as needed. ⬇️

```
{
    "watch": ["src"],
    "ext": "ts",
    "ignore": ["src/**/*.spec.ts"],
    "exec": "node --loader ts-node/esm --experimental-specifier-resolution=node src/index.ts"
}
```
**4 - ⬇️ Installing all depedencies**:
```bash
npm install
yarn install
pnpm install
```

**5 - 🏁 Running Bot in development mode**: (Default) 
```
npm run dev
yarn dev
pnpm run dev

```

**6 - ✅ Running the bot with the compiled code in the [`dist`](dist) folder**:
> - ##### First, you need to compile the current code from TypeScript to JavaScript. This process will generate a folder called "dist" at the root of your project. This folder will contain the entire structure of your current TypeScript code, but in JavaScript instead.
```
npm run build
yarn build
pnpm run build

```
> - ##### Finally, to run the compiled code of your bot in JavaScript, you just need to execute the following command in your terminal:

```
npm run prod
yarn prod
pnpm run prod
```

> 🚧 **A tip for youuuu.**
>
> If everything goes well, you will have something like this in the end.
>
> ![sucess_start_bot](https://i.imgur.com/6FzFGAM.png)
> 
> 🚨 You can notice that it will inform where the slash commands were registered. **By default, they are registered in Local**, which is your guild's ID. If you want the commands to be registered globally, you only need to leave the **``BOT_GBYTE_GUILD_ID``** variable in your [**``.env``**](.env) file empty. Once you do this, the commands will be **registered globally** (use this only when the bot is ready for production).


## Interaction With The Bot 🤖 
### </>️ Commands Examples (Default) 
> - 👋 /hello **-** Replying to the user with 'Hello, (nameUser)".
> - 📡 /ping **-** Reply with the Discord WebSocket ping.
>

 ![commands_slash_dc](https://i.imgur.com/4kiBBMj.png)
### 💭 Slash Commands Responses
> This is execution the 2 example commands, listed above. ⬆️

 ![commands_response_dc](https://i.imgur.com/ouBGCxi.png)
___
## Author(s) this project 👨🏻‍💻

- [@devsaullo](https://github.com/devsaullo)

## Licenses 📖
>This project can be used by anyone and can be fully modified as well. If you want to add an improvement and contribute to the project, make a **[pull request.](https://github.com/devsaullo/gbyte-discord-ts-bot/pulls)** This is an example of a bot made by me in **TypeScript**, a simple one just to demonstrate how powerful it is to use a runtime environment in **Node.js** combined with **powerful libraries**.

Some of the licenses for this project in question:

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

[![AGPL License](https://img.shields.io/badge/License-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)