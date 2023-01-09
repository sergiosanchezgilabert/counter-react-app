import { getSaludo } from "../../src/base-pruebas/02-template-string-export-function"

describe('Pruebas with 02', () => {
    test('getSaludo debe retornar "Hola Sergio"', () => {
        const name = 'Sergio'

        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)
    })

})