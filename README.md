# ICP & Juno AI Dapp Frontend Deployer

Deploy fullstack decentralized applications using AI + decentralized hosting in minutes.
Microservice for [w3gpt.ai](https://w3gpt.ai) for deploying ICP frontend via ICP canisters and Juno Satelites. Made with Bun & ElysiaJS

<p align="center">
[<img width="500" alt="Screenshot 2024-02-14 at 9 48 52 AM" src="https://github.com/Markeljan/icp-juno/assets/12901349/41845419-82f2-4324-93b3-f274fa37dc16">](https://youtu.be/zPlBT3T20OA?si=1UYIywHkrB2n2NMf)
</p>


## Features

- Write and deploy Solidity smart contracts on w3gpt.ai

- Contracts are auto verified, IPFS codebase is created with source files

- **Generate Frontend** After deploying a contract, frontend code can be generated using the contract source code and ABI

- **Deploy Frontend** Request is sent from w3gpt.ai to Elysia server AWS microservice or local instance.

- Elysia server deploys the frontend to both ICP and Juno using shell commands and returns deployment urls


## Screenshots
<p align="center">
<img width="400" alt="image" src="https://github.com/Markeljan/icp-juno/assets/12901349/9bd3f37c-7517-4c29-b622-afe159f8e67c">
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
