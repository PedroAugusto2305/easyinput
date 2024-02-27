import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const question = (query) => new Promise((resolve) => rl.question(query, resolve));
  const answer = await question("What do you think?");
  console.log(`Olá, ${answer}`);
  rl.close();
}

main();
