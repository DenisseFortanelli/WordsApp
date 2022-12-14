import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import BasicBtn from '../../components/Button/BasicButton/BasicButton';

export default {
    title:'Button',
    component: BasicBtn
} as ComponentMeta<typeof BasicBtn>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof BasicBtn> = (args) => {

    return<BasicBtn {...args}/>
}

export const BasicBtnComponent = Template.bind({})
BasicBtnComponent.args={
    size:'md',
    backgroundColor:'var(--celeste700)',
    colorText:'var(--white)',
    onClick:handleClick,
    text:'New User'
}