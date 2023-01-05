import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import { RoundBtn } from '../../components/Button/RoundButton/RoundButton';

export default {
    title:'Button',
    component: RoundBtn
} as ComponentMeta<typeof RoundBtn>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof RoundBtn> = (args) => {

    return<RoundBtn {...args}/>
}

export const RoundButtonComponent = Template.bind({})
RoundButtonComponent.args={
    iconName:'ListBullets',
}