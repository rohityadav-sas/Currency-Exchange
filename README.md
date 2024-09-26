# Currency Exchange App
A dynamic React-based currency exchange application that empowers users to effortlessly convert currencies with up-to-date exchange rates. Built with modern web technologies like Vite, Bun, and Tailwind CSS, this project exemplifies efficient state management and seamless API integration for a smooth user experience.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Real-time Currency Conversion**: Convert between multiple currencies using live exchange rates.

- **User-friendly Interface**: Clean and intuitive UI for seamless navigation.

- **Currency Swap**: Easily switch between the source and target currencies.

## Technologies Used
- **React**: JavaScript library for building user interfaces.

- **Vite**: Next-generation frontend tooling.

- **Bun**: Fast JavaScript runtime.

- **Tailwind CSS**: Utility-first CSS framework for styling.

- **ExchangeRate API**: For fetching real-time currency exchange rates.

## Installation
To get started with this project, clone the repository and install the dependencies:

   ```sh
   git clone https://github.com/rohityadav-sas/Currency-Exchange.git

   cd Currency-Exchange
   
   bun install
   ```

## Environment Variables
Create a .env file in the root directory and add your API key:

```sh
VITE_API_KEY=your_api_key_here
```

## Usage
To run the application in development mode, use:

```bash
bun run dev
```

Navigate to `localhost:5173` in your browser to see the app in action.

## API
This app uses the `ExchangeRate API` to fetch currency exchange rates. Make sure to sign up and get your API key.

## Deployment
```bash
bun run deploy
```

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.