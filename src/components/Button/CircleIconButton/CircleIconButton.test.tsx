import { cleanup, render, screen} from "@testing-library/react"
import {afterEach, describe, expect, test, vitest } from "vitest"
import user from '@testing-library/user-event'
import { CircleIcon } from "./CircleIconButton"


describe('Circle Icon Button',()=>{
    afterEach(cleanup)

    it('render correctly', () => {
		render(<CircleIcon iconName={'Phone'}/>)
	  })

    it('Renderizar el botón CircleIcon',()=>{
        render(<CircleIcon iconName={'Phone'}/>)
        const Icon =  screen.getByRole('button')
        expect(Icon).toBeInTheDocument()
    })
    it('Funciona correctamente el método onClick del botón', async () => {
        const onClick = vitest.fn()
    
        render(<CircleIcon onClick={onClick} iconName={'Phone'}/>)
    
        const buttonIcon = screen.getByRole('button')
    
        await user.click(buttonIcon)
    
        expect(onClick).toBeCalled()
      })

})