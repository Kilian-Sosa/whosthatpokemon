<template>
  <h1>Who's that Pokémon?</h1>
  <PokemonPicture :pokemonId="251" :showPokemon="false"/>
  <PokemonOptions />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

export default {
    name: 'PokemonPage',
    components: { PokemonPicture, PokemonOptions }
}
</script>

<style>

</style>