<template>
  <h1>Who's that Pokémon?</h1>
  <PokemonPicture />
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