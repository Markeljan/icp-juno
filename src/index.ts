import cors from "@elysiajs/cors";
import { readableStreamToText } from "bun";
import { Elysia, t } from "elysia";

const app = new Elysia();

app
  .use(cors())
  .post(
    "/deploy-html",
    async ({ body, set }) => {
      const deployResults = await deployHtml(body.sourceCode);

      if (!deployResults) {
        set.status = 500;
        return { error: "Failed to deploy" };
      }

      return deployResults;
    },
    {
      body: t.Object({
        sourceCode: t.String(),
      }),
    }
  )
  .listen(4040, () => {
    console.log("Server is running on port 4040");
  });

const PATH = "out/index.html";
const ICP_PATH = "./icp-canister/assets/src/index.html";

async function deployHtml(sourceCode: string) {
  // save the source code to ./index.html
  await Bun.write(PATH, sourceCode);
  await Bun.write(ICP_PATH, sourceCode);

  // run the juno deploy command in the terminal
  const subprocess = Bun.spawn({
    cmd: ["juno", "deploy"],
    stdout: "pipe",
  });
  const deployResult = await readableStreamToText(subprocess.stdout);

  console.log("deployResult", deployResult);
  //split the result and extract the second https:// link
  const deploymentUrl = deployResult.split("https://");
  const junoUrl = `https://${deploymentUrl[2].trim()}`;

  // run dfx deploy from ./icp-canister
  const subprocessIcp = Bun.spawn({
    cmd: ["dfx", "deploy"],
    cwd: "./icp-canister",
    stdout: "pipe",
    stderr: "pipe", // Capture stderr as well
  });

  const deployResultIcp = await readableStreamToText(subprocessIcp.stdout);
  const errorResultIcp = await readableStreamToText(subprocessIcp.stderr);

  //join the two results ihnto one string

  const combinedIcpResult = deployResultIcp + errorResultIcp;

  const icpUrl = `http://${combinedIcpResult.split("www: http://")[1].trim()}`;

  return {
    junoUrl,
    icpUrl,
  };
}
