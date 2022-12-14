import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import ModalNewUser from '../../components/Modal/ModalNewUser/ModalEditUser'

export default {
    title:'Modal',
    component: ModalNewUser
} as ComponentMeta<typeof ModalNewUser>



const Template:ComponentStory<typeof ModalNewUser> = (args) => {

    return<ModalNewUser {...args}/>
}

export const ModalNewUserComponent = Template.bind({})
ModalNewUserComponent.args={
    size:'md',
    textHeader:'New User'
}