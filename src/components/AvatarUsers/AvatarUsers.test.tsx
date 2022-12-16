import { cleanup, render, screen} from "@testing-library/react"
import {afterEach, describe, expect, test, vitest } from "vitest"
import user from '@testing-library/user-event'
import AvatarUsers from "./AvatarUsers"


describe('AvatarUsers',()=>{
    afterEach(cleanup)

    it('render correctly', () => {
		render(<AvatarUsers/>)
	})
    it('Renderizar el AvatarUsers',()=>{
        render(<AvatarUsers/>)
        const avatar =  screen.getByRole('avatar')
        expect(avatar).toBeInTheDocument()
    })
    it('Verificar que se muestre el texto', () => {
        render(<AvatarUsers />)
    
        const p = screen.getByRole('paragraph1')
    
        expect(p).toBeInTheDocument()
    })
    it('Verificar que se muestre el texto', () => {
        render(<AvatarUsers />)
    
        const p2 = screen.getByRole('paragraph2')
    
        expect(p2).toBeInTheDocument()
    })
    it('Funciona correctamente el método onClick del AvatarUsers', async () => {
        const onClick = vitest.fn()
    
        render(<AvatarUsers onClick={onClick}/>)
    
        const buttonAvatar = screen.getByRole('clickAvatar')
    
        await user.click(buttonAvatar)
    
        expect(onClick).toBeCalled()
      })

      
    


})