# DegenToken Smart Contract

DegenToken is an Ethereum smart contract that implements an ERC-20 token with additional functionalities. It allows users to interact with the token by minting, transferring, burning, checking token balance and redeeming tokens for in-game items from a predefined game store.

## Description

The DegenToken smart contract is designed to provide users with a versatile ERC-20 token that supports various operations, including minting, transferring, burning, and redeeming. Additionally, users can exchange their tokens for in-game items from a selection available in the game store.

## Getting Started

### Installing

To deploy and interact with the DegenToken smart contract, follow these steps:

1. Download or clone the source code from the repository.

2. Ensure you have a compatible Solidity development environment. The contract uses Solidity version 0.8.18.

3. Install the required dependencies by running the following command in the project directory:
   
   ```
   npm install @openzeppelin/contracts
   ```

### Executing Program

To deploy and use the DegenToken smart contract:

1. Deploy the contract to an Ethereum blockchain network using tools like Remix, Avalance Fuji Testnet, or Hardhat.

On Local Hardhat Network
```bash
$ npx hardhat run scripts/deploy.js --network 
```
On Avalance Fuji Testnet 
```bash
$ npx hardhat run scripts/deploy.js --network fuji
```

2. Once deployed, you can interact with the contract using Ethereum wallet software, such as MetaMask.

3. You can call various functions, including minting tokens, transferring tokens, burning tokens, checking balances, and redeeming tokens for in-game items.
```bash
$ npx hardhat verify <YOUR TOKEN ADDRESS> --network fuji
```

## Help

If you encounter any issues or have questions about using the DegenToken smart contract, you can refer to the official Solidity documentation or seek assistance from the Ethereum community forums.

## Authors

- B Gautham Naidu
- bgautham27@gmail.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
