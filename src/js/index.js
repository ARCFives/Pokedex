
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// função dos sons dos pokémons
function grito(nome){
    const somPokemon = new Audio()
    switch (nome) {
        case pikachu:
            somPokemon.src = 'src/audio/pikachu.wav'
            somPokemon.play()
            break;
        
        case bulbasaur:
            somPokemon.src = 'src/audio/bulbasaur.mp3'
            somPokemon.play()
            break;
        case charmander:
            somPokemon.src = 'src/audio/charmander.wav'
            somPokemon.play()
            break;
        case dragonite:
            somPokemon.src = 'src/audio/dragonite.wav'
            somPokemon.play()
            break;
        case gengar:
            somPokemon.src = 'src/audio/gengar.wav'
            somPokemon.play()
            break;
        case gyarados:
            somPokemon.src = 'src/audio/gyarados.wav'
            somPokemon.play()
            break;
        case pidgey:
            somPokemon.src = 'src/audio/pidgey.wav'
            somPokemon.play()
            break;
        case ditto:
            somPokemon.src = 'src/audio/ditto.wav'
            somPokemon.play()
            break;
        default: alert('sem audio')
            break;
    }tch
} 


// Função de seleçao dos pokémons
 listaSelecaoPokemons.forEach(pokemon => {
     pokemon.addEventListener('click', () => {
        // remover o cartão
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // add o cartão
        const idPokemonselecionado = pokemon.attributes.id.value
        const idCartaoAbrir = 'cartao-' + idPokemonselecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // remover ativo da lista
        const pokemonAtivo = document.querySelector('.ativo')
        pokemonAtivo.classList.remove('ativo')

        // add ativo a lista
        const pokemonSelecionado = document.getElementById(idPokemonselecionado)
        pokemonSelecionado.classList.add('ativo')
     })
 })
