import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExampleModalDeleteUser } from '../../components/Modal/ModalExamples/ExampleModalDeleteUser';

export default {
	title: 'modal',
	component: ExampleModalDeleteUser
} as ComponentMeta<typeof ExampleModalDeleteUser>

const Template: ComponentStory<typeof ExampleModalDeleteUser> = (args) => {
	return <ExampleModalDeleteUser {...args} />
}

export const ExampleModalDeleteUserComponent = Template.bind({})
ExampleModalDeleteUserComponent.args = {
	title: 'Delete Users',
	body: 'The users you selected will be permanently deleted, do you want to continue?'
}