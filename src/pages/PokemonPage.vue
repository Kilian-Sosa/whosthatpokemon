<template>
  <h1 v-if="!pokemon">Loading... Please wait</h1>
  <div v-else>
    <h1>Who's that Pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="false"/>
    <PokemonOptions :pokemons="pokemonIds"/>
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
            pokemon: null
        }
    },
    methods: {
      async mixPokemons() {
        this.pokemonIds = await getPokemonOptions();

        this.pokemon = this.pokemonIds[Math.floor(Math.random() * this.pokemonIds.length)];
      }
    },
    mounted() {
        this.mixPokemons();
    }
}
</script>

<style>

</style>