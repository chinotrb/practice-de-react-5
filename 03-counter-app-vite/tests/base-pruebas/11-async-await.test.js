import {getImagen} from '../base-pruebas/11-async-await'
describe('pruebas en 11-async-await', () => { 

    test('se debe retornar el url de la imagen', async() => { 

        const url = await getImagen();
        console.log(url).toBe('string')

     })
 })