import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputModal from '../../components/InputsModal/InputsModal';


export default {
	title: 'Input',
	component: InputModal,
} as ComponentMeta<typeof InputModal>

const handleClick = () => {

}

const Template: ComponentStory<typeof InputModal> = (args) => {
	return <InputModal {...args} />
}

export const InputModalComponent = Template.bind({})
InputModalComponent.args = {
	size: 'lg',
	type: 'text',
	text: 'user@user.com',
	textTitle: 'Email*',
	eventHandler: handleClick,
}