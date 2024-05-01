import pokeApi from '@/api/pokeApi';

describe('pokeApi', () => { 
    test('axios should be configured with the pokemon API', () => { 
        expect(pokeApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon/')
     })
 })