import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Unit testing for <GifGrid/> component', () => {
    const category = 'Superman';

    test('should initialy show isLoading component', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category))
     

    })

    test('should show items when images are loaded by useFetchGif custom hook', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Superman',
                url: 'https://localhost/Superman'
            },
            {
                id: 'RTY',
                title: 'Goku',
                url: 'https://localhost/Goku'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />);

        expect( screen.getAllByRole('img').length).toBe(2)
        // screen.debug();




    })

})