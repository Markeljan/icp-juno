# ICP & Juno AI Dapp Frontend Deployer

Deploy fullstack decentralized applications using AI + decentralized hosting in minutes.
Microservice for [w3gpt.ai](https://w3gpt.ai) for deploying ICP frontend via ICP canisters and Juno Satelites. Made with Bun & ElysiaJS

## Video Demo

<p align="center">
  <a href="https://youtu.be/zPlBT3T20OA?si=1UYIywHkrB2n2NMf">
    <img width="1722" alt="image" src="https://github.com/Markeljan/icp-juno/assets/12901349/8f6e3404-66c3-492d-971f-a5171910c95c">
  </a>
</p>


## Features

- Write and deploy Solidity smart contracts on w3gpt.ai

- Contracts are auto verified, IPFS codebase is created with source files

- **Generate Frontend** After deploying a contract, frontend code can be generated using the contract source code and ABI

- **Deploy Frontend** Request is sent from w3gpt.ai to Elysia server AWS microservice or local instance.

- Elysia server deploys the frontend to both ICP and Juno using shell commands and returns deployment urls


## Example Dapps

<p align="center">
<img width="500" alt="image" src="https://github.com/Markeljan/icp-juno/assets/12901349/84ca5a7b-205d-4f04-9daa-4861a402b097">
<img width="500" alt="image" src="https://github.com/Markeljan/icp-juno/assets/12901349/48702167-29fa-4ad8-b2ae-0dcde27c55ab">
</p>
<p align="center">
<img width="500" alt="image" src="https://github.com/Markeljan/icp-juno/assets/12901349/a1f876c3-4f26-4bf0-840d-583d6f81bf56">
<img width="400" alt="image" src="https://github.com/Markeljan/icp-juno/assets/12901349/959d8298-c243-4f20-a8b6-06643679a7ed">
</p>


## Setup

```bash
bun i

bun run dev

```

## Elysia server

Server runs on port 4040 and accepts POST requests with body:

```json
{
  "sourceCode": "string"
}
```

Code is deployed to both ICP (localhost) and Juno using shell commands:

```bash
dfx deploy

juno deploy
```

* Built during Encode x Internet Computer Hackathon
* For frontend implementation see [Web3 GPT respository](https://github.com/markeljan/web3gpt)
