import{ getUser} from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', ()=> {
    test('getUse debe de retornar un objeto', () => { 
        const testUser = {
            uid: ' ABC123',
            username:'el usuario'
        };
        const user = getUser();

        expect( testUser).toBe( user);
     })
  test('getUsuarioArivo debe de retornar un objeto ', () =>{
    const name ='Bryan'

    const user = getUserActivo(name);

    expert(user).toStrictEqual({
        uid: 'ABC567',
        username: name
    })
  })
    
})