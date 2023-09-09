## Covalent TypeScript SDK

This TS project is a minimal example of using the [Covalent TypeScript SDK](https://www.npmjs.com/package/@covalenthq/client-sdk?activeTab=readme).

I encountered some problems getting the example to work so I wanted to make this repo to help other get up to speed more quickly.  For example, I had to add the following to the `package.json` file:
```
"type": "module",
```
Also, in order to prevent errors when transpiling I had to add some flags to the usual command:
```
npx tsc -t es2022 -m es2022 --moduleResolution node
```
I have added this in the scripts to make it easier to run.

After you have cloned this repo, follow these steps.

#### Step 1: install the Covalent SDK

```
npm i @covalenthq/client-sdk
```

#### Step 2: add you API key

The quick way to do this is to hard-code it into the src/index.ts file by replacing
```
const client = new Client(process.env.COVALENT!);
```
with
```
const client = new Client("ckey_...");
```

The safer way is to save the API key in your environment, but TypeScript makes this tricky.  I used [this guide](https://nodejs.org/api/process.html#process_process_env).  So I stored my API key in the `~/.zshrc` file with `COVALENT="ckey_..."` and then utilized it as shown above:
```
const client = new Client(process.env.COVALENT!);
```
Note the `!` after the name of the environmental variable.  Without that the compiler will give you an error and you will have no joy.  That character basically tells the compiler to stand down and let you get on with your life.

For debugging purposes you may want to uncomment line 4 so you can verify that your API key is being red in properly.

Don't forget after you add the API key to your `~/.zshrc` file you will probably have to re-start your IDE before it will start working.

#### Step 3: Compile to TypeScript

You can use the following script to compile the `src/index.ts` file:
```
npm run compile
```

#### Step 4: Run the JS code

You output file will be in build folder.  You can right click on the file and choose `Run Code.`  You can also run it using the `node` command with the full path to the index.js file.
