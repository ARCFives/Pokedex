const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
const gritoPokemonSele = document.querySelectorAll('.cry')
let nomePokemon = 'pikachu'
 
gritoPokemonSele.forEach(cry => {
    cry.addEventListener('click', () => {
        const gritoPokemon = new Audio ()
        gritoPokemon.src = `src/audio/${nomePokemon}.wav`
        gritoPokemon.play()   
    })
})

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
        nomePokemon = idPokemonselecionado

        // remover ativo da lista
        const pokemonAtivo = document.querySelector('.ativo')
        pokemonAtivo.classList.remove('ativo')

        // add ativo a lista
        const pokemonSelecionado = document.getElementById(idPokemonselecionado)
        pokemonSelecionado.classList.add('ativo')
     })
 })