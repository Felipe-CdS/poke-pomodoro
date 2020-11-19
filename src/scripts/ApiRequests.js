import axios from 'axios';

const api = axios.create({baseURL: "https://pokeapi.co/api/v2"});
  
function requestAPI(pokemonId){
    api.get(`/pokemon/${pokemonId}`).then(function(response){
        console.log(response.data.name)
    });  
}

export function addNewPokemon(pokemonId){
    requestAPI(pokemonId);

    var pokemonIconSpan = document.createElement("span");

    var pokemonIcon = document.createElement("img");
    pokemonIcon.setAttribute("src", "./Assets/icons/" + pokemonId + ".png");

    pokemonIconSpan.appendChild(pokemonIcon);
    document.getElementById("pokebox-body").appendChild(pokemonIconSpan);
}