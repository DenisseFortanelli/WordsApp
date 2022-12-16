import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import ImageRectangle from './index';

afterEach(cleanup)

it('Renderizar la imagen de ImageRectangle', () => {
    render(<ImageRectangle />)
    const RectangleImg = screen.getByRole('banner')
    expect(RectangleImg).toBeInTheDocument()
})
it('Mostrar el Alt(Texto) del banner', () => {
    render(<ImageRectangle />)
    const RectangleImg2 = screen.getByAltText('BannerImage')
    expect(RectangleImg2).toBeInTheDocument()
})
it('Renderizar Avatar si no esta Resgistrado', () => {
    render(<ImageRectangle />)
    screen.debug()
    const AvatarLogin = screen.getByAltText('avatar')
    expect(AvatarLogin).toBeInTheDocument()
})