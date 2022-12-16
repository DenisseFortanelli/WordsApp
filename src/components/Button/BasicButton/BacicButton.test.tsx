import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vitest } from "vitest";
import BasicButton from './BasicButton';
import user from '@testing-library/user-event'

describe('Button Basic', () => {
	afterEach(cleanup)

	test('render correctly', () => {
		render(<BasicButton />)
	})

	test('Verificación de renderizado de botón', () => {

		render(<BasicButton />)
		const BasicBtn = screen.getByRole('button')
		expect(BasicBtn).toBeInTheDocument()
	})
	test('Funciona correctamente el método onClick', async () => {
        const onClick = vitest.fn()
    
        render(<BasicButton onClick={onClick} />)
    
        const button = screen.getByRole('button')
    
        await user.click(button)
    
        expect(onClick).toBeCalled()
      })
})