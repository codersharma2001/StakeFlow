# Staking DApp

A modern, user-friendly decentralized application for staking tokens on the Ethereum blockchain.

## Features

- Connect wallet functionality
- Stake and withdraw tokens
- Real-time display of staked amount, reward rate, and earned rewards
- Claim rewards
- Responsive design with animated UI elements

## Tech Stack

- React
- Ethers.js
- CSS3 with animations
- React Hot Toast for notifications

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MetaMask browser extension

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/staking-dapp.git
   cd staking-dapp
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   VITE_STAKING_CONTRACT_ADDRESS=your_staking_contract_address
   VITE_STAKE_TOKEN_ADDRESS=your_stake_token_address
   ```

## Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:
