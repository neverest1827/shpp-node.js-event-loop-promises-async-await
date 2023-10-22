import fetch from "node-fetch";
import {Response} from "node-fetch";

const URL: string = 'https://random-data-api.com/api/users/random_user';
const searchGender: string = 'Female'
const parallelRequestCount: number = 5;

type TypeData = {gender : string}
async function getUserGender(url: string): Promise<string> {
    const response: Response = await fetch(url);
    const data: TypeData= await response.json();
    return data.gender;
}

async function searchUser(url: string, searchGender: string): Promise<number> {
    let counter = 0;

    while (true){
        const responses: Promise<string>[] = [];

        for (let i = 0; i < parallelRequestCount; i++) {
            responses.push( getUserGender(url) );
        }

        const results: string[] = await Promise.all(responses);
        if (results.includes(searchGender)) {
            return ++counter
        }
        counter++;
    }
}

const numTries = await searchUser(URL, searchGender);
console.log(`\`It took us ${numTries} attempts to find a user with the gender female\``)