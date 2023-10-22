import fetch from "node-fetch";
import {Response} from "node-fetch";

const URL: string = 'https://random-data-api.com/api/users/random_user';
const searchGender: string = 'Female'
const parallelRequestCount: number = 5;
let requestCounter: number = 0;

type TypeData = {gender : string}
function getUserGender(url: string): Promise<string> {
    return fetch(url)
        .then( (response: Response) => response.json() )
        .then( (data: TypeData) => data.gender )
        .catch( (): string => 'Gender not found' )
}

function searchUser(url: string, searchGender: string, counterValue?: number): Promise<number> {
    let counter: number =  counterValue ? counterValue : 0
    const promises: Promise<string>[] = getPromises(url)

    return Promise.all(promises)
        .then( (usersGender: string[]) => {
            if( usersGender.includes(searchGender) ) {
                return ++counter
            }
            return searchUser(url, searchGender, ++counter)
        } );

}

function getPromises(url: string): Promise<string>[] {
    const promises: Promise<string>[] = []

    for (let i = 0; i < parallelRequestCount; i++) {
        promises.push(getUserGender(url));
    }

    return promises;
}

searchUser(URL, searchGender)
    .then( num => console.log(`It took us ${num} attempts to find a user with the gender female `) )
