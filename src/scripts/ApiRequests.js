import axios from 'axios';
import { setCookies } from './Cookies'

const api = axios.create({baseURL: "https://pokeapi.co/api/v2"});

let urlMap = new Map();

async function requestAPI(pokemonId){
    var urlString = await api.get(`/pokemon/${pokemonId}`).then(function(response){
        return(response.data.sprites.front_default);
    });

    urlMap.set(`${pokemonId}`, urlString);
}

export async function addNewPokemon(pokemonId){
    if(pokemonId == ""){return;}
    setCookies(pokemonId);

    await requestAPI(pokemonId);
    
    var pokemonIconSpan = document.createElement("span");
    pokemonIconSpan.classList.add("pokemon-icon-span");

    var pokemonPortraitSpan = document.createElement("span");
    pokemonPortraitSpan.classList.add("pokemon-portrait-span");
    pokemonPortraitSpan.style.backgroundImage="url('" + urlMap.get(pokemonId.toString()) + "')";


    var pokemonIcon = document.createElement("img");
    pokemonIcon.setAttribute("src", "./Assets/icons/" + pokemonId + ".png");

    pokemonIconSpan.appendChild(pokemonIcon);
    pokemonIconSpan.appendChild(pokemonPortraitSpan);
    document.getElementById("pokebox-body").appendChild(pokemonIconSpan);
}