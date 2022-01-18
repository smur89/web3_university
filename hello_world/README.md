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
* [Etherscan Transaction](https://ropsten.etherscan.io/tx/0xbdcd5cafb6dcf8cccce408c6f836f085cbb23a34842fc987eac9032eb2dcd7cc)

# Part II
> https://www.web3.university/article/interacting-with-a-smart-contract

## Update
```shell
npx hardhat run scripts/interact.js --network ropsten
```
* [Etherscan Transaction](https://ropsten.etherscan.io/tx/0x4d7b2757eb941e2a8af9c6d6e42c8f68269e9ebca8a735298009d63db718754d)