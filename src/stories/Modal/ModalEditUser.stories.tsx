import {ComponentMeta, ComponentStory} from '@storybook/react'
import { ExampleModalEditUser } from '../../components/Modal/ModalExamples/ExampleModalEditUser'

export default {
    title:'Modal',
    component: ExampleModalEditUser
} as ComponentMeta<typeof ExampleModalEditUser>

const Template:ComponentStory<typeof ExampleModalEditUser> = (args) => {

    return<ExampleModalEditUser {...args}/>
}

export const ExampleModalEditUserComponent = Template.bind({})
ExampleModalEditUserComponent.args={
    size:'md',
    textHeader:'Edit User'
}