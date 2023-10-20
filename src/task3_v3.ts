import fetch from "node-fetch";
import { Response } from "node-fetch";

type TypeResponse = {
    name: string;
}

const countResponse: number = 3;
const responses: Promise<TypeResponse>[] = [];

for (let i: number = 0; i < countResponse; i++) {
    responses.push(
        fetch('https://random-data-api.com/api/name/random_name')
            .then((response) => response.json())
            .then((data: TypeResponse) => data)
    )
}

let names: string[] = ['', '', ''];
setTimeout( (responses) => {


}, checkResult(names));

function checkResult(names: string[]): number {
    for(let name of names){
        if (name) return 1
    }
    return 0
}