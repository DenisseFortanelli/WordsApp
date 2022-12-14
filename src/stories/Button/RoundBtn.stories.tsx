import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import { RoundButton } from '../../components/Button/RoundButton/RoundButton';

export default {
    title:'Button',
    component: RoundButton
} as ComponentMeta<typeof RoundButton>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof RoundButton> = (args) => {

    return<RoundButton {...args}/>
}

export const RoundButtonComponent = Template.bind({})
RoundButtonComponent.args={
    iconName:'ListBullets',
}