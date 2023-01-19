import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

/*1. Ejecutar el test -> yarn test 
2. Para ejecutar solo el test FirstApp -> w y luego p */
//yarn add -D jest-environment-jsdom
//yarn add -D @babel/preset-react
describe('Pruebas en <FirstApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Sergio'
        const subtitle = 26
        render(<FirstApp subtitle={subtitle} />)

    })

})
