import fetch from "node-fetch";
import {Response} from "node-fetch";

async function printMyIP(): Promise<string> {
    const response: Response = await fetch("https://api.ipify.org?format=json");
    const data: {ip: string} = await response.json();
    return data.ip
}

console.log(await printMyIP());
