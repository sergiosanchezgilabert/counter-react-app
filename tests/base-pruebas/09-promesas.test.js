import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {
    test('getHeroeById debe de obtener un error si heroe no existe', () => {
        const id = 100
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe(`No se pudo encontrar el héroe`)
                done()
            })

    })

})
