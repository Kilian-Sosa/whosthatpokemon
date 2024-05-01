import { VueWrapper, shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions.vue'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should show all 4 options correctly', () => {
        const liTags = wrapper.findAll('li');

        expect(liTags.length).toBe(4);

        liTags.forEach((li, index) => {
            expect(li.text()).toBe(pokemons[index].name)
        })

        //     expect(liTags[0].text()).toBe('pikachuu');
        //     expect(liTags[1].text()).toBe('charmander');
        //     expect(liTags[2].text()).toBe('venusaur');
        //     expect(liTags[3].text()).toBe('mew');
    })

    test('should emit "selection" with respective parammeters when click is triggered', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li');
        li1.trigger('click');
        li2.trigger('click');
        li3.trigger('click');
        li4.trigger('click');

        expect(wrapper.emitted('selection')?.length).toBe(4);
        
        pokemons.forEach((pokemon, index) => {
            expect(wrapper.emitted('selection')![index]).toEqual([pokemon.id]);
        })
        
        // expect(wrapper.emitted('selection')![0]).toEqual([pokemons[0].id]);
        // expect(wrapper.emitted('selection')![1]).toEqual([pokemons[1].id]);
        // expect(wrapper.emitted('selection')![2]).toEqual([pokemons[2].id]);
        // expect(wrapper.emitted('selection')![3]).toEqual([pokemons[3].id]);
    })
})