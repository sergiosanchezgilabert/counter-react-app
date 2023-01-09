//Instalar jest -> yarn add --dev jest
describe('Pruebas', () => {
    test('Esta prueba no debe de fallar ', () => { //Ejecutar el test -> yarn test 

        // 1. inicializacion
        const message1 = 'Hola Mundo'

        // 2. estimulo
        const message2 = message1.trim()//Quita espacios en blanco al principio y final de la cadena

        // 3. Observar el comportamiento esperado
        expect(message1).toBe(message2) //yarn add -D @types/jest0
    })

})