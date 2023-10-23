import fetch, {Response} from "node-fetch";

type callbackFunction = (ip: string) => void;
async function getMyIp(callback: callbackFunction): Promise<void>  {
    const response: Response = await fetch("https://api.ipify.org?format=json");
    const data: {ip: string} = await response.json();
    callback(data.ip)
}

async function printMyIp(): Promise<void>{
    return await getMyIp(ip => {
        console.log(ip);
    })
}

await printMyIp();