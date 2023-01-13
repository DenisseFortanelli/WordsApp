import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import { ABCButton } from '../../components/Button/ABCButton/ABCButton';

export default {
    title:'Button',
    component: ABCButton
} as ComponentMeta<typeof ABCButton>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof ABCButton> = (args) => {

    return<ABCButton {...args}/>
}

export const ABCButtonComponent = Template.bind({})
ABCButtonComponent.args={
    letter:'A',
    active:true
}