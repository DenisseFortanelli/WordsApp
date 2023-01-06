import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExampleModalNewUser } from '../../components/Modal/ModalExamples/ExampleModalNewUser';

export default {
    title: 'Modal',
    component: ExampleModalNewUser
} as ComponentMeta<typeof ExampleModalNewUser>



const Template: ComponentStory<typeof ExampleModalNewUser> = (args) => {

    return <ExampleModalNewUser {...args} />
}

export const ExampleModalNewUserComponent = Template.bind({})
ExampleModalNewUserComponent.args = {
    size: 'md',
    textHeader: 'New User'
}