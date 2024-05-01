import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture.vue'

describe('PokemonPicture component', () => { 

    test('should match snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        });
        
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should show hidden image and pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        });

        const [img1, img2] = wrapper.findAll('img');

        expect(img1.exists()).toBeTruthy();
        expect(img2).toBeUndefined();
        
        expect(img1.classes('hidden-pokemon')).toBeTruthy();

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
    })

    test('should show pokemon if showPokemon:true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        });

        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();
        expect(img.classes('hidden-pokemon')).toBeFalsy();
        expect(img.classes('fade-in')).toBeTruthy();
    })
 })