import fetch from "node-fetch";
import { Response } from "node-fetch";

const countNames: number = 3;
const URL: string = 'https://random-data-api.com/api/name/random_name';

async function getRandomNames(URL: string): Promise<string[]> {
    const names: string[] = [];
    for(let currentNameNumber: number = 0; currentNameNumber < countNames; currentNameNumber++){
        const response: Response = await fetch(URL);
        const data = await response.json();
        names.push(data.name);
    }
    return names;
}

const names: string[] = await getRandomNames(URL);
names.map( name => console.log(name) );
