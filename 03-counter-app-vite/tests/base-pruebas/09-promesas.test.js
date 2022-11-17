import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe(' pruebas en 09-promesas', () =>{ 
    test('getHeroeByIdasync debe de retornar un heroue', () => { 
        const id = 1; 
        getHeroeByIdAsync(id)
            .then(hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {
                expect(error ).toBe(`no se puede encontrar`);
                done();
            });
            
     });
});