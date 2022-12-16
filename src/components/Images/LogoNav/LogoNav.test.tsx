import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import LogoNav from './index';

describe(' Logo Navbar', () => {
	afterEach(cleanup)

	test('Verificación de renderizado de Logo', () => {

		render(<LogoNav />)
		const Image = screen.getByRole('img')
		expect(Image).toBeInTheDocument()
	})
})