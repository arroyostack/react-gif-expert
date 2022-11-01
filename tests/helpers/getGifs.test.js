import { getGifs } from "../../src/helpers/getGifs"

describe('Unit test for for getGifs() function ', () => {

    // TEST 1
    test('getGifs() should return a gif array', async () => {

        const gifs = await getGifs('Superman');

        expect(gifs.length).toBeGreaterThan(0)

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    })

})