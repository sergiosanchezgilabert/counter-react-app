import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08', () => {
    test('getHeroeById debe retornar un heroe por id ', () => {
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe retornar undefined', () => {
        const id = 100
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()
    })
    test('getHeroeByOwner debe retornar un heroe por nombre "DC" ', () => {
        const nameOwner = 'DC'
        const heros = getHeroesByOwner(nameOwner)

        expect(heros.length).toEqual(3)

        expect(heros).toEqual(heros.filter((heroes) => heroes.owner === nameOwner))
    })
    test('getHeroeByOwner debe retornar un heroe por nombre "Marvel" ', () => {
        const name = 'Marvel'
        const heros = getHeroesByOwner(name)

        expect(heros.length).toEqual(2)
    })
})



