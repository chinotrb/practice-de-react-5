import {getSaludo} from '../src/base-pruebas/02-template-string'
describe( '02-template-string',() => {

    test('getSaludo debe de retonar "hola bryan', () => { 
        const name = 'Bryan';
        const message = getSaludo(name)
        
        expect(message).toBe(`hola ${ name }!!!`)
     });
     
})