import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../src/components/AddCategory'

describe('Unit test for <AddCategory/>', () => {

    // TEST 1
    test('should change the value of search bar', () => {

        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');


        fireEvent.input(input, { target: { value: 'Superman' } });
        expect(input.value).toBe('Superman')
        // screen.debug()

    })

    // TEST 2
    test('should invoke onNewCategory if the input has a value', () => {
        const inputValue = 'Superman';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        // screen.debug()


    })

    // TEST 3
    test('should not called onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();


    })




})