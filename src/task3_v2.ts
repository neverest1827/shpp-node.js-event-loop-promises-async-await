import fetch from "node-fetch";
import { Response } from "node-fetch";

const countRequests: number = 3;
const URL: string = 'https://random-data-api.com/api/name/random_name';

async function getRandomName(url: string): Promise<string> {
    const response: Response = await fetch(url);
    const data = await response.json();
    return data.name
}

async function getRandomNames(url: string){
    const promises: Promise<string>[] = []
    const names: string[] = []

    for (let i: number = 0; i < countRequests; i++){
        promises.push( getRandomName(url) )
    }

    for (const promise of promises){
        const name: string = await promise;
        names.push(name);
    }

    return names;
}

async function printRandomNames(url: string): Promise<void>{
    const names: string[] = await getRandomNames(url);
    names.map( (name: string) => console.log(name) )
}

await printRandomNames(URL);
