import fetch, {Response} from "node-fetch";

async function getMyIP(): Promise<string> {
    const response: Response = await fetch("https://api.ipify.org?format=json");
    const data: {ip: string} = await response.json();
    return data.ip
}

type callbackFunction = (ip:string) => void;

async function printMyIp(callback: callbackFunction): Promise<void> {
    callback(await getMyIP())
}

await printMyIp(ip => console.log(ip))