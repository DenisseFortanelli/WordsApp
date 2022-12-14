import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import LanguageButton from '../../components/Button/LanguageButton';
import { EN } from '../../components/Iconography/Flags';

export default {
    title:'Button',
    component: LanguageButton
} as ComponentMeta<typeof LanguageButton>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof LanguageButton> = (args) => {

    return<LanguageButton {...args}/>
}

export const LanguageButtonComponent = Template.bind({})
LanguageButtonComponent.args={
    flag: <EN/>,
}
