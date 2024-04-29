<template>
  <h1>Who's that Pokémon?</h1>
  <PokemonPicture :pokemonId="251" :showPokemon="false"/>
  <PokemonOptions :pokemons="pokemonIds"/>
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
            correctPokemonId: null
        }
    },
    methods: {
      async mixPokemons() {
        this.pokemonIds = await getPokemonOptions();
      }
    },
    mounted() {
        this.mixPokemons();
    }
}
</script>

<style>

</style>