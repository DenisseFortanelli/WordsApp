import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent, MouseEventHandler } from 'react'
import Avatar from '../../components/Avatar'

export default {
    title:'Avatar',
    component: Avatar
} as ComponentMeta<typeof Avatar>

const handleClick = (e: MouseEvent<HTMLDivElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof Avatar> = (args) => {

    return<Avatar {...args}/>
}

export const AvatarComponent = Template.bind({})
AvatarComponent.args={
    size:'md',
    backgroundColor:'var(--gray500)',
    onClick:handleClick,
    numberOfCharacters:2,
    createBy:'Create By',
    textName:'Marta Rodriguez'
}