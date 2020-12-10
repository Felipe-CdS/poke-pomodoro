import { addNewPokemon } from './ApiRequests'

export var pokemonIdArray = new Array();

/*Saves a new ID in cookies*/
export function setCookies(pokemonId){
    pokemonIdArray.push(pokemonId);
    document.cookie = `ids=${pokemonIdArray} SameSite=Lax; Secure; Path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";`;
}


/*Reads the array saved in cookies, parse it and add a new pokemon in the screen for each ID found on the array */
export function startCookieSave(){

    //starts at => ids=70,20,53 Secure
    pokemonIdArray = decodeURIComponent(document.cookie).split(' ')[0];

    //go to => ids=,70,20,53
    pokemonIdArray = pokemonIdArray.replace("ids=", "");

    //go to =>  70,20,53
    pokemonIdArray = pokemonIdArray.split(',');

    //done, a nice array from the decodeURIComponent() response.

    pokemonIdArray.forEach(id => {
        addNewPokemon(id);
    });

}


