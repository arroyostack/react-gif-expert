import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Unit testing for <GifItem/>', () => {
    const title = 'Superman';
    const url = 'https://one-punch.com/superman'

    // TEST 1
    test('should match the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })
    //  TEST 4
    test('should show the image with adecuated url and alt', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug()
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( alt );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })
    // TEST 3
    test('should show the title on the component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy()
    })
})