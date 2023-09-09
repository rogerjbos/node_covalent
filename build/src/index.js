// console.log('Try npm run lint/fix!');
import { Client } from "@covalenthq/client-sdk";
ckey = "test";
var ckey = process.env.COVALENT;
console.log(process.env.COVALENT);
const ApiServices = async () => {
    const client = new Client(process.env.COVALENT);
    const resp = await client.BalanceService.getTokenBalancesForWalletAddress("eth-mainnet", "ben.eth");
    if (!resp.error) {
        console.log(resp.data);
    }
    else {
        console.log(resp.error_message);
    }
};
console.log("starting");
const resp = await ApiServices();
console.log("finished");
//# sourceMappingURL=index.js.map