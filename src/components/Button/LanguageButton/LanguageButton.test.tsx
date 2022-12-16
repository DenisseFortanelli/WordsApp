import { cleanup, render,screen } from "@testing-library/react"
import { vitest } from "vitest"
import { MX } from "../../Iconography/Flags"
import LanguageButton from "./index"
import user from '@testing-library/user-event'



describe('LanguageButton',()=>{
    afterEach(cleanup)


    it('Renderiza correctamente el componente',()=>{
        render(<LanguageButton flag={<MX/>}/>)
    })

    it('Renderizar que exista el componente en el documento',()=>{
        render(<LanguageButton flag={<MX/>}/>)
        const Icon =  screen.getByRole('button')
        expect(Icon).toBeInTheDocument()
    })
    it('Funciona correctamente el método onClick del botón', async () => {
        const onClick = vitest.fn()
    
        render(<LanguageButton flag={<MX/>} onClick={onClick}/>)
    
        const languagebtn = screen.getByRole('button')
    
        await user.click(languagebtn)
    
        expect(onClick).toBeCalled()
      })

    
})