import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent, MouseEventHandler } from 'react'
import AvatarUsers from '../../components/AvatarUsers'

export default {
    title:'AvatarUsers',
    component: AvatarUsers
} as ComponentMeta<typeof AvatarUsers>

const handleClick = (e: MouseEvent<HTMLDivElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof AvatarUsers> = (args) => {

    return<AvatarUsers {...args}/>
}

export const AvatarUsersComponent = Template.bind({})
AvatarUsersComponent.args={
    size:'md',
    backgroundColor:'var(--gray500)',
    onClick:handleClick,
    numberOfCharacters:2,
    createBy:'Isaura Romero',
    emailUser:'isa.romero@company.mx'
}