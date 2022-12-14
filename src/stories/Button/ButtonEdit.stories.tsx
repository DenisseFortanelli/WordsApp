import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import ButtonEdit from '../../components/Button/ButtonEdit/ButtonEdit';

export default {
    title:'Button',
    component: ButtonEdit
} as ComponentMeta<typeof ButtonEdit>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof ButtonEdit> = (args) => {

    return<ButtonEdit {...args}/>
}

export const ButtonEditComponent = Template.bind({})
ButtonEditComponent.args={
    size:'md',
    backgroundColor:'var(--celeste600)',
    onClick:handleClick,
    text:'Edit User'
}