import fetch, {Response} from "node-fetch";

const countRequests: number = 3;
const URL: string = 'https://random-data-api.com/api/name/random_name';

async function  getRandomNames(url: string): Promise<string[]> {
    const responses: Response[] = await getResponses(url);
    const data: Response[] = await Promise.all(responses);
    return Promise.all(data.map(
        async (data: Response): Promise<string> => {
            const information = await data.json()
            return information.name
        })
    )
}

async function getResponses(url: string): Promise<Response[]> {
    const promises: Promise<Response>[] = [];
    for (let currentRequestNumber: number = 0; currentRequestNumber < countRequests; currentRequestNumber++){
        const promise: Promise<Response> = fetch(url);
        promises.push(promise);
    }
    return Promise.all(promises);
}

const names: string[] = await getRandomNames(URL);
names.map( (name: string) => console.log(name) )