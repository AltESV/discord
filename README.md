# Discord Bot

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/your-username/your-repo.svg)](https://github.com/your-username/your-repo/issues)
[![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo.svg)](https://github.com/your-username/your-repo/stargazers)

🤖 **Discord Bot** is a bot for Discord that performs various functions and commands. It is built using [discord.js](https://discord.js.org/), a powerful library for interacting with the Discord API.

## Features

- 🤝 Support for multiple commands and interactions.
- ✨ Dynamic command handling and loading from separate files.
- 🔒 Interaction authentication and error handling.
- 🎮 Integration with the OpenAI GPT-3.5 Turbo model for chat responses.
- 📊 Integration with Google Sheets API to fetch FAQ data.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use the Discord Bot, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running the following command:

```shell
npm install
```

## Configuration

Before running the bot, make sure to set up the configuration.

1. Create a new `.env` file in the root directory of the project.
2. Provide the required configuration values in the `.env` file:

```plaintext
LOGIN_TOKEN=YOUR_DISCORD_BOT_TOKEN
CLIENT_ID=YOUR_DISCORD_CLIENT_ID
GUILD_ID=YOUR_DISCORD_GUILD_ID
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

- `LOGIN_TOKEN`: Your Discord bot token. Obtain this token from the Discord Developer Portal.
- `CLIENT_ID`: Your Discord client ID. Obtain this from the Discord Developer Portal.
- `GUILD_ID`: The ID of the Discord guild (server) where you want to deploy the bot.
- `OPENAI_API_KEY`: Your OpenAI API key. Get this key from the OpenAI platform.
- `GOOGLE_API_KEY`: Your Google Sheets API key. Obtain this key from the Google Cloud Console.

## Usage

To start the Discord Bot, run the following command:

```shell
npm start
```

The bot will now be online and ready to respond to commands and interactions in your Discord server.

## Commands

The bot supports the following commands:

- `/hey`: Replies from Hugh! This command interacts with the OpenAI GPT-3.5 Turbo model to provide responses. It also fetches FAQ data from Google Sheets API.
  - Usage: `/hey --input [question]`

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please create an issue in the [GitHub repository](https://github.com/your-username/your-repo/issues). Pull requests are also encouraged.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License
