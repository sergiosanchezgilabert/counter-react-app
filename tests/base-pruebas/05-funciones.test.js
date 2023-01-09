import { getUser } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-functions', () => {
    test('getUser debe de retornar un objeto ', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(testUser).toEqual(user)
        expect(testUser).toStrictEqual(user)
    })

})


