import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import PetCard from "./PetCard"



describe('PetCard component', () => {
    test('Should display name', () => {
        // expect(1).toBe(1);
        render(
            <BrowserRouter>
                <PetCard pet={{ name: 'Pesho' }} />
            </BrowserRouter>
        );
        console.log(screen.queryByText('h3'))
        expect(document.querySelector('h3').textContent.split(' ')[1]).toBe('Pesho');
    });

    test('Should increase likes when pet button is pressed', () => {

        render(
            <BrowserRouter>
                <PetCard pet={{ likes: 2 }} />
            </BrowserRouter>
        )

        expect(document.querySelector('span').textContent).toBe('2');
    })
})