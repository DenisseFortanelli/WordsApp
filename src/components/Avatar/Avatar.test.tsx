import { cleanup, render, screen} from "@testing-library/react"
import {afterEach, describe, expect, test, vitest } from "vitest"
import user from '@testing-library/user-event'
import Avatar from "./Avatar"


describe('Avatar',()=>{
    afterEach(cleanup)

    it('render correctly', () => {
		render(<Avatar/>)
	})
    it('Renderizar el Avatar',()=>{
        render(<Avatar/>)
        const avatar =  screen.getByRole('avatar')
        expect(avatar).toBeInTheDocument()
    })
    it('Verificar que se muestre el texto', () => {
        render(<Avatar />)
    
        const p = screen.getByRole('paragraph1')
    
        expect(p).toBeInTheDocument()
    })
    it('Verificar que se muestre el texto', () => {
        render(<Avatar />)
    
        const p2 = screen.getByRole('paragraph2')
    
        expect(p2).toBeInTheDocument()
    })
    it('Funciona correctamente el método onClick del Avatar', async () => {
        const onClick = vitest.fn()
    
        render(<Avatar onClick={onClick}/>)
    
        const buttonAvatar = screen.getByRole('clickAvatar')
    
        await user.click(buttonAvatar)
    
        expect(onClick).toBeCalled()
      })

      
    


})