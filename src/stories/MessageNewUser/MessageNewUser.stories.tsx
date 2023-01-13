import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import { MessageNewUser } from '../../components/MessageNewUser/MessageNewUser'

export default {
    title:'MessageNewUser',
    component: MessageNewUser
} as ComponentMeta<typeof MessageNewUser>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}


const Template:ComponentStory<typeof MessageNewUser> = (args) => {

    return<MessageNewUser {...args}/>
}

export const MessageNewUserComponent = Template.bind({})
MessageNewUserComponent.args={
    onClick:handleClick,
    message:'Created a New User!'
}