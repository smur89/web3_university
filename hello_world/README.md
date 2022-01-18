# Part I
> https://www.web3.university/article/hello-world-smart-contract

## Prerequisite
A `dotenv` file containing the 
```dotenv
API_URL = "..." # Alchemy Key
PRIVATE_KEY = "..." # Wallet Private key
```

## Compile
```shell
npx hardhat compile
```

## Deploy
```shell
npx hardhat run scripts/deploy.js --network ropsten
```
