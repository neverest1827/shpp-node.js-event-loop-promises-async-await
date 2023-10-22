import fetch from "node-fetch";
import { Response } from "node-fetch";

const response: Response = await fetch("https://api.ipify.org?format=json");
const data: {ip: string} = await response.json();

console.log(data.ip)
