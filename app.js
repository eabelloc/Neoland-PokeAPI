const mainURL = "https://pokeapi.co/api/v2";
const pokeURL = "/pokemon/"
const ListaPokemon = []

window.onload = () => {
init();
};

const init = async () => {
    const pokemons = await getPokemons();
    mappedPokemon(pokemons);
};

const getPokemons = async () => {
    for(index=1; index<151; index++) {
        const pokemonApi = await fetch (`${mainURL}${pokeURL}${index}`);
        const convertoJson = await pokemonApi.json();
        ListaPokemon.push(convertoJson);
    }  
};

const mappedPokemon = () => {
    ListaPokemon.map((pokemon) => {
        return printPokemon ({id:pokemon.id ,
                             nombre: pokemon.name, 
                             imagen: pokemon.sprites.other.dream_world.front_default,
                             tipos: getTypes(pokemon.types)
                             
                             //tipos: pokemon.types[0].type.name
        })
})};

const printPokemon = (pokemon) => {
    //console.log(pokemon)
        const pokemonContainer = document.querySelector('#pokemonContainer')
        pokemonContainer.innerHTML += `
        <figure class="${pokemon.tipos[0]}">
            <h3 class="pokemon_id">${pokemon.id}</h3>
            <div class="img_container">
                <img src="${pokemon.imagen}" alt="${pokemon.nombre}"/>
                <h3>${pokemon.nombre}</h3>
                <h4>${pokemon.tipos.join('/')}</h4>
            </div>
        </figure>
        `
};

const getTypes = (types) => {
    const typeNames = [];
    types.forEach((element) => {
        typeNames.push(element.type.name);
    });
    return typeNames
}

//tipo: pokemon.types.type.name
//<p>${pokemon.tipo}</p>
/*PARALLAX :3*/
$(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.2)+'px');
  }