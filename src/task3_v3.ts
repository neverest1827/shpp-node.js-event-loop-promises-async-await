import fetch, {Response} from "node-fetch";

const countRequests: number = 3;
const URL: string = 'https://random-data-api.com/api/name/random_name';

function getRandomName(url: string): Promise<string> {
    return fetch(url)
        .then((response: Response) => response.json())
        .then(data => data.name)
        .then(name => name)
}

function getPromises(url: string): Promise<string>[] {
    const promises: Promise<string>[] = []

    for (let i: number = 0; i < countRequests; i++) {
        promises.push(getRandomName(url))
    }

    return promises
}

function printRandomNames(url: string): void {
    const promises: Promise<string>[] = getPromises(url);
    const names: string[] = [];

    function processPromise(index: number): void {
        if (index < promises.length) {
            promises[index]
                .then( (name: string) => {
                    names.push(name);
                    processPromise(index + 1);
                })
        } else {
            names.forEach((name: string) => console.log(name));
        }
    }

    processPromise(0);
}


printRandomNames(URL);