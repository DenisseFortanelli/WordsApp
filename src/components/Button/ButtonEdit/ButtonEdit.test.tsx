import { cleanup, render,screen  } from "@testing-library/react"
import {afterEach, describe, expect, test, vitest } from "vitest"
import user from '@testing-library/user-event'
import ButtonEdit from "./ButtonEdit"


describe('Button Edit',()=>{
    afterEach(cleanup)

    test('render correctly', () => {
		render(<ButtonEdit />)
	  })

    test('Renderizar el botón editar',()=>{
        render(<ButtonEdit/>)
        const ButtonEdt =  screen.getByRole('button')
        expect(ButtonEdt).toBeInTheDocument()
    })
    test('Funciona correctamente el método onClick', async () => {
        const onClick = vitest.fn()
    
        render(<ButtonEdit onClick={onClick} />)
    
        const button = screen.getByRole('button')
    
        await user.click(button)
    
        expect(onClick).toBeCalled()
      })

})