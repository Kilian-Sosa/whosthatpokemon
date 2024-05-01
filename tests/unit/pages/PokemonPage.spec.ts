import { shallowMount, mount, VueWrapper } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage.vue'
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage Page', () => {
    let wrapper: VueWrapper<any>;
    let mixPokemonsSpy: jest.SpyInstance;

    beforeEach(() => {
        mixPokemonsSpy = jest.spyOn(PokemonPage.methods as any, 'mixPokemons');

        jest.clearAllMocks();

        wrapper = shallowMount(PokemonPage);
    })

    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should call mixPokemons when mounted', () => {
        expect(mixPokemonsSpy).toHaveBeenCalledTimes(1);
    })

    test('should match snapshot after loading the pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonIds: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should render PokemonPicture and PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonIds: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });

        const pokemonPicture = wrapper.find('pokemon-picture-stub');
        const pokemonOptions = wrapper.find('pokemon-options-stub');

        expect(pokemonPicture.exists()).toBeTruthy();
        expect(pokemonOptions.exists()).toBeTruthy();

        expect(pokemonPicture.attributes('pokemonid')).toBe('25');
        expect(pokemonOptions.attributes('pokemons')).toBeTruthy();
    })

    test('should select an answer', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonIds: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });

        await wrapper.vm.checkAnswer(25);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBeTruthy();
        expect(wrapper.vm.showAnswer).toBeTruthy();
        expect(wrapper.vm.message).toBe(`Correct, it's ${pokemons[0].name.toUpperCase()}!`);

        await wrapper.vm.checkAnswer(1);

        expect(wrapper.vm.message).toBe(`Oops, it's ${pokemons[0].name.toUpperCase()}!`);
    })
})