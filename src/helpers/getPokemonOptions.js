import pokeApi from '@/api/pokeApi'

const getPokemons = () => {
    const pokemons = Array.from(Array(650));
    return pokemons.map((_, index) => index + 1);
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
    return pokemons;
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    const promises = [
        pokeApi.get(`${a}`),
        pokeApi.get(`${b}`),
        pokeApi.get(`${c}`),
        pokeApi.get(`${d}`),
    ];
    const [p1, p2, p3, p4] = await Promise.all(promises);
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ];
}

export default getPokemonOptions;