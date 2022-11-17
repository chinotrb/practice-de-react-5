import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', ()=>{
    test('getHeroeByid debe de retornar un heroe por Id', () => { 
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1,name: 'Batman', owner})
    })
})
