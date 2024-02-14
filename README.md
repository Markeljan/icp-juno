<img width="400" alt="image" src="https://github.com/Markeljan/icp-juno/assets/12901349/9bd3f37c-7517-4c29-b622-afe159f8e67c">

# Helper for Web3 GPT frontend deployer

## Usage

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

Code is deployed to both ICP (localhost) and Juno using:

```bash
dfx deploy

juno deploy
```

