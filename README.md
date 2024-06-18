# BarkBOT Webapp

This project is generated with the [create-solana-dapp](https://github.com/solana-developers/create-solana-dapp) generator.

## Getting Started

### Prerequisites

- Node v18.18.0 or higher
- Rust v1.77.2 or higher
- Anchor CLI 0.30.0 or higher
- Solana CLI 1.18.16 or higher

### Installation

#### Clone the repo

```shell
git clone https://github.com/bark-community/barkbot-webapp
cd barkbot-webapp
```

#### Install Dependencies

```shell
npm install
```

#### Start the web app

```shell
npm run dev
```

## Apps

### anchor

This is a Solana program written in Rust using the Anchor framework.

#### Commands

You can use any normal anchor commands. Either move to the `anchor` directory and run the `anchor` command or prefix the command with `npm run`, eg: `npm run anchor`.

#### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program.

You will manually need to update the constant in `anchor/lib/basic-exports.ts` to match the new program id.

```shell
npm run anchor keys sync
```

#### Build the program:

```shell
npm run anchor-build
```

#### Start the test validator with the program deployed:

```shell
npm run anchor-localnet
```

#### Run the tests

```shell
npm run anchor-test
```

#### Deploy to Devnet

```shell
npm run anchor deploy --provider.cluster devnet
```

### web

This is a React app that uses the Anchor generated client to interact with the Solana program.

#### Commands

Start the web app

```shell
npm run dev
```

Build the web app

```shell
npm run build
```

## Project Structure

### Web App

The web app is built with Next.js, React, TypeScript, and Tailwind CSS. It includes a landing page for Bark**BOT**, a Telegram bot for trading BARK tokens on the Solana blockchain. 

### Backend Server

The backend server is built with Node.js and Express, providing an API for fetching BARK token prices and interacting with the Telegram bot.

### Telegram Bot

The Telegram bot is implemented using `node-telegram-bot-api` to provide real-time BARK token (BARK) trading capabilities directly within the Telegram app.

## Environment Variables

Create a `.env.local` file in the root of bot project and add environment variables:

```
NEXT_PUBLIC_API_URL=https://api.bark.bot
```

Create a `.env` file in the `server` directory and add environment variables:

```
PORT=3001
TELEGRAM_BOT_TOKEN=bark_telegram_bot_token
```

## Usage

1. **Run the backend server:**

```shell
cd server
node index.js
```

2. **Run the Telegram bot:**

```shell
node bot.js
```

3. **Run the Next.js application:**

```shell
cd ../barkbot-landing
npm run dev
```

## Features

- **Instant Transactions**: Paste a token address into Telegram and instantly send a purchase transaction.
- **Powered by Jupiter**: Routing powered by Jupiter ensures the fastest and most efficient trades.
- **Comprehensive Analytics**: Gain insights into your trading performance with detailed analytics.

## Packages

This projects operates as an NX monorepo that requires each of the child packages deployed to the NPM package registry:

create-solana-dapp: The CLI tool that generates a new project.
preset-anchor: A preset for create-solana-dapp that adds Anchor support.
preset-common: Shared utilities for create-solana-dapp presets.
preset-next: A preset for create-solana-dapp that adds Next.js support.
preset-react: A preset for create-solana-dapp that adds React support.
solana-dev: A CLI tool that with utilities for developing Solana dApps.

## Documentation

- Bark**BOT** API [API documentation](https://bark-protocol-1.gitbook.io/barkbot-or-telegram-solana-token-trading-bot/)

## License

MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.