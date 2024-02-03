const namePokemon = document.querySelector(".namePokemon")
const numberPokemon = document.querySelector(".numberPokemon")
const typePokemon = document.querySelector(".typePokemon")
const imgPokemon = document.querySelector(".imgPokemon")
const inputPokemon = document.querySelector(".inputPokemon")
const form = document.querySelector('.form')

function capitalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toLowerString(string){
    console.log(string.toLowerCase());
    return string.toLowerCase()
}

const fetchPokemon = async pokemon => {
    const responseAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.value}`)

    const data = await responseAPI.json();
    return data;
}

const renderPokemon = async pokemon => {
    const data = await fetchPokemon(pokemon);
    
    const sizeType = data['types'].length

    console.log('Pokemon', data.name, 'has', sizeType, 'types')
    
    let type = [];
    for(let i = 0; i < sizeType; i++){
        type.push(data.types[i].type.name)
        console.log(type)
    }

    namePokemon.innerHTML = `Pokemon: ${capitalizeString(data.name)}`;
    numberPokemon.innerHTML = `Pokemon n°: ${data.id}`;
    imgPokemon.src = data.sprites.front_default
    for(let i = 0; i < type.length; i++){
        typePokemon.innerHTML += (`<br>${capitalizeString(type[i])}</br>`)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Ok');
})

form.addEventListener('submit', event =>{
    console.log('Event submitted')
    const pokemon = inputPokemon.value
    console.log(pokemon.type)

    renderPokemon(pokemon)
    form.reset()
    typePokemon.innerHTML = ''
    event.preventDefault();
})