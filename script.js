const namePokemon = document.querySelector(".namePokemon")
const numberPokemon = document.querySelector(".numberPokemon")
const typePokemon = document.querySelector(".typePokemon")
const imgPokemon = document.querySelector(".imgPokemon")
const inputPokemon = document.querySelector(".inputPokemon")
const form = document.querySelector('.form')

let colorTypes = {
    fire: 'DE4B37',
    water: '3D8DDD',
    electric: 'CAB250',
    ghost: '9D5CDD',
    fighting: 'CD681A',
    steel: 'C6C6C6',
    ground: 'B5803D',
    poison: '72009C',
    dragon: '1CA4AD',
    grass: '64CF33',
    normal: 'CC6000',
    bug: '4A9800',
    flying: '2D98CE',
    psychic: 'AD1A78',
    rock: '7C2400',
    ice: '60B9BF',
    dark: '212F40',
    fairy: 'B100A1'
}

function stringCap(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toLowerString(string){
    console.log(string.toLowerCase());
    return string.toLowerCase()
}

const fetchPokemon = async pokemon => {
    const responseAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await responseAPI.json();
    return data;
}

const renderPokemon = async pokemon => {
    const data = await fetchPokemon(pokemon);
    const sizeType = data['types'].length
    console.log('Pokemon', stringCap(data.name), 'has', sizeType, 'types')
    
    let types = [];
    for(let i = 0; i < sizeType; i++){
        types.push(data.types[i].type.name)
        console.log(types)
    }

    namePokemon.innerHTML = `${stringCap(data.name)}`;
    numberPokemon.innerHTML = `${data.id}`;
    imgPokemon.src = data.sprites.front_default
    types.forEach(type =>{
        typePokemon.innerHTML += (`<p style="background-color: #${colorTypes[type]}; padding: 5px; border-radius: 5px">${stringCap(type)}</p>`)
    })
}

form.addEventListener('submit', event =>{
    console.log('Event submitted')
    const pokemon = inputPokemon.value.toLowerCase()

    renderPokemon(pokemon)
    form.reset()
    typePokemon.innerHTML = ''
    event.preventDefault();
})

document.addEventListener('DOMContentLoaded', () => {
    console.log('Ok');
})

