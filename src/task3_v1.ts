import fetch, {Response} from "node-fetch";

const countNames: number = 3;
const URL: string = 'https://random-data-api.com/api/name/random_name';

async function  getRandomNames(url: string): Promise<string[]> {
    const responses: Response[] = await getResponse(url);
    const data: Response[] = await Promise.all(responses);
    return Promise.all(data.map( async (data: Response): Promise<string> => {
        const information = await data.json()
        return  information.name
    } ))
}

async function getResponse(url: string): Promise<Response[]> {
    const responses: Response[] = [];
    for (let currentNameNumber: number = 0; currentNameNumber < countNames; currentNameNumber++){
        const response: Response = await fetch(url);
        responses.push(response);
    }
    return responses;
}

const names: string[] = await getRandomNames(URL);
names.map( (name: string) => console.log(name) )