import fetch from "node-fetch";
import { Response } from "node-fetch";

async function printMyIP(): Promise<void> {
    try {
        const response: Response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
    } catch (err) {
        console.error('Error', err);
    }
}

console.log(await printMyIP());