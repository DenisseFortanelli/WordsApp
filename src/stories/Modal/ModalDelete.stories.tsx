import { ModalDelete } from '../../components/Modal/ModalDelete/ModalDelete';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
	title: 'modal',
	component: ModalDelete
} as ComponentMeta<typeof ModalDelete>

const Template: ComponentStory<typeof ModalDelete> = (args) => {
	return <ModalDelete {...args} />
}

export const ModalDeleteComponent = Template.bind({})
ModalDeleteComponent.args = {
	title: 'Delete Users',
	body: 'The users you selected will be permanently deleted, do you want to continue?'
}