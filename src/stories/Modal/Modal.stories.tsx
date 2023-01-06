import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '../../components/Modal/index';
import { ExampleModalNewUser } from '../../components/Modal/ModalExamples/ExampleModalNewUser';

export default {
	title: 'modal',
	component: Modal,
	decorators: [
		(Story) => (
			<div style={{ padding: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
				{Story()}
			</div>
		)
	]
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
	return <Modal {...args} />
}

export const ModalComponent = Template.bind({})
ModalComponent.args = {
	children:
		<ExampleModalNewUser
		size='md'
		textHeader='New User'
		/>,
	isOpen: true,
}