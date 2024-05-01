<template>
  <h1 v-if="!pokemon">Loading... Please wait</h1>
  <div v-else>
    <h1>Who's that Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="this.showPokemon"/>

    <PokemonOptions :pokemons="pokemonIds" @selection="checkAnswer"/>

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame()">Next</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
    components: { PokemonPicture, PokemonOptions },
    data() {
        return {
            pokemonIds: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
      async mixPokemons() {
        this.pokemonIds = await getPokemonOptions();

        this.pokemon = this.pokemonIds[Math.floor(Math.random() * this.pokemonIds.length)];
      },
      checkAnswer(selectedId) {
        this.showPokemon = true;
        this.showAnswer = true;

        this.message = selectedId === this.pokemon.id ? 'Correct' : 'Oops'
        this.message +=`, it's ${this.pokemon.name.toUpperCase()}!`;
      },
      newGame() {
        this.pokemon = null;
        this.showPokemon = false;
        this.showAnswer = false;
        this.message = '';

        this.mixPokemons();
      }
    },
    mounted() {
        this.mixPokemons();
    }
}
</script>

<style>

</style>