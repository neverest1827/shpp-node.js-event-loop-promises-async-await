import fetch from "node-fetch";
import { Response } from "node-fetch";


const countResponse: number = 3;
const requests: Promise<Response>[] = [];

for (let i: number = 0; i < countResponse; i++) {
    requests.push(
        fetch('https://random-data-api.com/api/name/random_name')
    )
}

async function getNames(): Promise<void> {
    try {
        const responses: Response[] = await Promise.all(requests);
        const data: Response[] = await Promise.all( responses
            .map(async (response: Response) :Promise<Response> => {
                return await response.json();
            })
        )

        data.map( data => console.log(data.name) )
    } catch (err) {
        console.error('Error', err);
    }
}

getNames();
